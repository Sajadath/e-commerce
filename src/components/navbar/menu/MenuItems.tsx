"use client";
import Link from "next/link";

function MenuItems({
  title,
  icon,
  url,
  closeMenu,
}: {
  title: string;
  icon: React.ReactNode;
  url: string;
  closeMenu: () => void;
}) {
  return (
    <li
      onClick={() => {
        closeMenu();
      }}
    >
      <Link href={url}>
        <div className="hover:text-lightred flex items-center justify-center gap-2">
          <span>{title}</span>
          {icon}
        </div>
      </Link>
    </li>
  );
}

export default MenuItems;
