"use client";

import AddToCartButton from "@/components/ui/AddToCartButton";
import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";

type AddProps = {
  itemId: string;
  title: string;
  price: number;
  imageUrl: string;
  stock: number;
};

function Add({ itemId, title, price, imageUrl, stock }: AddProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4>خرید این محصول </h4>
      <div className="flex items-center justify-between">
        <AddToCartButton
          isAvailable={true}
          itemId={itemId}
          title={title}
          price={price}
          imageUrl={imageUrl}
          maxQuantity={stock}
        />
      </div>

      {stock < 6 && (
        <div className="py-2 text-center text-xs">
          فقط{" "}
          <span className="px-1 text-orange-500">
            {convertToPersianNumber("5")} عدد
          </span>
          در انبار موجود است
        </div>
      )}
    </div>
  );
}

export default Add;
