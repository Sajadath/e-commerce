import ToomanIcon from "@/components/homePage/product/ToomanIcon";
import Quantity from "@/components/ui/Quantity";
import { type CartItem } from "@/stores/cartStore";
import Image from "next/image";

function InspectItems({ cartItems }: { cartItems: CartItem[] }) {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">سبد خرید شما</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex w-[300px] flex-col rounded-lg border border-gray-200 bg-white shadow-lg"
            >
              <Image
                width={300}
                height={300}
                src={item.imageUrl}
                alt={item.title}
                className="h-[300px] w-[300px] object-cover"
              />
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              <div className="flex grow flex-col items-center justify-between gap-5 p-4">
                <h3 className="text-[15px] font-bold">{item.title}</h3>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3>{item.price.toLocaleString("fa-Ir")}</h3>
                    <ToomanIcon />
                  </div>
                  <div>
                    <Quantity
                      currentQuantity={item.quantity}
                      itemId={item.itemId}
                      maxQuantity={item.maxQuantity}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between gap-10">
          <div className="flex items-center justify-center gap-2">
            <p className="text-lg font-semibold text-gray-800">
              <span className="px-2"> مجموع:</span>
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toLocaleString("fa-Ir")}
            </p>
            <ToomanIcon />
          </div>
          <button className="border-lightred text-lightred cursor-pointer rounded-lg border-2 px-6 py-3 transition duration-300">
            پرداخت نهایی
          </button>
        </div>
      </div>
    </div>
  );
}

export default InspectItems;
