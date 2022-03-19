import Link from 'next/Link';
import { useState } from 'react';
import Banner from '../Banner/banner';
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="mt-4">
      <div className="container-fluid m-0 p-0 navigation-bar">
        <div className="m-0 p-0 row shadow-xl lg:flex lg:justify-between lg:items-center rounded text-center ">
          <ul
            className={` text-right lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute  bg-white w-[100%] right-0 px-4 lg:w-auto lg:py-0 py-4  lg:pl-0 pl-7 lg:opacity-100 transition-all ease-in duration-500 ${
              open
                ? 'pl-8 top-[60px] text-start opacity-100 w-[100%] z-40 h-50 bg'
                : 'top-0 opacity-0 '
            }`}
          >
            <li className="items">
              <Link href="/">
                <a>خانه</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/courses/courses">
                <a>دوره های آموزشی</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/new">
                <a>جدید ترن ها</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/Post/post">
                <a>پست ها</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/telegram">
                <a>کانال تلگرام</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/Suggest/suggest">
                <a>پشنهادات</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/about">
                <a>درباره ما</a>
              </Link>
            </li>
            <span className="regester btn cursor-pointer lg:hidden block grid grid-cols-2 rounded text-center text-blue-800 font-bold px-5  w-full mt-2 justify-around">
              <span className="bg-green-300 py-2 mx-2 rounded-md">
                <Link href="/Login/login">
                  <a className="login">ورود</a>
                </Link>
                <Link href="/Regester/regester">
                  <a className="hover:text-gray-500 "> / ثبت نام</a>
                </Link>
              </span>
              <input
                type="text"
                className="border border-2 px-2 rounded-md"
                placeholder="چه میخواهی یاد بیگیری؟"
              ></input>
            </span>
          </ul>
          <div className=" m-0 p-0 flex justify-between items-center">
            <span className="">
              {open ? (
                <img
                  src="/close.svg "
                  className="h-4 lg:hidden cursor-pointer px-4"
                  onClick={() => {
                    setopen(false);
                  }}
                ></img>
              ) : (
                <img
                  src="/menu.svg "
                  className="h-4 lg:hidden cursor-pointer px-4"
                  onClick={() => {
                    setopen(true);
                  }}
                ></img>
              )}
            </span>

            <span className="regester btn cursor-pointer hidden lg:block rounded text-center text-blue-800 font-bold px-5 py-2">
              <Link href="/Login/login">
                <a className="login">ورود</a>
              </Link>
              <Link href="/Regester/regester">
                <a className="hover:text-gray-500 "> / ثبت نام</a>
              </Link>
            </span>
            <span className="regester lg:hidden block btn cursor-pointer rounded text-center text-blue-800 font-bold px-5 py-2">
              <Link href="/login">
                <a className="login">چراغ</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
