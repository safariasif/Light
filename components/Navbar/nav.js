import Image from "next/image";
import logo from '../../public/logo/light.png';
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";
import LearningTearm from "../dropDown";
const Nav = () => {
    const [active, setActive] = useState(true);
    const ShowActice = () => {
        setActive(!active);
    }
    return (
      <nav className="flex justify-between p-4 shadow-slate-300 z-50 fixed w-full shadow-xl bg-white">
        <div>
          <ul className="md:flex hidden gap-x-4 text-center items-center pt-3 text-textWave">
            <li className="cursor-pointer items hover:-translate-x hover:scale-x-125 hover:scale-y-125 transition duration-500 ease-in-out focus:outline-none">
              <Link href="/">
                <span>خانه</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="">
                <LearningTearm />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/Post/post">
                <span>پست ها</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <a href="https://t.me/+LT-2wX3JDX4zMWQ9">
                <span>کانال تلگرام</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <Link href="/Suggest/suggestForm">
                <span>نظر / پشنهادات</span>
              </Link>
            </li>
            <li className="cursor-pointer flex items-center">
              <Link href="/patronage/Patroange">
                <span>حمایت از چراغ</span>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart-fill text-[red]"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </li>
            <li className="cursor-pointer disabled">
              <Link href="">
                <span>درباره چراغ</span>
              </Link>
            </li>
          </ul>
          {active ? (
            <span onClick={ShowActice} className="md:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-list pt-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          ) : (
            <span onClick={ShowActice} className="md:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-x-lg pt-4"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </span>
          )}
        </div>
        {active ? '' : <MobileNav />}
        <div className="flex  text-center items-center flex-row-reverse">
          <Image src={logo} width={50} height={50} />
          <ul className="flex text-textWave">
            <li className="cursor-pointer hover:text-[#444]">
              <Link href="/Regester/regester">
                <span>ثبت نام</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#444]">
              <Link href="/Login/login">
                <span> / ورود</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Nav;