import Image from "next/image";

function CartItems() {
  const qty = 1;
  const unitPrice = 20000;
  return (
    <div className="flex gap-4">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLDH25Bjs6brkRieapetwubGERIswmEuVJA&s"
        alt="item-1"
        width={72}
        height={96}
        className="h-[100px] w-[90px] rounded-md object-cover"
      />

      <div className="flex w-full flex-col justify-between">
        {/* TOP */}

        <div className="">
          {/* TITLE */}
          <div className="flex items-center justify-between gap-8">
            <h3 className="font-semibold">بطری آب معدنی</h3>
            <div className="rounded-sm bg-gray-50 p-1 text-sm">
              {unitPrice.toLocaleString("fa-IR")} تومان
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="text-xs text-gray-500">موجود است</div>
        </div>
        {/* BOTTOM */}
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">
            تعداد {qty.toLocaleString("fa-IR")}
          </span>
          <span className="text-blue-500">حذف</span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
