import Navbar from "../../components/Navbar/navbar";
import Meta from "../../components/Meta/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleLeft, faArrowLeftLong, faArrowLeftRotate, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Input from '../../components/input/index'
import Link from 'next/link'
import SubFoooter from '../../components/Footer/subfooter'
import { useState } from "react";
import { useFormik } from "Formik";
import * as Yup from 'yup';


const Parotange=()=>{
  const [pay, setpay] = useState();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      peyment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'نام تان حداکثر ۱۵ کاراکتذ باشد'),
      email: Yup.string().email('فرمت ایمیل تان درست نمیباشد'),
      message: Yup.string().min(12, 'پیام تان حداقل ۱۲ کاراکتر باشد'),
    }),
    onSubmit: () => {
      /* console.log(form.values.name) */
    },
  });
    return (
      <div>
        <Meta title={'حمایت از چراغ'} />
        <Navbar />
        <div className="sm:pt-36 pt-24 md:px-12 sm:px-6 sm:grid sm:grid-cols-2 grid-cols-1 px-3 md:gap-x-8 sm:gap-x-4">
          <div className="block bg-bgWave sm:mb-0 mb-8 p-0 m-0 shadow-2xl text-white rounded-3xl">
            <div className="text-center items-center md:pt-24 md:pb-20 sm:pt-20 sm:pb-16 pt-10 pb-8">
              <span className="px-2 md:text-5xl sm:text-3xl text-2xl   tracking-wider">
                حمایت از چراغ
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red md:text-4xl sm:text-3xl text-xl"
                />
              </span>
            </div>
            <div className="text-center sm:pb-0 pb-12 px-4">
              <p className="">
                حمایت از چراغ باعث دلگرمی و رشد بیشتر چراغ خواهد شد
              </p>
              <p className=" my-2">
                بجای شکست دادن یگدیگر بیاید از همدیگر حمایت کنیم تا همه ما موفق
                شویم "
              </p>
            </div>
          </div>
          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-transparent border rounded-3xl shadow-xl p-2"
            >
              <div className="items-center  mx-auto ">
                <Input
                  name={'name'}
                  label={'نام / تخلص (اختیاری)'}
                  placeholder={'نام / تخلص'}
                  type={'text'}
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  formikError={formik.errors.name ? formik.errors.name : null}
                ></Input>
                <Input
                  name={'email'}
                  label={' ایمیل (اختیاری)'}
                  placeholder={'ایمیل'}
                  type={'email'}
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  formikError={formik.errors.email ? formik.errors.email : null}
                ></Input>
                <Input
                  name={'say'}
                  label={' می خواهی چیزی بگویی ؟ (اختیاری)'}
                  placeholder={'پیام'}
                  type={'text'}
                  id="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  formikError={
                    formik.errors.message ? formik.errors.message : null
                  }
                />
                <Input
                  name={'Payement'}
                  label={' مبلغ پرداختی ؟  (به افغانی)'}
                  placeholder={'مبلغ پرداختی'}
                  type={'number'}
                  id="payment"
                />
              </div>
              <div className="items-center flex  mx-auto text-center ">
                <button className=" text-white text-2xl rounded-md w-full py-2 my-2 bg-bgWave">
                  ادامه
                  <FontAwesomeIcon icon={faArrowLeftRotate} className="px-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <SubFoooter
          title="روشنایی همه تاریکی ها 'چراغ'"
          reserved="All Right Reserved"
        />
      </div>
    );
    function Payement(e){
      
      e.preventDefault();
      location.replace('/patronage/payment');
    }
}

export default Parotange;