import Nav from '../../components/Navbar/nav';
import Meta from '../../components/Meta/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faArrowLeftLong,
  faArrowLeftRotate,
  faArrowRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/input/index';
import Link from 'next/link';
import SubFoooter from '../../components/Footer/subfooter';
import { useEffect, useState } from 'react';
import { useFormik } from 'Formik';
import * as Yup from 'yup';
import Image from 'next/image';
import logo from '../../public/logo/light1.png';
import logo1 from '../../public/logo/light.png';

const Parotange = () => {
  const [pay, setpay] = useState();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      payment: '0',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'نام تان حداکثر ۱۵ کاراکتر باشد'),
      email: Yup.string().email('فرمت ایمیل تان درست نمیباشد'),
      message: Yup.string(),
      /* peyment: Yup.number(), */
    }),
    onSubmit: () => {
      formik.values.name = '';
      formik.values.email = '';
      formik.values.message = '';
      formik.values.payment = '0';
    },
  });

  const ChangeState = () => {
    setOpenModal(false);
    formik.values.name = '';
    formik.values.email = '';
    formik.values.message = '';
    formik.values.payment = '0';
  };
  const [openModal, setOpenModal] = useState(false);
  console.log(formik.values);
  return (
    <div>
      <Meta title={'حمایت از چراغ'} />
      <Nav />
      <div
        className={`sm:pt-36 pt-24 md:px-12 sm:px-6 sm:grid sm:grid-cols-2 grid-cols-1 px-3 md:gap-x-8 sm:gap-x-4 ${
          openModal ? 'backdrop-blur-2xl opacity-50' : ''
        }`}
      >
        <div className="block bg-bgWave sm:mb-0 mb-8 p-0 m-0 shadow-2xl text-white rounded-3xl">
          <div className="text-center items-center md:pt-12 md:pb-12 sm:pt-20 sm:pb-16 pt-10 pb-8">
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
            <p className=" mt-2 mb-3">
              بجای شکست دادن یگدیگر بیاید از همدیگر حمایت کنیم تا همه ما موفق
              شویم "
            </p>
            <Image src={logo} width={200} height={200} alt="light" />
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
                type={'text'}
                id="payment"
                onChange={formik.handleChange}
                values={formik.values.payment}
                formikError={
                  formik.errors.payment ? formik.errors.payment : null
                }
              />
            </div>
            <div className="items-center flex  mx-auto text-center ">
              <button
                onClick={() => setOpenModal(true)}
                className=" text-white text-2xl rounded-md w-full py-2 my-2 bg-bgWave"
              >
                ادامه
                <FontAwesomeIcon icon={faArrowLeftRotate} className="px-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {openModal ? (
        <>
          <section
            className={`PaymentModal  px-4 py-2 lg:w-10/12 md:w-11/12 sm:w-11/12 w-10/12 h-[500px]  bg-white
              }  sm:space-x-0 sm:space-x-4 space-x-0 shadow-2xl border-[#1E3D59]    z-50 border rounded-xl mx-auto`}
          >
            {/* <div
                onClick={ChangeState}
                className="flex justify-end pb-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-circle hover:bg-bgWave hover:text-white rounded-full transition-all"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div> */}
            <div className="md:grid md:grid-cols-3 block gap-x-4 ">
              <div className="cartInformation col-span-2 bg-gray rounded-2xl">
                <article>
                  <div className="px-4  w-fit py-2 mt-3 mx-3 mb-4 border-b-2 border-[#1E3D59]">
                    <h2>اطلاعات کارت</h2>
                  </div>
                </article>
                <form action="#" className="">
                  <div className="sm:grid sm:grid-cols-2 block my-4 space-x-3 pr-6">
                    <div className="">
                      <label className="text-textWave">شماره کارت</label>
                      <p className="text-sm text-[#444]">
                        شماره ۱۲ رقمی درج شده بر روی کارت
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="1212-3243-5465"
                        className="py-2 px-4 rounded-2xl border outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-2 block my-4 space-x-3 pr-6">
                    <div>
                      <label className="text-textWave">شماره شناسای</label>
                      <p className="text-sm text-[#444]">
                        شماره ۸ رقمی درج شده بر روی کارت
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="12-12-3243"
                        className="py-2 px-4 rounded-2xl border outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-2 block my-4 space-x-3 pr-6">
                    <div>
                      <label className="text-textWave">تاریخ انقضای کارت</label>
                      <p className="text-sm text-[#444]">
                        تاریخ درج شده بر روی کارت بانکی
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="09-11-2024"
                        className="py-2 px-4 rounded-2xl border outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-2 block my-4 space-x-3 pr-6">
                    <div>
                      <label className="text-textWave">کود امنیتی</label>
                      <p className="text-sm text-[#444]">
                        کود امنیتی از طرف سیستم تولید میشود
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="1212-3243-5465"
                        className="py-2 px-4 rounded-2xl border outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-2 block my-4 space-x-3 pr-6">
                    <div>
                      <label className="text-textWave">ایمیل(اختیاری)</label>
                      <p className="text-sm text-[#444]">
                        ایمیل تان اختیاری مییاشد
                      </p>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="lightLearn2022@gmail.com"
                        className="py-2 px-4 rounded-2xl border outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-3 px-3 mt-10 mb-4">
                    <button
                      type="onSubmit"
                      className="bg-bgWave text-white transition-all hover:bg-opacity-80 border-white rounded-2xl w-full py-3 hover:-translate-x hover:scale-105 duration-500"
                    >
                      پرداخت
                    </button>
                    <button
                      onClick={ChangeState}
                      className=" text-textWave border hover:bg-white  transition-all border-[#1E3D59] rounded-2xl w-full py-3 hover:-translate-x hover:scale-105 duration-500"
                    >
                      انصراف
                    </button>
                  </div>
                </form>
              </div>
              <div className="PaymentInformation col-span-1 bg-gray rounded-2xl">
                <div className="px-4  w-fit py-2 mt-3 mx-3 mb-4 border-b-2 border-[#1E3D59]">
                  <h2>اطلاعات پرداخت</h2>
                </div>
                <div className="text-center border-dashed border-2 w-8/12 mx-auto py-3 bg-bgWave bg-opacity-90 text-white border-white rounded-l-xl rounded-r-full">
                  <h2 className="text-xl">
                    {formik.values.payment}{' '}
                    <span className="text-white">افغانی</span>
                  </h2>
                  <p>مبلغ قابل پرداخت</p>
                </div>
                <div>
                  <ul className="pr-6 pt-4 list-disc">
                    <li className=" text-textWave">
                      <span>فرستنده : </span>
                      <span className="capitalize">{formik.values.name}</span>
                    </li>
                    <li className=" text-textWave">
                      <span>گیرنده : </span>
                      <span className="capitalize">چراغ / lightLearn</span>
                    </li>
                    <li className=" text-textWave">
                      <span>کود پزیرنده : </span>
                      <span>984565-09-11</span>
                    </li>
                    <li className=" text-textWave">
                      <span>سایت پزیرنده : </span>
                      <a href="#">https://lightLearn.com</a>
                    </li>
                    <p className="text-center text-xl mt-4 text-textWave">
                      این پزیرنده توسط تمام بانک های افغانستان اجرا میگردد
                    </p>
                    <p className="text-center block mt-2 pb-2 text-md text-textWave">
                      سپاس از همکاری تان{' '}
                      <p className="capitalize">{formik.values.name} عزیز</p>
                      <Image src={logo1} width={70} height={70} alt="light" />
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
      <SubFoooter title="روشنایی همه تاریکی ها" reserved="All Right Reserved" />
    </div>
  );
  function Payement(e) {
    e.preventDefault();
    location.replace('/patronage/payment');
  }
};

export default Parotange;
