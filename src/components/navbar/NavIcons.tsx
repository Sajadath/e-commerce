"use client";

import CartInNavbar from "./CartInNavbar";
import AccountIcon from "./AccountIcon";

function NavIcons() {
  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <AccountIcon />
      <CartInNavbar />
    </div>
  );
}

export default NavIcons;
