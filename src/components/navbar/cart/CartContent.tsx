import CartItems from "./CartItems";

function CartContent() {
  const price = 500;
  return (
    <div className="flex-col gap-8">
      {/* items */}
      <CartItems />
      {/* infos */}
      <div>
        <div className="my-5 mb-3 flex items-center justify-between text-sm font-semibold">
          <span>قیمت کل</span>
          <div>
            <span>{price.toLocaleString("fa-IR")} </span>
            <span>هزار تومان</span>
          </div>
        </div>
        <p className="mt-2 mb-4 text-xs text-gray-500">
          هزینه ارسال و مالیات در هنگام پرداخت محاسبه می‌شود
        </p>
        <div className="flex justify-between text-sm">
          <button className="cursor-pointer rounded-md px-4 py-3 ring-1 ring-gray-300">
            مشاهده سبد خرید
          </button>
          <button className="cursor-pointer rounded-md bg-black px-4 py-3 text-white">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
