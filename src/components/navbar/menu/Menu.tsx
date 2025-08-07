"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaInfo, FaPhone, FaShoppingCart } from "react-icons/fa";
import MenuItems from "./MenuItems";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const menuItems = [
    { href: "/", label: "خانه", Icon: FaHome },
    { href: "/about", label: "درباره ما", Icon: FaInfo },
    { href: "/contact", label: "تماس با ما", Icon: FaPhone },
    { href: "/cart", label: "سبد خرید", Icon: FaShoppingCart },
  ];

  return (
    <div>
      <Image
        src="/menu.png"
        alt="Menu Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpenMenu((openMenu) => !openMenu)}
      />
      <AnimatePresence>
        {openMenu && (
          <motion.ul
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 right-0 left-0 z-100 flex h-[calc(100vh-5rem)] flex-col flex-wrap items-center justify-center gap-8 bg-white/95 font-semibold text-black backdrop-blur-lg"
          >
            {menuItems.map(({ href, label, Icon }) => (
              <MenuItems
                key={href}
                title={label}
                closeMenu={closeMenu}
                icon={<Icon />}
                url={href}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
