import Image from "next/image";

function ToomanIcon() {
  return (
    <Image
      src="/toman.svg"
      alt="تومان"
      width={25}
      height={25}
      className="ml-1 inline-block"
    />
  );
}

export default ToomanIcon;
