import Link from "next/link";

function MenuItems({
  title,
  icon,
  url,
}: {
  title: string;
  icon: React.ReactNode;
  url: string;
}) {
  return (
    <li>
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
