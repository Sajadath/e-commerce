import { type CartItem as CartItemProps } from "@/stores/cartStore";
import Image from "next/image";
import Quantity from "@/components/ui/Quantity";

function CartItem({
  itemId,
  title,
  price,
  quantity,
  imageUrl,
  maxQuantity,
}: CartItemProps) {
  return (
    <div className="mb-2 grid grid-cols-[1fr_2fr] gap-3 px-2">
      <div className="relative h-[130px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="h-[96px] w-[72px] rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="py-2 text-sm font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            {price.toLocaleString("fa-IR")}
            <span className="mr-1">تومان</span>
          </div>

          <Quantity
            maxQuantity={maxQuantity}
            itemId={itemId}
            currentQuantity={quantity}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
