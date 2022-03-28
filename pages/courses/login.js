import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Input from '../Regester/inputRegester';
const LoginPayment = () => {
  return (
    <div className="bg-slate-200">
      <div className="opacity-100  h-screen  justify-center items-center ">
        <div className="bg-slate-200 w-8/12 mx-auto shadow-xl border rounded-xl absolute top-48 right-18">
          <form className="">
            <div className="px-6">
              <div className="text-center my-5 flex justify-between">
                <h1>برای ورود فرم زیل را پر کیند</h1>
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-500"
                  icon={faClose}
                  /* onClick={HideModal} */
                />
              </div>
              <div>
                <h1>
                  اگر قبلا در وبسایت آموزشی چراغ ثبت نام ننموده اید خواهیش میکنم
                  در قدم نخست ثبت نام نماید
                </h1>
                <Link href="/Regester/regester">
                  <a>
                    لینک{' '}
                    <span className="text-blue-700 hover:text-blue-500">
                      ثبت نام ...
                    </span>
                  </a>
                </Link>
              </div>
              <Input
                name={'email'}
                placeholder={'email'}
                label={'ایمیل'}
                type={'email'}
              />
              <Input
                name={'password'}
                placeholder={'password'}
                label={'رمز عبور'}
                type={'password'}
              />
            </div>
            <div className="flex justify-evenly my-2">
              <Link href="/Buying/buy">
                <button className="bg-green-400 px-10 rounded-sm  py-1 hover:bg-pink-500 transition-all hover:text-white">
                  ورود
                </button>
              </Link>
              <Link href="/courses/courses">
                <button className="bg-yellow-400 px-6 rounded-sm  py-1 hover:bg-yellow-200 hover:text-red-500">
                  برگشت
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPayment;
