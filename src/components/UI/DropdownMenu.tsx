import React from "react";
import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuLandPlot } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";

type componentType = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownMenu = ({ setToggleMenu }: componentType) => {
  return (
    <ul className="mt-1 z-20 shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]  backdrop:blur-3xl bg-opacity-40 shadow-black/20 p-4 rounded-3xl flex flex-col gap-2 w-[13rem]">
      <a
        href={"https://hominex.ir/about/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <AiOutlineInfoCircle />
        درباره هومینکس
      </a>
      <a
        href={"https://hominex.ir/mahallat/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <LuLandPlot />
        معرفی محله
      </a>
      <li className="cursor-pointer flex items-center gap-2">
        <RiHome6Line />
        ویژگی خانه من
      </li>
      <a
        href={"https://hominex.ir/properties/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <MdOutlineRealEstateAgent />
        بازار املاک
      </a>
      <a
        href={"https://hominow.ir/consultation"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <MdOutlineSupportAgent />
        مشاوره خرید
      </a>
      <a
        href={"https://hominex.ir/moshaveran/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <FaLandmark />
        مشاورین املاک
      </a>
      <a
        href={"https://hominex.ir/blog/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <GrBlog />
        هومینکس مگ
      </a>

      <span className="w-1/2 bg-gray-400 rounded-2xl h-[3px] my-3"></span>

      <a
        href={"https://hominex.ir/account/dashboard/"}
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setToggleMenu(false)}>
        <FiUser />
        ورود / عضویت
      </a>
    </ul>
  );
};

export default DropdownMenu;
