import SectionCol from "./SectionCol";

function TopCenterSection() {
  return (
    <div className="hidden w-1/2 justify-between text-right lg:flex lg:items-center lg:justify-around">
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      <SectionCol
        title="شرکت "
        links={[
          { label: "فرصت‌های شغلی", link: "" },
          { label: "شرکت‌های وابسته", link: "" },
          { label: "بلاگ", link: "" },
          { label: "درباره ما", link: "" },
          { label: "تماس با ما", link: "" },
        ]}
      />
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      <SectionCol
        title="فروشگاه "
        links={[
          { label: "تازه ها", link: "" },
          { label: "زیورآلات", link: "" },
          { label: "محصولات مردانه", link: "" },
          { label: "محصولات زنانه", link: "" },
          { label: "همه ی محصولات", link: "" },
        ]}
      />
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      <SectionCol
        title="راهنما "
        links={[
          { label: "خدمات مشتریان ", link: "" },
          { label: "حساب من ", link: "" },
          { label: "یافتن یک فروشگاه ", link: "" },
          { label: "سیاست ها و قوانین", link: "" },
          { label: "کارت هدیه", link: "" },
        ]}
      />
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
    </div>
  );
}

export default TopCenterSection;
