import ToomanIcon from "@/components/homePage/product/ToomanIcon";

function PriceBlock({
  discountedPrice,
  price,
}: {
  discountedPrice?: number;
  price: number;
}) {
  return (
    <div className="flex items-center gap-4">
      {discountedPrice && price - discountedPrice > 0 && (
        <h3 className="text-xl text-gray-500 line-through">
          {Number(price).toLocaleString("fa-IR")}
        </h3>
      )}

      <h2 className="text-2xl font-medium">
        {Number(discountedPrice).toLocaleString("fa-IR")}
      </h2>
      <ToomanIcon />
    </div>
  );
}

export default PriceBlock;
