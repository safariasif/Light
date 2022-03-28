
import Meta from '../../components/Meta/Meta';
import Clock from 'react-live-clock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faUser,
  faUsers,
  faSearch,
  faComment,
  faSignOut,
  faBell,
  faHome,
  faMessage,
  faBox,
  faChalkboardTeacher,
  faChartArea,
  faTable,
  faCubesStacked,
  faWrench,
  faUpload,
  faFileUpload,
  faCartPlus,
  faStopCircle,
  faCameraRetro,
  faArrowsRotate,
  faPen,
  faLocation,
  faLocationArrow,
  faLocationCrosshairs,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { check } from 'fontawesome';

const DashBoard = () => {
  const [partation , separtiation]=useState(0);
  const day = new Date();
  const getday= `${day.getHours()}`
  return (
    <div>
      <Meta title={'داشبورد'}></Meta>
      {/* <Navbar /> */}
      <div className="grid lg:grid-cols-5 grid-cols-1">
        <div className="col-span-1 min-h-screen rightside">
          <div className="text-center md:mt-5 mt-3 mb-3">
            <h1 className="text-white text-2xl">پنل ادمین</h1>
          </div>
          <hr className="w-full"></hr>
          <div className="flex">
            <div className="m-4">
              <img
                src="/profile/profile (2).jpg"
                className="w-16 h-16 rounded-full"
              ></img>
            </div>
            <div className="">
              <h1 className="text-white mt-6"> آصف صفری</h1>

              <span className="text-white ">فول استک دیولوپر</span>
            </div>
          </div>
          <div className="text-center items-center my-0">
            <hr className="w-8/12 items-center mx-auto"></hr>
          </div>
          <div className="my-6 mx-12">
            <div className="flex text-center items-center my-2 bg-red-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faHome}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">داشبورد</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faUser}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">پروفایل</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">استادان</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">دانشجویان</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faMessage}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">پیام</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faCubesStacked}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">کورس ها</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faChartArea}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4 hover:text-orange- cursor-pointer">
                نمودار
              </h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faTable}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer"> پست جدید</h1>
            </div>
            <div className="flex text-center items-center my-2 hover:bg-gray-500 py-2 px-2 rounded-md">
              <FontAwesomeIcon
                icon={faWrench}
                className="text-white "
                style={{ fontSize: 25 }}
              />
              <h1 className="text-white px-4  cursor-pointer">تنظیمات</h1>
            </div>
          </div>
        </div>
        <div className="col-span-4 min-h-screen leftside">
          <div className="mainsection">
            <div className="grid md:grid-cols-4 grid-cols-1 justify-between p-4">
              <div className="col-span-1  items-center sm:my-1">
                <h1 className="font-mono text-2xl text-white">داشبورد</h1>
              </div>
              <div className="col-span-2  items-center sm:my-1">
                <input
                  type="text"
                  className="w-8/12 py-1 outline-none  rounded-sm border-b-2 px-2 mainsection text-white"
                  placeholder="جستجو ...."
                ></input>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="px-2 hover:text-red-500 text-white"
                />
              </div>
              <div className="col-span-1 justify-around flex items-center md:my-0 my-2">
                <div>
                  <FontAwesomeIcon
                    className="cursor-pointer text-gray-500"
                    icon={faComment}
                  />
                  <FontAwesomeIcon
                    className="cursor-pointer px-4 text-gray-500"
                    icon={faBell}
                  />
                </div>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faSignOut}
                  style={{ color: 'red' }}
                  onClick={Logout}
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-1">
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md hover:shadow-xl transition-all">
              <div className="flex justify-between">
                <div>
                  <h1>کاربران</h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-5xl text-teal-300"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1>۱۰ نفر</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-2 cursor-pointer">
                <div className="update py-2 items-center">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md hover:shadow-xl transition-all">
              <div className="flex justify-between">
                <div>
                  <h1 className="hover:text-blue-600">بازدیده کننده</h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    className="text-5xl text-teal-300"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1>۱۰۰ نفر</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-2 cursor-pointer">
                <div className="update py-2 items-center">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md hover:shadow-xl transition-all">
              <div className="flex justify-between">
                <div>
                  <h1 className="hover:text-amber-500"> فروش</h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="text-5xl text-teal-300"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1>۱۰۰</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-2 cursor-pointer">
                <div className="update py-2 items-center">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md hover:shadow-xl transition-all">
              <div className="flex justify-between">
                <div>
                  <h1>هزینه</h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faStopCircle}
                    className="text-5xl text-teal-300"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1>۱۰۰۰ افغانی</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-2 cursor-pointer">
                <div className="update py-2 items-center">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 m-0 p-0">
            <div className="rightsidecourses col-span-2 w-full">
              <div className="text-center my-2 font-mono font-bold">
                <h1> کورس های آپلود شده</h1>
              </div>
              <div>
                <table className="cursor-pointer w-full ">
                  <thead>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100">
                      <td className="my-2">شماره</td>
                      <td className="my-2">نام کورس</td>
                      <td className="my-2">قسمت</td>
                      <td className="my-2">ساعت</td>
                      <td className="my-2">قیمت</td>
                      <td className="my-2">تاریخ آپلود</td>
                      <td className="my-2">وضعیت</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border grid grid-cols-7 text-center items-center hover:bg-slate-100">
                      <td className="py-2 text-xs md:text-md text-slate-600">
                        1
                      </td>
                      <td className="py-2 text-sm font-bold">Html</td>
                      <td className="py-2 text-sm text-gray-500">12</td>
                      <td className="py-2 text-sm text-gray-500">1:50:00</td>
                      <td className="py-2 text-sm text-gray-500">رایگان</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰۴-۰۱</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">2</td>
                      <td className="py-2 text-sm font-bold">CSS</td>
                      <td className="py-2 text-sm text-gray-500">22</td>
                      <td className="py-2 text-sm text-gray-500">2:30:00</td>
                      <td className="py-2 text-sm text-gray-500">رایگان</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰۵-۰۱</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">۳</td>
                      <td className="py-2 text-sm font-bold">CSS Grid</td>
                      <td className="py-2 text-sm text-gray-500">8</td>
                      <td className="py-2 text-sm text-gray-500">1:30:00</td>
                      <td className="py-2 text-sm text-gray-500">رایگان</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰۵-۰۲</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">۴</td>
                      <td className="py-2 text-sm font-bold">Flex Box</td>
                      <td className="py-2 text-sm text-gray-500">10</td>
                      <td className="py-2 text-sm text-gray-500">1:45:00</td>
                      <td className="py-2 text-sm text-gray-500">رایگان</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰5-۰4</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">۵</td>
                      <td className="py-2 text-sm font-bold">Java Script</td>
                      <td className="py-2 text-sm text-gray-500">26</td>
                      <td className="py-2 text-sm text-gray-500">24:50:00</td>
                      <td className="py-2 text-sm text-gray-500">۱۷۶۰</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰۶-۰۵</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">۷</td>
                      <td className="py-2 text-sm font-bold">‌Bootstrap</td>
                      <td className="py-2 text-sm text-gray-500">20</td>
                      <td className="py-2 text-sm text-gray-500">6:40:00</td>
                      <td className="py-2 text-sm text-gray-500">رایگان</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۰6-10</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                    <tr className="border grid grid-cols-7 text-center hover:bg-slate-100 items-center">
                      <td className="py-2 text-sm text-slate-600">8</td>
                      <td className="py-2 text-sm font-bold">PHP</td>
                      <td className="py-2 text-sm text-gray-500">30</td>
                      <td className="py-2 text-sm text-gray-500">12:50:00</td>
                      <td className="py-2 text-sm text-gray-500">۲۹۰۰</td>
                      <td className="py-2 text-sm text-gray-500">۲۰۲۲-۱۰-۱۱</td>
                      <td className="py-2 bg-green-700 md:mx-2 md:my-1 px-0 mx-0 rounded-sm text-white">
                        موفق
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="leftsidecourses col-span-1 mt-10 border mx-2 rounded-lg">
              <div className="text-center font-mono font-bold my-2">
                <h1>ثبت کورس جدید</h1>
              </div>
              <div>
                <form>
                  <div className="mx-2 my-2">
                    <label>نام کورس‌ :‌ </label>
                    <input
                      type="text"
                      placeholder="نام کورس"
                      className="w-full my-2  outline-none  px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div className="mx-2 my-2">
                    <label>توضیحات :‌ </label>
                    <input
                      type="text"
                      placeholder="توضیحات بنویس"
                      className="w-full my-2  outline-none  px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div className="mx-2 my-2">
                    <label> افزودن ویدیو :‌ </label>
                    <input
                      type="file"
                      className="w-full my-2  outline-none  px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="px-2">تعداد قسمت ها : </h1>
                    <div className="mx-2 my-2 grid grid-cols-3 gap-2  items-center text-center">
                      <div
                        className="border rounded-lg shadow-lg  text-bold text-2xl cursor-pointer  hover:bg-slate-200"
                        onClick={IncreasePartiation}
                      >
                        +
                      </div>
                      <div className="border rounded-lg shadow-lg  text-bold text-xl">
                        {partation}
                      </div>
                      <div
                        className="border rounded-lg shadow-lg  text-bold text-2xl cursor-pointer  hover:bg-slate-200"
                        onClick={DecreasePartiation}
                      >
                        -
                      </div>
                    </div>
                  </div>
                  <div className="mx-2 my-2">
                    <h1> افزودن ویدیو به صفحه: </h1>
                    <div className="flex justify-evenly my-2">
                      <div className="items-center text-center text-gray-600">
                        <label>خانه</label>
                        <input type={'radio'} name="new" />
                      </div>
                      <div className="items-center text-center text-gray-600">
                        <label>جدید ترین ها</label>
                        <input type={'radio'} name="new" />
                      </div>
                      <div className="items-center text-center text-gray-600">
                        <label>دوره های آموزشی</label>
                        <input type={'radio'} name="new" checked />
                      </div>
                    </div>
                  </div>
                  <div className="mx-2 my-2">
                    <label> تاریخ ثبت :‌ </label>
                    <input
                      type="Date"
                      className="w-full my-2  outline-none  px-2 py-1 border rounded-md"
                    />
                  </div>
                  <div className="mx-2 mb-2">
                    <button className="bg-gray-200 hover:bg-slate-400 py-2 rounded-md border-2  w-full">
                      ثبت
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 m-0 p-0 my-4 mx-4 gap-2 my-4">
            <div className="w-full md:col-span-2 col-span-1">
              <div className="text-center mt-5 mb-2">
                <h1>استادان</h1>
              </div>
              <div>
                <table className="w-full border rounded-md cursor-pointer">
                  <thead className="">
                    <tr className="text-center my-2 border-b">
                      <td className="py-2 bg-gray-300 px-2">آی دی</td>
                      <td className="py-2 bg-gray-300 px-2">نام و تخلص</td>
                      <td className="py-2 bg-gray-300 px-2">تخصص</td>
                      <td className="py-2 bg-gray-300 px-2">ایمیل</td>
                      <td className="py-2 bg-gray-300 px-2">شماره تماس</td>
                    </tr>
                  </thead>
                  <tbody className="text-center instroctor">
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">علی مهدوی</td>
                      <td className="py-2">بک انت</td>
                      <td className="py-2 px-2">AliMahdawi@gmail.com</td>
                      <td className="py-2 px-2">+93776780098</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2">91812</td>
                      <td className="py-2">علی مهدوی</td>
                      <td className="py-2">بک انت</td>
                      <td className="py-2">AliMahdawi@gmail.com</td>
                      <td className="py-2">+93776780098</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">علی مهدوی</td>
                      <td className="py-2 px-2">بک انت</td>
                      <td className="py-2 px-2">AliMahdawi@gmail.com</td>
                      <td className="py-2 px-2">+93776780098</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">علی مهدوی</td>
                      <td className="py-2 px-2">بک انت</td>
                      <td className="py-2 px-2">AliMahdawi@gmail.com</td>
                      <td className="py-2 px-2">+93776780098</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1">
              <div className="text-center mt-5 mb-2">
                <h1>دانشجویان</h1>
              </div>
              <div>
                <table className="w-full border rounded-md cursor-pointer">
                  <thead className="">
                    <tr className="text-center my-2 border-b">
                      <td className="py-2 bg-slate-200 px-2">آی دی</td>
                      <td className="py-2 bg-slate-200 px-2">نام و تخلص</td>
                      <td className="py-2 bg-slate-200 px-2">ایمیل</td>
                    </tr>
                  </thead>
                  <tbody className="text-center instroctor">
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">سجاد امان</td>
                      <td className="py-2 px-2">SajjadAman@gmail.com</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2">91812</td>
                      <td className="py-2">مهدی سروش</td>
                      <td className="py-2">mahdisroursh@gmail.com</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">علی مهدوی</td>
                      <td className="py-2 px-2">AliMahdawi@gmail.com</td>
                    </tr>
                    <tr className="my-2 border-b hover:bg-blue-100">
                      <td className="py-2 px-2">91812</td>
                      <td className="py-2 px-2">علی مهدوی</td>
                      <td className="py-2 px-2">AliMahdawi@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mx-4">
            <div></div>
            <div className="border rounded-md">
              <form>
                <div className="text-center my-4">
                  <h1>ایجاد پست جدید</h1>
                </div>
                <div className="flex justify-around">
                  <div>
                    <FontAwesomeIcon icon={faPen} className="text-green-500" />
                    <span className="text-pink-500 mx-2">وضعیت</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCameraRetro} />
                    <span className="text-green-400 mx-2">تصویر</span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-red-400"
                    />
                    <span className="text-blue-400 mx-2">مکان</span>
                  </div>
                </div>
                <div className=" mx-5 my-2">
                  <textarea
                    className="w-full outline-none border rounded-sm px-2"
                    placeholder="چیزی بنویسید"
                  />
                </div>
                <div className="my-2 mx-5">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md ">
                    ارسال
                  </button>
                </div>
                <div className="text-center my-4 mt-12 ">
                  <Clock
                    format={'h:mm:ssa'}
                    ticking={true}
                    className="my-3 text-2xl uppercase"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function Logout() {
    window.location = '/';
  }
  function IncreasePartiation(){
    separtiation(partation+1);
  }
   function DecreasePartiation() {
     separtiation(partation - 1);
   }
};

export default DashBoard;
