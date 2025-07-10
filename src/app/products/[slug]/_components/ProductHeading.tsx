function ProductHeading({
  productName,
  shortDescription,
}: {
  productName: string;
  shortDescription?: string;
}) {
  return (
    <>
      <h1 className="w-[90%] text-4xl leading-normal font-semibold">
        {productName}
      </h1>
      <p className="text-sm text-gray-500">
        {shortDescription ||
          `${productName} یک محصول با کیفیت بالا است که برای استفاده   دارای دوام عالی می‌باشد. با خرید این محصول، تجربه‌ای متفاوت و رضایت‌بخش خواهید داشت.`}
      </p>
    </>
  );
}

export default ProductHeading;
