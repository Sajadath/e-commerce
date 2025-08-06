"use client";

import useCartStore from "@/stores/cartStore";

import AddButton from "./AddButton";
import Quantity from "./Quantity";

type AddToCartButtonProps = {
  itemId: string;
  title: string;
  price: number;
  imageUrl: string;
};

function AddToCartButton({
  itemId,
  title,
  price,
  imageUrl,
}: AddToCartButtonProps) {
  const cartItems = useCartStore((state) => state.cartItems);
  const isItemInCart = cartItems.some((item) => item.itemId === itemId);
  const currentQuantity =
    cartItems.find((item) => item.itemId === itemId)?.quantity || 0;

  if (isItemInCart)
    return <Quantity currentQuantity={currentQuantity} itemId={itemId} />;

  return (
    <AddButton
      itemId={itemId}
      title={title}
      price={price}
      imageUrl={imageUrl}
    />
  );
}

export default AddToCartButton;
