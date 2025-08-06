import { type CartItem as CartItemTypes } from "@/stores/cartStore";
import CartItem from "./CartItem";

type CartContentProps = {
  cartItems: CartItemTypes[];
};

function CartContent({ cartItems }: CartContentProps) {
  const TotalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="w-[380px] flex-col gap-8">
      {/* items */}

      <div className="flex max-h-[300px] flex-col gap-3 overflow-y-auto">
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
      {/* infos */}
      <div className="my-2 h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="px-3">
        <div className="my-5 mb-3 flex items-center justify-between text-sm font-semibold">
          <span>قیمت کل</span>
          <div>
            <span>{TotalPrice.toLocaleString("fa-IR")} </span>
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
          <button className="bg-lightred cursor-pointer rounded-md px-4 py-3 text-white">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
