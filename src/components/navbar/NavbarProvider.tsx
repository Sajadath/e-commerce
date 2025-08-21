"use client";

import { AnimatePresence, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import NavbarSticky from "./NavbarSticky";

function NavbarProvider() {
  const [isNavbarInView, setIsNavbarInView] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarIsInView = useInView(navbarRef);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!navbarIsInView) {
      setIsNavbarInView(false);
    } else {
      setIsNavbarInView(true);
    }
  }, [navbarIsInView]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowStickyNavbar(false);
      } else {
        // scrolling up
        setShowStickyNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Navbar navbarRef={navbarRef} />

      <AnimatePresence>
        {!isNavbarInView && showStickyNavbar && <NavbarSticky />}
      </AnimatePresence>
    </>
  );
}

export default NavbarProvider;
