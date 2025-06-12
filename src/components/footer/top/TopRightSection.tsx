"use client";
function TopRightSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col gap-8 text-right md:w-1/2 lg:w-1/4">
      <h2 className="text-medium text-lg font-bold">عضویت در خبرنامه</h2>
      <p className="text-xs text-gray-700">
        اولین نفری باشید که اخبار جدید محصولات جدید، تخفیف‌ها و رویدادها را
        دریافت می‌کند.
      </p>
      <div>
        <form className="flex w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="ایمیل"
            className="w-3/4 bg-white p-4"
          />
          <button className="bg-lightred block w-1/4 cursor-pointer rounded-l-lg text-white">
            ملحق شدن
          </button>
        </form>
      </div>
      <h2 className="font-semibold">پرداخت امن</h2>
      <div className="mx-auto w-fit">کارت ها</div>
    </div>
  );
}

export default TopRightSection;
