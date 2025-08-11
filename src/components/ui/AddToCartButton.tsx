"use client";

import useCartStore from "@/stores/cartStore";

import AddButton from "./AddButton";
import Quantity from "./Quantity";

type AddToCartButtonProps = {
  url: string;
  isAvailable: boolean;
  itemId: string;
  title: string;
  price: number;
  imageUrl: string;
  maxQuantity: number;
  fullButton?: boolean;
};

function AddToCartButton({
  url,
  isAvailable,
  itemId,
  title,
  price,
  imageUrl,
  maxQuantity,

  fullButton = false,
}: AddToCartButtonProps) {
  const cartItems = useCartStore((state) => state.cartItems);
  const isItemInCart = cartItems.some((item) => item.itemId === itemId);
  const currentQuantity =
    cartItems.find((item) => item.itemId === itemId)?.quantity || 0;

  if (!isAvailable) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-sm text-red-500">اتمام موجودی</span>
      </div>
    );
  }

  if (isItemInCart)
    return (
      <Quantity
        maxQuantity={maxQuantity}
        currentQuantity={currentQuantity}
        itemId={itemId}
      />
    );

  return (
    <AddButton
      url={url}
      maxQuantity={maxQuantity}
      fullButton={fullButton}
      itemId={itemId}
      title={title}
      price={price}
      imageUrl={imageUrl}
    />
  );
}

export default AddToCartButton;
