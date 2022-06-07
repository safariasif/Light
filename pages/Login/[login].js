import Link from 'next/link'
import Navbar from '../../components/Navbar/navbar'
import Meta from '../../components/Meta/Meta'
import Input from '../Regester/inputRegester';
import DashBoard from '../AdminBord/[dashboard]';
import SubFooter from '../../components/Footer/subfooter';
import { Component } from 'react';
import * as Yup from 'Yup';
import { Formik , useFormik , Form} from 'formik';

const Login = () => {
  
    return (
      <div className="loginpage">
        <Meta title={'ورود'}></Meta>
        <Navbar />
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
              <div className="text-start i md:pr-24 px-5 text-lg ">
                <form>
                  <div className="text-center font-bold text-2xl">
                    <h1>ورود</h1>
                  </div>
                  <Input
                    label={'ایمیل'}
                    name={'email'}
                    type={'email'}
                    placeholder="ایمیل تان را وارد کنید"
                  />
                  <Input
                    label={'رمز عبور'}
                    name={'password'}
                    placeholder="رمز عبور تان را وارد کنید"
                    type={'password'}
                    icons={true}
                  />
                  <div className="my-2">
                    <label className="text-gray-600 px-2 ">
                      به یاد داشتنن:
                    </label>
                    <input className="outline-none" type="checkbox"></input>
                  </div>
                  <div className="my-4">
                    <button className="block w-10/12 py-2 bg-blue-800 text-white bg-bgWave transition-all hover:text-gray-300 rounded-md">
                      ورود
                    </button>
                    <div className="pt-4">
                      <Link href="Login/login">
                        <h2 className="text-white text-center">ورود ؟</h2>
                      </Link>
                    </div>
                  </div>
                  <div className="my-4 font-mono text-md  grid md:grid-cols-2 sm:grid-cols-2 justify-between px-3">
                    <div>
                      <span>
                        <Link href="/forget">
                          <a className="hover:text-green-500">
                            فراموشی رمز عبور؟
                          </a>
                        </Link>
                      </span>
                    </div>
                    <div className="lg:pr-24">
                      <span>
                        <Link href="/Regester/regester">
                          <a className="hover:text-green-500">ثبت نام؟</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="md:mt-0 mt-5 items-center  rounded-xl ">
                <img src="/Login/login.svg" className="w-10/12 mx-auto"></img>
              </div>
            </div>
          </Form>
        </Formik>
        <SubFooter
          title="روشنایی همه تاریکی ها 'چراغ'"
          reserved="All Right Reserved"
        />
      </div>
    );
  }
export default Login;