import Link from "next/link";
import Menu from "./menu/Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="sticky top-0 right-0 left-0 z-50 h-20 border-b-1 border-gray-100/50 bg-white/50 px-4 py-4 shadow-xs backdrop-blur-xs md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile Navbar */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <h1 className="text-2xl tracking-wide">SHOPPER</h1>
        </Link>
        <Menu />
      </div>

      {/* Desktop Navbar */}

      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* LEFT */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOPPER</div>
          </Link>
          <div className="hidden gap-4 xl:flex">
            <Link href="/">خانه</Link>
            <Link href="/shop">فروشگاه</Link>
            <Link href="/deals">تخفیف‌ها</Link>
            <Link href="/about">درباره ما</Link>
            <Link href="/contact">تماس با ما</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
