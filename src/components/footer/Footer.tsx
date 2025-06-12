import BottomSection from "./bottom/BottomSection";
import TopSection from "./top/TopSection";

function Footer() {
  return (
    <footer className="mt-24 w-full bg-gray-100 px-4 py-13 text-sm md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <TopSection />
      <BottomSection />
    </footer>
  );
}

export default Footer;
