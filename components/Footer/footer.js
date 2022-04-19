import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import Link  from 'next/link';
const Footer = () => {
  return (
    <div className="footer mt-12 text-white bg-white m-0 p-0">
      <div className="bg-white  m-0 p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="bg-white"
        >
          <path
            fill="#5000ca"
            fillOpacity="0.75"
            d="M0,64L15,64C30,64,60,64,90,96C120,128,150,192,180,202.7C210,213,240,171,270,160C300,149,330,171,360,170.7C390,171,420,149,450,122.7C480,96,510,64,540,85.3C570,107,600,181,630,186.7C660,192,690,128,720,112C750,96,780,128,810,154.7C840,181,870,203,900,192C930,181,960,139,990,122.7C1020,107,1050,117,1080,128C1110,139,1140,149,1170,133.3C1200,117,1230,75,1260,74.7C1290,75,1320,117,1350,128C1380,139,1410,117,1425,106.7L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="grid md:grid-cols-4 gap-5 sm:grid-cols-2 xs:block pb-12 px-8 justify-center content-center container-fluid text-center">
        <div>
          <h2 className="">درباره ما:</h2>
          <span>
            مام تلاش ما در باره کمیت اموزش و افزایش کورس ها نیست بلکه تمام تمام
            تلاش ما درباره کیفیت آموزش است
          </span>
        </div>
        <div>
          <h2 className='pb-2'>پشنهاد و نظریات خود را با ما شریک کنید</h2>
          <input
            type="text"
            className="w-full border-2 text-gray-800"
            placeholder="نام"
          ></input>
          <textarea
            className="w-full my-2 border-2 text-gray-800"
            name="message"
            id=""
            cols="30"
            rows="2"
            placeholder="پیام خود را بنویسید"
          ></textarea>
          <button className="d-block w-full rounded py-1 text-white bg-green-500">
            ارسال
          </button>
        </div>
        <div className="">
          <div className="">
            <h6>پل ارتباطی :</h6>
          </div>
          <div className="pt-2">
            <p>
              <span className="">+93</span> 76 55 20 732
            </p>
            <p>
              <span className="">+93</span> 78 00 51 517
            </p>
          </div>
          <div className=" ">
            <span>ایمیل: </span>
            <span> mohammadasifsafari1997</span>
          </div>
        </div>
        <div className="">
          <div>
            <h6>و همچنان ما را در صفحات مجازی دنبال کیند</h6>
          </div>
         { <div className="flex  justify-evenly mt-6">
            <Link href="https://www.facebook.com">
              <FaFacebook className="fa-xl hover:text-green-500 cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com">
              <FaLinkedin className="fa-xl hover:text-green-500 cursor-pointer" />
            </Link>
            <Link href="https://www.intsgram.com">
              <FaInstagramSquare className="fa-xl hover:text-green-500 cursor-pointer" />
            </Link>
            <Link href="https://www.Twitter.com">
              <FaTwitter className="fa-xl hover:text-green-500 cursor-pointer" />
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
