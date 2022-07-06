import React from 'react'
import Link from 'next/link';
import LearningTearm from '../dropDown';
function MobileNav() {
  return (
    <div>
      <ul className="md:hidden block max-h-screen pb-4 rounded-l-3xl backdrop-blur-xl py-7 sm:space-y-5 space-y-4 absolute right-0 sm:w-6/12 w-full top-20 gap-x-4 text-right pr-12 items-center pt-3">
        <li className="cursor-pointer">
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
        <li className="cursor-pointer">
          <Link href="/patronage/Patroange">
            <span>حمایت از چراغ</span>
          </Link>
        </li>
        <li className="cursor-pointer disabled">
          <Link href="">
            <span>درباره چراغ</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav