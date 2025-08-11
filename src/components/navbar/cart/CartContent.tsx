import { type CartItem as CartItemType } from "@/stores/cartStore";
import CartItem from "./CartItem";
import Link from "next/link";

type CartContentProps = {
  cartItems: CartItemType[];
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
        <div className="flex justify-end text-sm">
          <Link href="/cart">
            <button className="bg-lightred cursor-pointer rounded-md px-4 py-3 text-white">
              پرداخت
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
