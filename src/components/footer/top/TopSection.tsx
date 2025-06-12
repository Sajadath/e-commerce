import TopCenterSection from "./TopCenterSection";
import TopLeftSection from "./TopLeftSection";
import TopRightSection from "./TopRightSection";

function TopSection() {
  return (
    <div className="flex w-full flex-col-reverse justify-between gap-17 md:flex-row xl:gap-24">
      <TopRightSection />
      <TopCenterSection />
      <TopLeftSection />
    </div>
  );
}

export default TopSection;
