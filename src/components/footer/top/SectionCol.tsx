import Link from "next/link";

function SectionCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; link: string }[];
}) {
  return (
    <div className="flex h-full flex-col justify-between px-5 py-1">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.link}
            className="text-xs text-gray-600 hover:underline xl:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SectionCol;
