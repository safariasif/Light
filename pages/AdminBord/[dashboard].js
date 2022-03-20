import Navbar from '../../components/Navbar/navbar';
import Meta from '../../components/Meta/Meta';
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
  faFileUpload
} from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => {
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
              <h1 className="text-white px-4  cursor-pointer">جدول</h1>
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
            <div className="grid grid-cols-4 justify-between p-4">
              <div className="col-span-1  items-center">
                <h1 className="font-mono text-2xl text-white">داشبورد</h1>
              </div>
              <div className="col-span-2  items-center">
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
              <div className="col-span-1 justify-around flex items-center">
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
          <div className="grid grid-cols-4 gap-4">
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md">
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
                  <FontAwesomeIcon icon={faFileUpload} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md">
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
                  <FontAwesomeIcon icon={faFileUpload} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md">
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
                  <FontAwesomeIcon icon={faFileUpload} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
            <div className="viwe bg-gray-100 m-5 p-5 rounded-md">
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
                  <FontAwesomeIcon icon={faFileUpload} />
                </div>
                <div className="py-2 items-center">
                  <h1 className="hover:text-green-500">بروز رسانی</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function Logout() {
    window.location = '/';
  }
};

export default DashBoard;
