import { FaGithub, FaTelegram } from "react-icons/fa";
import InstagramSvg from "./InstagramSvg";

function Icons() {
  return (
    <>
      <a href="https://www.instagram.com/sajad.ath">
        <InstagramSvg />
      </a>
      <a href="https://github.com/sajadath">
        <FaGithub className="size-8 cursor-pointer text-black transition-all duration-300 hover:scale-135 hover:rotate-15" />
      </a>
      <a href="https://t.me/sajadath">
        <FaTelegram className="size-8 cursor-pointer text-black transition-all duration-300 hover:scale-135 hover:rotate-15 hover:text-blue-400" />
      </a>
    </>
  );
}

export default Icons;
