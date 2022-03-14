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
              <Link href="/Course">
                <a>دوره های آموزشی</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/new">
                <a>جدید ترن ها</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/posts">
                <a>پست ها</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/telegram">
                <a>کانال تلگرام</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/suggest">
                <a>پشنهادات</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/about">
                <a>درباره ما</a>
              </Link>
            </li>
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
            <Link href='/login'>
              <span className="regester btn cursor-pointer rounded text-blue-800 font-bold px-5 py-2">
                ثبت نام / ورورد
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
