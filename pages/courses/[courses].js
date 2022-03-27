import Navbar from '../../components/Navbar/navbar';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/footer';
import {
  faAngleDown,
  faCheckCircle,
  faThumbsUp,
  faHeart,
  faComment,
  faAnglesUp,
  faStar,
  faMarker,
  faShoppingCart,
  faDownload,
  faCloudArrowDown,
  faDownLeftAndUpRightToCenter,
  faFileDownload,
  faVideoSlash,
  faEye,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import Meta from '../../components/Meta/Meta';
import Data from '../../components/Courses/data';
import Input from '../Regester/inputRegester';
const Courses = () => {
  const [heart, setHeart] = useState(3);
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
          <ul className="mx-6 md:mr-16 md:w-4/12 w-full ">
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
              <ul className="mx-3 my-1 courses">
                <li className="px-4 py-1 all">
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
                <li className="px-4 py-1 js">
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
                <li className="px-4 py-1 python">
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
                <li className="px-4 py-1 android">
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
                <li className="px-4 py-1 php">
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
                <li className="px-4 py-1 database">
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
                <li className="px-4 py-1 cryp">
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
        <div className="text-center w-full mx-auto">
          <h1 className="text-2xl font-bold text-gray-700 my-3">
            دوره های آموزشی جاوا اسکریپت
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-3">
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
                  {js.price > 0 ? (
                    <div>
                      <div className="buttons flex justify-between align-center px-3 py-2">
                        <div className="right">
                          <span className="hover:text-blue-500">
                            قیمت :{' '}
                            <span>{js.price > 0 ? js.price : 'رایگان'}</span>
                            <span>{js.price > 0 ? js.rate : ''}</span>
                          </span>
                        </div>
                        <div className="left flex">
                          <div className="extends-btn" onClick={IncreaseHeart}>
                            <a className="b-text" href="/">
                              علاقه
                              <span className="px-1">{heart}</span>
                            </a>
                            <FontAwesomeIcon
                              className="b-icon"
                              icon={faHeart}
                            />
                          </div>
                          <div
                            className="extends-btn"
                            id="open-button"
                            onClick={Modal}
                          >
                            <span className="b-text" href="/">
                              خرید
                            </span>
                            <FontAwesomeIcon
                              className="b-icon"
                              icon={faCloudArrowDown}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="buttons flex justify-between align-center px-3 py-2">
                      <div className="right">
                        <span className="hover:text-blue-500">
                          قیمت :{' '}
                          <span>{js.price > 0 ? js.price : 'رایگان'}</span>
                          <span>{js.price > 0 ? js.rate : ''}</span>
                        </span>
                      </div>
                      <div className="left flex">
                        <div className="extends-btn" onClick={IncreaseHeart}>
                          <a className="b-text" href="/">
                            علاقه
                            <span className="px-1">{heart}</span>
                          </a>

                          <FontAwesomeIcon className="b-icon" icon={faHeart} />
                        </div>
                        <div className="extends-btn">
                          <a className="b-text" href="/">
                            نمایش
                          </a>
                          <FontAwesomeIcon className="b-icon" icon={faEye} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-3">
          <div className="text-center bg-blue-50 py-5">
            <h1 className="text-2xl">سیر تا پیاز پایتون و آندروید</h1>
          </div>
        </div>
      </div>
      <div
        className="opacity-90 inset-0 hidden  justify-center items-center h-fit"
        id="open-modal"
        style={{ position: 'absolute', top: '90%' }}
      >
        <div className="bg-gray-400 md:w-6/12 w-10/12 shadow-lg border rounded-md">
          <form className="">
            <div className="px-6">
              <div className="text-center my-5 flex justify-between">
                <h1>برای ورود فرم زیل را پر کیند</h1>
                <FontAwesomeIcon className='cursor-pointer hover:text-red-500' icon={faClose} onClick={HideModal} />
              </div>
              <div>
                <h1>
                  اگر قبلا در وبسایت آموزشی چراغ ثبت نام ننموده اید خواهیش میکنم
                  در قدم نخست ثبت نام نماید
                </h1>
                <Link href="/Regester/regester">
                  <a>
                    لینک <span className='text-blue-700 hover:text-blue-500'>ثبت نام ...</span>
                  </a>
                </Link>
              </div>
              <Input
                name={'email'}
                placeholder={'email'}
                label={'ایمیل'}
                type={'email'}
              />
              <Input
                name={'password'}
                placeholder={'password'}
                label={'رمز عبور'}
                type={'password'}
              />
            </div>
            <div className="flex justify-evenly my-2">
              <Link href="/Buying/buy">
                <button className="bg-green-400 px-10 rounded-sm  py-1 hover:bg-pink-500 transition-all hover:text-white">
                  ورود
                </button>
              </Link>
              <Link href="/courses/courses">
                <button className="bg-yellow-400 px-6 rounded-sm  py-1 hover:bg-yellow-200 hover:text-red-500">
                  برگشت
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );

  function IncreaseHeart() {
    setHeart(heart + 1);
    console.log(heart);
  }
  function Modal() {
    const btnmodal = document.querySelector('#open-button');
    const openmodal = document.querySelector('#open-modal');
    openmodal.classList.remove('hidden');
    openmodal.classList.add('flex');
  }
  function HideModal() {
    const btnmodal = document.querySelector('#open-button');
    const openmodal = document.querySelector('#open-modal');
    openmodal.classList.remove('flex');
    openmodal.classList.add('hidden');
  }
};

export default Courses;
