import Image from "next/image";
import getToKnowImg from "./getToKnow.jpg";

function GetToKnow() {
  return (
    <section className="my-10 grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-xl font-bold sm:text-2xl">
          <span className="text-lightred px-1">وَست شاپر</span>
          رو بیشتر بشناسید
        </h1>
        <p className="text-right text-gray-700">
          ما یک تیم از افراد پرشور هستیم که به ارائه بهترین تجربه خرید آنلاین
          متعهدیم. ماموریت ما اینه که شما رو با محصولاتی که دوست دارید، متصل
          کنیم و آن‌ها را درب منزل شما تحویل بدیم.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl">
        <Image
          src={getToKnowImg}
          alt="Get to Know Us"
          className="h-70 w-full object-cover"
        />
      </div>
    </section>
  );
}

export default GetToKnow;
