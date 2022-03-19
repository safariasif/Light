import Data from "../../components/Courses/data";
import { useRouter } from "next/dist/client/router";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Meta from "../../components/Meta/Meta";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const Slug =()=>{
    const router=useRouter();
    const slug = router.query.slug;
    /* console.log(router.query.slug); */
    const items = Data.WebBasic.find(a=>a.slug==slug);
    /* const pp = items.partions.map((p)=>{
        return p;
    });
    console.log(pp);
    const [numb, part,intr, display] = pp;
    console.log(numb)
    console.log(intr);
    console.log(display);
    console.log(part);
    console.log(numb[0]);
    console.log(numb[1]);
    console.log(numb[2]);
    console.log(numb[3]); */


    if(!items){
        return (
          <div>
            <div className="text-center mt-36 cursor-pointer">
              <Meta title={'صفحه یافت نشد'}></Meta>
              {/* <h1 className="text-blue-600 font-bold text-8xl">404</h1> */}
              <img src="/404.svg" className="mx-auto w-48 mb-4"></img>
              <h1 className="text-4xl  my-2 text-red-500">
                <span className=" px-2"></span>
                <span className=""> دیتایی یافت نشد </span>
              </h1>
              <h1 className="text-sm mt-3 mb-5 text-gray-600">
                بعد از پنج ثانیه صفحه بصورت خودکار برگشت خواهد نمود
              </h1>
              <Link href="/" className="mt-5 ">
                <button className="bg-gray-500 text-white px-16 py-2 hover:bg-gray-700 transition-all rounded-md ">
                  برگشت
                </button>
              </Link>
            </div>
          </div>
        );
    }
    return (
      <div>
        <Meta title={items.name}></Meta>
        <Navbar />
        <div className="px-4 my-4 mx-4 py-4 rounded-md bg-gray-200">
          <h1 className="px-2 text-lg pb-2">شروع {items.genralName}</h1>
          <span className="">{items.description}</span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-5 my-4 gap-4">
          <div className="col-span-2 border border-2 mt-5 rounded-md">
            <div className="text-center my-2 font-mono text-2xl ">
              <h1>مقدمه و آشنایی با {items.name}</h1>
            </div>
            <div>
              <video src={items.video} controls className="px-3 py-3" />
            </div>
            <div className="row text-center md:my-12 my-2">
              <h1 className="text-bold text-3xl mb-4 ">قسمت ها</h1>
              <div>
                {items.partions.map((p) => {
                  return (
                    <table key={items.id} className="table w-full">
                      <tbody>
                        <tr className="border grid grid-cols-4 text-center hover:bg-slate-100">
                          <td className="py-2">{p[0]}</td>
                          <td className="py-2">{p[1]}</td>
                          <td className="py-2">{p[2]}</td>
                          <Link href="/">
                            <td className="py-2 cursor-pointer rounded-md hover:text-green-500  text-center">
                              {p[3]}
                            </td>
                          </Link>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="my-5 px-5 py-5 border border-2 rounded-md">
            <div className="border px-4 py-2 rounded-md">
              <h1>قیمت</h1>
              <h1>رایگان</h1>
              <Link href="/Login/login">
                <button className="bg-green-500 mx-auto w-full py-2 my-2 rounded-md text-white">
                  ثبت نام در دوره
                </button>
              </Link>
              <div className="mt-2" style={{ direction: 'ltr' }}>
                <FontAwesomeIcon
                  className="hover:text-yellow-600 text-yellow-400"
                  icon={faStar}
                  style={{ fontSize: 17 }}
                />
                <FontAwesomeIcon
                  className="hover:text-yellow-600 text-yellow-400"
                  icon={faStar}
                  style={{ fontSize: 17 }}
                />
                <FontAwesomeIcon
                  className="hover:text-yellow-600 text-yellow-400"
                  icon={faStar}
                  style={{ fontSize: 17 }}
                />
                <FontAwesomeIcon
                  className="hover:text-yellow-600 text-yellow-400"
                  icon={faStar}
                  style={{ fontSize: 17 }}
                />
              </div>
            </div>
            <div className="border rounded-md my-3 px-2 py-4">
              <h1 className="text-lg">
                <span>ویژه گی های دوره : </span>
              </h1>
              <h1 className="pr-4 mt-3">
                <span>نام دوره : </span>
                <span className="text-pink-700 font-bold">{items.name}</span>
              </h1>
              <h1 className="pr-4">
                <span>سطح دوره : </span>
                <span className="text-pink-700 font-bold">{items.level}</span>
              </h1>
              <h1 className="pr-4">
                <span>پیش نیاز : </span>
                <span className="text-pink-700 font-bold">
                  {items.prerequisite}
                </span>
              </h1>
              <h1 className="pr-4">
                <span>بخش : </span>
                <span className="text-pink-700 font-bold">
                  {items.part} بخش
                </span>
              </h1>
              <h1 className="pr-4">
                <span>زبان : </span>
                <span className="text-pink-700 font-bold">
                  {items.language}
                </span>
              </h1>
              <h1 className="pr-4">
                <span>مدت : </span>
                <span className="text-pink-700 font-bold">{items.time}</span>
              </h1>
              <h1 className="pr-4">
                <span>مدرس : </span>
                <span className="text-pink-700 font-bold">
                  {items.instructor}
                </span>
              </h1>
              <h1 className="pr-4">
                <span>زمان ثبت : </span>
                <span className="text-pink-700 font-bold">
                  {items.timeRecord}
                </span>
              </h1>
              <h1 className="pr-4">
                <span>تاریخ شروع : </span>
                <span className="text-pink-700 font-bold">
                  هر زمان که میخواهید
                </span>
              </h1>
              <h1 className="pr-4">
                <span>بازدید : </span>
                <span className="text-pink-700 font-bold">
                  {items.viewver} نفر
                </span>
              </h1>
            </div>
            <div className="border rounded-md my-3 px-2 py-4">
              <div className="flex">
                <img
                  className="w-20 h-20 rounded-full"
                  src="/profile/profile (2).jpg"
                ></img>
                <div className=" mt-4 px-2">
                  <span>آصف صفری</span>
                  <p className="text-green-500 ">
                    فرانت دیولوپر و سهام بزرگ ارز دیجیتال در دنیا
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md border px-2 py-2 bg-gray-100">
              <h1 className="text-blue-700">من به شما قول میدهم:</h1>
              <p>
                اینجانب محمد صفری کارشناس و تحلیلگر در حوزه ارزهای رمزنگاری و
                سهام های بین المللی به شما متعهد میشوم که در پایان دوره موج
                سواری بازار مالی و دوپینگ مالی ، با حضور در این ۲ دوره آنلاین و
                تمرین های هفتگی و شرکت در کلاس های رفع اشکال در دوره دوپینگ
                مالی، به راحتی با کسب دانش و رعایت تمامی موارد گفته شده معامله
                گری در بازار های مالی را بصورت حرفه ای یادگرفته و به درآمد های
                مورد دلخواه خود برسید. من به شما قول میدهم تا زمانی که در بازار
                مالی به سود نرسیدید درکنار شما باشم
              </p>
              <span className="text-pink-400 pr-4">آصف صفری</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Slug;