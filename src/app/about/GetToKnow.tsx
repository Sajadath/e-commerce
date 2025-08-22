import Image from "next/image";
import getToKnowImg from "./getToKnow.jpg";

function GetToKnow() {
  return (
    <section className="my-3 grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8">
      <div
        id="organization"
        className="flex h-full w-full flex-col items-center justify-center"
      >
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

      <div className="relative w-full overflow-hidden rounded-xl">
        <Image
          src={getToKnowImg}
          alt="Get to Know Us"
          draggable={false}
          className="h-70 w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 z-1 w-full -translate-x-1/2 -translate-y-1/2 bg-white px-0 py-8 text-center text-5xl font-bold text-black mix-blend-screen">
          وست شاپر
          <div className="absolute -top-3 h-1 w-full bg-white" />
          <div className="absolute -bottom-3 h-1 w-full bg-white" />
        </div>
      </div>
    </section>
  );
}

export default GetToKnow;
