import Navbar from "../../components/Navbar/navbar";
import Meta from "../../components/Meta/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleLeft, faArrowLeftLong, faArrowLeftRotate, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Input from "../Regester/inputRegester";
import Link from 'next/link'
import SubFoooter from '../../components/Footer/subfooter'
import { useState } from "react";


const Parotange=()=>{
  const [pay,setpay]=useState();
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
              <button
                className="bg-fuchsia-700 text-white rounded-md w-full py-2 my-2 hover:bg-pink-900"
                onClick={Payement}
              >
                ادامه
                <FontAwesomeIcon icon={faArrowLeftRotate} className="px-2" />
              </button>
            </div>
          </form>
          <SubFoooter title="روشنایی همه تاریکی ها 'چراغ'" reserved='All Right Reserved'/>
        </div>
      </div>
    );
    function Payement(e){
      
      e.preventDefault();
      location.replace('/patronage/payment');
    }
}

export default Parotange;