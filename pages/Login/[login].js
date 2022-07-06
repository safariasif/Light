import Link from 'next/link'
import Image  from 'next/image';
import Nav from '../../components/Navbar/nav';
import Meta from '../../components/Meta/Meta'
import Input from '../Regester/inputRegester';
import DashBoard from '../AdminBord/[dashboard]';
import SubFooter from '../../components/Footer/subfooter';
import { Component } from 'react';
import * as Yup from 'Yup';
import loginImage from '../../public/Login/login.svg';
import { Formik , useFormik , Form} from 'formik';

const Login = () => {
  
    return (
      <div className="loginpage">
        <Meta title={'ورود'}></Meta>
        <Nav />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('فرمت ایمیل تان درست نمیباشد')
              .required('پر کردن فیلد ایمیل الزامی میباشد'),
            password: Yup.string()
              .min(8, 'رمز عبور تان حداقل ۸ کاراکتر باشد')
              .required('پر کردن فیلد رمز عبور الزامی میباشد'),
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="w-full mx-auto  pt-28 grid md:grid-cols-2 justify-center content-center items-center space-x-5">
              <div className="text-start  md:pr-24 px-5 text-lg  flex justify-center">
                <form className="w-full mx-auto">
                  <div className="text-center font-bold sm:text-5xl text-2xl text-white">
                    <h1>ورود</h1>
                  </div>
                  <Input
                    label={'ایمیل'}
                    name={'email'}
                    type={'email'}
                    placeholder="ایمیل تان را وارد کنید"
                    width="w-full"
                  />
                  <Input
                    label={'رمز عبور'}
                    name={'password'}
                    placeholder="رمز عبور تان را وارد کنید"
                    type={'password'}
                    icons={true}
                    width="w-full"
                  />
                  <div className="my-2">
                    <label className="text-gray-600 px-2 ">
                      به یاد داشتنن:
                    </label>
                    <input className="outline-none" type="checkbox"></input>
                  </div>
                  <div className="my-4">
                    <button className="block w-full hover:opacity-90 py-3 text-white bg-bgWave transition-all text-2xl rounded-md hover:-translate-x hover:scale-x-105 hover:scale-y-105 duration-500 ease-in-out focus:outline-none">
                      ورود
                    </button>
                    <div className="pt-4">
                      <Link href="Login/login">
                        <h2 className="text-white text-center">ورود ؟</h2>
                      </Link>
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-around block justify-center text-center py-2 ">
                    <div>
                      <span>
                        <Link href="/forget">
                          <a className="text-white">فراموشی رمز عبور؟</a>
                        </Link>
                      </span>
                    </div>
                    <div className="">
                      <span>
                        <Link href="/Regester/regester">
                          <a className="text-white hover:opacity-90">
                            ثبت نام؟
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="md:mt-0   items-center text-center  w-full  flex justify-center rounded-xl">
                <Image
                  src={loginImage}
                  alt="loginImage"
                  width={500}
                  height={500}
                  className="mx-auto"
                />
              </div>
            </div>
          </Form>
        </Formik>
        <SubFooter
          title="روشنایی همه تاریکی ها"
          reserved="All Right Reserved"
          bgColor={'white'}
        />
      </div>
    );
  }
export default Login;