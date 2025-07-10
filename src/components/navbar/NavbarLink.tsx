"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavbarLink({ children, href }: { children: ReactNode; href: string }) {
  const pathName = usePathname();

  return (
    <div className="relative flex h-full items-center justify-center">
      <Link
        className={`${pathName === href ? "text-lightred" : "text-black"} transition-all duration-300`}
        href={href}
      >
        {children}
      </Link>
      <AnimatePresence>
        {pathName === href ? (
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
              scaleY: 1,
              originX: 0, // left origin
              originY: 1,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              originX: 0, // left origin
              originY: 1,
            }}
            exit={{
              opacity: 0,
              scaleX: 0,
              scaleY: 1,
              originX: 0, // left origin
              originY: 1,
            }}
            className={`bg-lightred absolute right-0 bottom-0 left-0 h-1 rounded-2xl transition-all duration-300`}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default NavbarLink;
