import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/Link';
import { useState } from 'react';
import Image from 'next/image'
import closeIcon from '../../public/close.svg';
import opneIcon from '../../public/menu.svg';
import LearningTearm from '../dropDown';
const Navbar = ({ name, bgColor, textColor, hoverColor }) => {
  console.log(name);
  const [open, setopen] = useState(false);
  return (
    <div className="" style={{ background: bgColor }}>
      <div className="container-fluid m-0 p-0 navigation-bar bg-white z-10 py-5  fixed w-full shadow-gray-400 shadow-2xl">
        <div className="m-0 p-0 row  lg:flex lg:justify-between lg:items-center rounded text-center ">
          <ul
            className={`text-right lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute  bg-white w-[100%] right-0 px-4 lg:w-auto lg:py-0 py-4  lg:pl-0 pl-7 lg:opacity-100 transition-all ease-in duration-500 ${
              open
                ? 'pl-8 top-[60px] text-start opacity-100 w-[100%] z-40 h-50 bg'
                : 'top-0 opacity-0 '
            }`}
            style={{ background: bgColor }}
          >
            <li className="items">
              <Link href="/">
                <a className="text-textWave active border-b border-b-4">خانه</a>
              </Link>
            </li>
            <li className="items">
              <LearningTearm />
            </li>
            {/* <li className="items">
              <Link href="/NewCourses/newcourses">
                <a className="text-textWave">جدید ترین ها</a>
              </Link>
            </li> */}
            <li className="items">
              <Link href="/Post/post">
                <a className="text-textWave">پست ها</a>
              </Link>
            </li>
            <li className="items">
              <a
                href="https://t.me/+LT-2wX3JDX4zMWQ9"
                className="text-textWave"
              >
                کانال تلگرام
              </a>
            </li>
            <li className="items">
              <Link href="/Suggest/suggestForm">
                <a className="text-textWave">پشنهادات</a>
              </Link>
            </li>
            <li className="items">
              <Link href="/patronage/Patroange">
                <a className="text-textWave">
                  {' '}
                  حمایت از چراغ{' '}
                  <span>
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </span>
                </a>
              </Link>
            </li>
            <li className="items">
              <Link href="/About/about">
                <a className="text-textWave">درباره چراغ</a>
              </Link>
            </li>
            <span className="regester btn cursor-pointer lg:hidden block grid grid-cols-2 rounded text-center text-blue-800 font-bold px-5  w-full mt-2 justify-around">
              <span className="bg-green-300 py-2 mx-2 rounded-md">
                <Link href="/Login/login">
                  <a style={{ color: textColor }} className="text-textWave">
                    ورود
                  </a>
                </Link>
                <Link href="/Regester/regester">
                  <a
                    style={{ color: textColor }}
                    className="hover:text-gray-500 text-textWave"
                  >
                    / ثبت نام
                  </a>
                </Link>
              </span>
              <input
                type="text"
                className="border border-2 px-2 rounded-md text-textWave"
                placeholder="چه میخواهی یاد بیگیری؟"
              ></input>
            </span>
          </ul>
          <div className=" m-0 lg:p-0 pr-8 flex justify-between items-center">
            <span className="">
              {open ? (
                <div className="lg:hidden">
                  <Image
                    width={20}
                    height={20}
                    alt="openMenu"
                    src={closeIcon}
                    className="h-4  cursor-pointer px-4"
                    onClick={() => {
                      setopen(false);
                    }}
                  />
                </div>
              ) : (
                <div className="lg:hidden">
                  <Image
                    width={20}
                    height={20}
                    alt="closeMenu"
                    src={opneIcon}
                    className="h-4  cursor-pointer px-4"
                    onClick={() => {
                      setopen(true);
                    }}
                  />
                </div>
              )}
            </span>

            <span className="regester btn cursor-pointer hidden lg:block rounded text-center text-blue-800 font-bold px-5 py-2">
              <Link href="/Login/login">
                <a style={{ color: textColor }} className="login text-textWave">
                  ورود
                </a>
              </Link>
              <Link href="/Regester/regester">
                <a
                  style={{ color: textColor }}
                  className="hover:text-opacity-70 text-textWave"
                >
                  / ثبت نام
                </a>
              </Link>
            </span>
            <span className="regester lg:hidden block btn cursor-pointer rounded text-center text-blue-800 font-bold lg:p-0 pl-8">
              <Link href="/login">
                <a className="login text-textWave">چراغ</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
