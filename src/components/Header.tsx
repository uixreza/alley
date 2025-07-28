"use client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbMenu4 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import DropdownMenu from "../components/UI/DropdownMenu";
import { routes } from "../config/routes";
import { toast } from "react-toastify";
type routeItem = {
  title: string;
  route: string;
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const msg = () =>
    toast.info("پروژه در دست توسعه، بعدا تلاش کنید.", {
      position: "bottom-right",
    });
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const notify = () => toast("درحال انتقال به صفحه احراز هویت 🔒");
  return (
    <div className="container  z-20 fixed top-0 sm:top-5 text-white flex justify-between items-center py-2 pr-4 sm:pl-9 px-5 sm:mt-3 h-auto sm:rounded-2xl  mx-auto shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
      {/* hamb icon */}
      {toggleMenu ? (
        <TbMenu3
          onClick={() => handleToggleMenu()}
          className="text-3xl cursor-pointer lg:hidden block"
        />
      ) : (
        <TbMenu4
          onClick={() => handleToggleMenu()}
          className="text-3xl cursor-pointer lg:hidden block"
        />
      )}
      {/* dropDown menu */}
      <div
        className={`${
          toggleMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0  pointer-events-none"
        } transition-all absolute top-20 lg:hidden block`}>
        <DropdownMenu setToggleMenu={setToggleMenu} />
      </div>
      {/* logo */}
      <div className="flex gap-2 items-center">
        <a href={"/"}>
          <img
            className="cursor-pointer"
            src={"assets/img/logo.png"}
            alt="logo"
            width={60}
            height={60}
          />
        </a>
        <div className="lg:flex flex-col hidden ">
          <span className="font-bold">هومینکس</span>
        </div>
      </div>
      {/* menu */}
      <div className="hidden lg:flex">
        <ul className="flex gap-7 mr-[-90px] sm:mr-0 justify-center [&>li]:cursor-pointer [&>li]:relative">
          {routes.map((item: routeItem, i: number) =>
            item.title === "ویژگی خانه من" ? (
              <li
                onClick={() => msg()}
                key={i}
                className="group flex flex-col items-center">
                <a
                  href={"#"}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
                  {item.title}
                </a>
              </li>
            ) : (
              <li key={i} className="group flex flex-col items-center">
                <a
                  href={item.route}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
                  {item.title}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <a
        href="https://hominex.ir/account/dashboard/"
        className="sm:block hidden">
        <div
          onClick={notify}
          className="cursor-pointer transition-all transition-normal hover:bg-white sm:p-3 rounded-sm hover:text-black">
          <FiUser className="text-2xl" />
        </div>
      </a>
    </div>
  );
};

export default Header;
