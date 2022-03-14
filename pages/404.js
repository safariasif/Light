import Link from "next/link";
import Meta from "../components/Meta/Meta";
const NotFount=()=>{
    return (
      <div className="text-center mt-36 cursor-pointer">
        <Meta title={"صفحه یافت نشد"}></Meta>
        {/* <h1 className="text-blue-600 font-bold text-8xl">404</h1> */}
        <img src="/404.svg" className="mx-auto w-48 mb-4"></img>
        <h1 className="text-4xl  my-2 text-red-500">
          <span className=" px-2"> متعسفانه</span>
          <span className="">صفحه یافت نشد</span>
        </h1>
        <h1 className="text-sm mt-3 mb-5 text-gray-600">
          بعد از پنج دقیقه صفحه بصورت خودکار برگشت خواهد نمود
        </h1>
        <Link href="/" className="mt-5 ">
          <button className="bg-gray-500 text-white px-16 py-2 hover:bg-gray-700 transition-all rounded-md ">
            برگشت
          </button>
        </Link>
      </div>
    );
}
export default NotFount;