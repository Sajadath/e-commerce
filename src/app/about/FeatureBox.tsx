"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function FeatureBox({
  feature,
  i,
}: {
  feature: { title: string; desc: string; icon: string; grow?: boolean };
  i: number;
}) {
  const [beingHovered, setBeingHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
    }),
  };
  return (
    <motion.div
      onMouseEnter={() => setBeingHovered(true)}
      onMouseLeave={() => setBeingHovered(false)}
      key={feature.title}
      className={`relative flex grow flex-col items-center rounded-2xl border-2 border-white/70 bg-black/10 p-6 text-center shadow-lg shadow-white backdrop-blur-sm transition-all hover:shadow-2xl ${beingHovered ? "z-10" : "z-0"} ${
        feature.grow ? "grow" : ""
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      custom={i}
      variants={cardVariants}
    >
      <span className="absolute top-0 left-0 mb-3 block -translate-x-1/2 -translate-y-1/2 -rotate-15 text-5xl">
        {feature.icon}
      </span>
      <h3 className="mb-2 text-lg font-bold text-nowrap text-white">
        {feature.title}
      </h3>

      <p className="text-base font-medium text-gray-100">{feature.desc}</p>
    </motion.div>
  );
}

export default FeatureBox;
