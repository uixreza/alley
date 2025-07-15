import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const DropdownMenu = () => {
  return (
    <ul className="shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]  backdrop:blur-3xl bg-opacity-40 shadow-black/20 z-10 p-4 rounded-3xl flex lg:hidden flex-col gap-2 absolute bottom-[-18.5rem] w-[13rem]">
      <a
        href="http://hominex.ir/about/"
        className="cursor-pointer flex items-center gap-2">
        درباره هومینکس
      </a>
      <a
        href="http://hominex.ir/mahallat/"
        className="cursor-pointer flex items-center gap-2">
        معرفی محله
      </a>
      <a href="#" className="cursor-pointer flex items-center gap-2">
        ویژگی خانه من
      </a>
      <a
        href="http://hominex.ir/properties/"
        className="cursor-pointer flex items-center gap-2">
        <MdOutlineRealEstateAgent />
        بازار املاک
      </a>
      <a href="#" className="cursor-pointer flex items-center gap-2">
        <CiSquareQuestion />
        مشاوره خرید
      </a>
      <a
        href="http://hominex.ir/blog/"
        className="cursor-pointer flex items-center gap-2">
        <GrBlog />
        هومینکس مگ
      </a>

      <span className="w-1/2 bg-gray-400 rounded-2xl h-[3px] my-3"></span>

      <a
        href="http://hominex.ir/account/"
        className="cursor-pointer flex items-center gap-2">
        <FiUser />
        ورود / عضویت
      </a>
    </ul>
  );
};

export default DropdownMenu;
