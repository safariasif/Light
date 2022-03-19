import Navbar from '../../components/Navbar/navbar';
import Link from 'next/link'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/footer'
import {
  faAngleDown,
  faCheckCircle,
  faThumbsUp,
  faHeart,
  faComment,
  faAnglesUp,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Meta from '../../components/Meta/Meta';
import Data from '../../components/Courses/data';
const Courses = () => {
   const [like, setLike] = useState(1);
   const [heart, setHeart] = useState(3);
   const [comment, setComment] = useState(2);
  return (
    <div>
      <Meta title={'دوره های آموزشی'} />
      <Navbar />
      <div className="container-fluid">
        <div className="row grid md:grid-cols-2 grid-cols-1">
          <div className="text-center lg:mt-28 md:mt-12 mt-8">
            <div className="headerCourse">
              <h1 className="md:text-5xl text-3xl headerCourse">
                یگ قدم به سمت تحلیل
              </h1>
            </div>
            <div className="flex md:justify-end justify-center my-3 bannerCourse">
              <h1 className="md:text-4xl text-2xl text-green-400 ">
                ، یادگیری وب و
                <span className="text-yellow-400"> دنیایی ارز دیجیتال </span>
              </h1>
            </div>
            <div className="justify-end flex md:ml-0 ml-4 footerCourse">
              <button className="text-pink-500">آموزش سریع و کاربردی</button>
            </div>
          </div>
          <div className="">
            <img src="/learning.svg" className="w-8/12 mx-auto"></img>
          </div>
        </div>
        <div className="row grid mainpart mb-4">
          <ul className="mx-6 md:mr-16 w-4/12 ">
            <li className="px-4 py-1 catagory">
              <div className="flex justify-between border px-2 py-1 rounded-md catagory1">
                <a className="">دسته بندی</a>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-sm pt-1 fa1"
                  />
                  <FontAwesomeIcon
                    icon={faAnglesUp}
                    className="text-sm pt-1 fa2"
                  />
                </div>
              </div>
              <ul className="mx-3 my-1 courses invisible h-0">
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">همه</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">جاوا اسکریپت</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">پایتون</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">آندروید</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">پی اچ پی (PHP)</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">دیتابیس</a>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-1">
                  <Link href="/">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm"
                      />
                      <a className="px-3">
                        دنیایی ارز دیجیتال و کریپتو کارانسی
                      </a>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='text-center w-full mx-auto'>
          <h1 className='text-2xl font-bold text-gray-700 my-3'>دوره های آموزشی جاوا اسکریپت</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-3">
          {Data.javaScript.map((js, index) => {
            return (
              <div
                key={index}
                className="space-x-2 md:space-x-4 border border-2  rounded-xl cursor-pointer"
              >
                <div className="bg-gray-100">
                  <Link href={`/WebBasic/${js.slug}`} key={index}>
                    <div>
                      <div
                        style={{ direction: 'ltr' }}
                        className="star text-yellow-400 px-2 py-2"
                      >
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                      </div>
                      <img
                        src={js.img}
                        className="hover:opacity-50 h-48 mx-auto transition-all"
                      ></img>
                      <div className="px-3">
                        <h1 className="mt-3 mb-2">
                          <span className="text-gray-500">{js.info}</span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {js.name}
                          </span>
                        </h1>
                        <h1 className="">
                          <span className="text-gray-500">مدت : </span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {js.time}
                          </span>
                        </h1>
                        <h1 className="mb-3">
                          <span className="text-gray-500">مدرس : </span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {js.instructor}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3">
                    <div className="flex my-2 bg-slate-300 py-2 rounded-md px-3  hover:bg-teal-500 transition-all">
                      <button className="text-gray-700 hover:text-gray-800 ">
                        {js.price}
                      </button>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="flex justify-around border border-t-2 text-sm border-b-2 border-r-0 border-l-0 my-2 py-1 text-center rounded-md">
                      <p className="text-center items-center">
                        <span className="px-2 py-0 rounded-full bg-green-500 text-white text-sm mx-2">
                          {comment}
                        </span>
                        <span
                          className="text-gray-700 hover:text-gray-500 "
                          onClick={IncreasComment}
                        >
                          <FontAwesomeIcon
                            icon={faComment}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                      <p>
                        <span className="px-2 py-0 rounded-full bg-red-500 text-white mx-2 text-sm">
                          {heart}
                        </span>
                        <span
                          className="text-red-600 hover:text-red-400"
                          onClick={IncreaseHeart}
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                      <p>
                        <span className="px-2 py-0 rounded-full bg-blue-500 text-white mx-2 text-sm">
                          {like}
                        </span>
                        <span
                          className="hover:text-blue-400 text-blue-600 transition-all"
                          onClick={IncreaseLike}
                        >
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='my-3'>
          <div className='text-center bg-blue-50 py-5'>
            <h1 className='text-2xl'>سیر تا پیاز  پایتون و آندروید</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
   function IncreaseLike() {
     setLike(like + 1);
     console.log(like);
   }
   function IncreaseHeart() {
     setHeart(heart + 1);
     console.log(heart);
   }
   function IncreasComment() {
     setComment(comment + 1);
     console.log(comment);
   }
};

export default Courses;
