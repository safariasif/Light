import Link from 'next/link';
import Meta from '../components/Meta/Meta';
import Navbar from '../components/Navbar/navbar';
const Regester = () => {
  return (
    <div>
      <Meta title={'ثبت نام'} icon={'/404.svg'}></Meta>
      <Navbar />
      <div className="regetser mt-12 md:flex block justify-center ">
        <div className="text-start md:px-16 px-5   text-lg  md:w-8/12 ">
          <form action="">
            <div className="text-center font-bold text-2xl">
              <h1>ثبت نام</h1>
            </div>
            <div className="md:my-2">
              <label className="text-gray-600 px-2 font-bold">نام:</label>
              <input
                className="form-control rounded-full border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg"
                placeholder="نام خود را وارد نمایید"
                required
                type="text"
              ></input>
            </div>
            <div className="md:my-2">
              <label className="text-gray-600 px-2 font-bold">ایمیل:</label>
              <input
                className="form-control rounded-full border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg"
                placeholder="ایمیل خود را وارد نمایید"
                required
                type="email"
              ></input>
            </div>
            <div>
              <label className="text-gray-600 px-2 font-bold">رمز عبور :</label>
              <input
                className="form-control rounded-full border border-2 w-full py-1 outline-none px-4 shadow-lg"
                placeholder="رمز عبور خود را وارد نمایید"
                required
                type="password"
              ></input>
            </div>
            <div className='md:my-2'>
              <label className="text-gray-600 px-2 font-bold">
                تکرار رمز عبور :{' '}
              </label>
              <input
                className="form-control rounded-full border border-2 w-full py-1 outline-none px-4 shadow-lg"
                placeholder="رمز عبور خود را وارد نمایید"
                required
                type="password"
              ></input>
            </div>
            <div className="my-4">
              <Link href="/regester">
                <button className="block w-full py-2 bg-green-400 text-gray-700 hover:bg-green-300 transition-all hover:text-gray-800 rounded-full shadow-lg">
                  ثبت نام
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="bg-blue-500 grid grid-cols-2 md:block justify-center  items-center md:mt-20 mt-4">
          <div className="flex justify-between  text-start py-3">
            <Link href="/google">
              <a className="text-white">ورود با فسبوک</a>
            </Link>
            <Link href="/google">
              <img src="/facebook.svg" className="px-4 h-6"></img>
            </Link>
          </div>
          <div className="flex justify-between py-3  text-start">
            <Link href="/google">
              <a className="text-white">ورود با انستگرام</a>
            </Link>
            <Link href="/google">
              <img src="/instagram.svg" className=" px-4 h-6"></img>
            </Link>
          </div>
          <div className="flex justify-between py-3">
            <Link href="/google">
              <a className="text-white">ورود با لینکدین</a>
            </Link>
            <Link href="/google">
              <img src="/linkdin.svg" className="px-4 h-6"></img>
            </Link>
          </div>
          <div className="flex justify-between py-3">
            <Link href="/google">
              <a className="text-white">ورود با تویتر</a>
            </Link>
            <Link href="/google">
              <img src="/twitter.svg" className="px-4 h-6"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
