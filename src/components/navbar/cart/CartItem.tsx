import { type CartItem as CartItemProps } from "@/stores/cartStore";
import Image from "next/image";
import Quantity from "@/components/ui/Quantity";
import Link from "next/link";

function CartItem({
  itemId,
  url,
  title,
  price,
  quantity,
  imageUrl,
  maxQuantity,
}: CartItemProps) {
  return (
    <div className="mb-2 grid grid-cols-[1fr_2fr] gap-3 px-2">
      <div className="relative h-[130px] w-full">
        <Link href={url}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="h-[96px] w-[72px] rounded-md object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <Link href={url}>
          <h3 className="py-2 text-sm font-semibold text-gray-800 hover:underline">
            {title}
          </h3>
        </Link>
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
