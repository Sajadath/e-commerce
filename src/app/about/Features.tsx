"use client";
import { motion } from "framer-motion";
import FeatureBox from "./FeatureBox";

const features = [
  {
    title: "ارسال سریع و رایگان",
    desc: "تحویل کالا در کمترین زمان و بدون هزینه ارسال برای سفارش‌های خاص.",
    icon: "🚚",
    grow: false,
  },
  {
    title: "ضمانت اصالت کالا",
    desc: "تمامی محصولات اورجینال و با ضمانت معتبر ارائه می‌شوند.",
    icon: "✅",
    grow: false,
  },
  {
    title: "پشتیبانی VIP",
    desc: "تیم پشتیبانی همیشه آماده پاسخگویی و راهنمایی شماست.",
    icon: "💎",
    grow: false,
  },
  {
    title: "تنوع محصولات لوکس",
    desc: "دسترسی به جدیدترین و خاص‌ترین کالاهای بازار.",
    icon: "🛍️",
    grow: true,
  },
];

function Features() {
  return (
    <section className="mt-15 w-full">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="mb-8 flex items-center justify-center gap-2"
      >
        <h2 className="text-2xl font-bold">ویژگی های</h2>
        <span className="text-lightred px-2 text-2xl font-extrabold">
          وَست شاپر
        </span>
      </motion.div>
      <div className="via-lightred w-full bg-gradient-to-r from-transparent to-transparent">
        <div className="mx-auto max-w-5xl rounded-lg px-4 py-5 md:px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 py-3">
            {features.map((feature, i) => (
              <FeatureBox key={feature.title} feature={feature} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
