import Navbar from "../../components/Navbar/navbar";
import Meta from "../../components/Meta/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleLeft, faArrowLeftLong, faArrowLeftRotate, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Input from "../Regester/inputRegester";
import Link from 'next/link'

const Parotange=()=>{
    return (
      <div>
        <Meta title={'حمایت از چراغ'} />
        <Navbar />
        <div>
          <div className="text-center md:my-10 my-5 items-center">
            <span className="px-2 text-2xl text-slate-700 tracking-wider">
              حمایت از چراغ
            </span>
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-2xl"
              />
            </span>
          </div>
          <div className="text-center items-center">
            <p className="text-slate-600">
              حمایت از چراغ باعث دلگرمی و رشد بیشتر چراغ خواهد شد
            </p>
            <p className="text-slate-600 my-2">
              " بجای شکست دادن یگدیگر بیاید از همدیگر حمایت کنیم تا همه ما موفق
              شویم "
            </p>
          </div>
          <form>
            <div className="items-center md:w-6/12 w-10/12 mx-auto my-5 bg-transparent border rounded-2xl shadow-xl md:p-5 p-2">
              <Input
                name={'name'}
                label={'نام / تخلص'}
                placeholder={'اختیاری'}
                type={'text'}
              />
              <Input
                name={'email'}
                label={' ایمیل'}
                placeholder={'اختیاری'}
                type={'email'}
              />
              <Input
                name={'say'}
                label={' می خواهی چیزی بگویی ؟'}
                placeholder={'اختیاری'}
                type={'text'}
              />
              <Input
                name={'Payement'}
                label={' مبلغ پرداختی ؟  (به افغانی)'}
                placeholder={'چی قدر میخواهی بپردازی ؟'}
                type={'text'}
              />
            </div>
            <div className="items-center md:w-6/12 w-10/12 mx-auto text-center ">
              <Link href="/patronage/payment">
                <button className="bg-fuchsia-700 text-white rounded-md w-full py-2 my-2 hover:bg-pink-900">
                  ادامه
                  <FontAwesomeIcon icon={faArrowLeftRotate} className="px-2" />
                </button>
              </Link>
            </div>
          </form>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fill-opacity="0.75"
                d="M0,64L15,64C30,64,60,64,90,96C120,128,150,192,180,202.7C210,213,240,171,270,160C300,149,330,171,360,170.7C390,171,420,149,450,122.7C480,96,510,64,540,85.3C570,107,600,181,630,186.7C660,192,690,128,720,112C750,96,780,128,810,154.7C840,181,870,203,900,192C930,181,960,139,990,122.7C1020,107,1050,117,1080,128C1110,139,1140,149,1170,133.3C1200,117,1230,75,1260,74.7C1290,75,1320,117,1350,128C1380,139,1410,117,1425,106.7L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
              ></path>
            </svg>
            <h1
              className="text-center opacity-75 text-white md:text-2xl text-md pb-4"
              style={{ background: '#5000ca' }}
            >
              {' '}
              روشنایی همه تاریکی ها" چراغ"
              <h1 className="text-center text-sm mt-5">All right reserved</h1>
            </h1>
          </div>
        </div>
      </div>
    );
}

export default Parotange;