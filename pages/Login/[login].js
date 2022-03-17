import Link from 'next/link'
import Navbar from '../../components/Navbar/navbar'
import Meta from '../../components/Meta/Meta'
import Input from '../Regester/inputRegester';
const Login=()=>{
    return (
      <div>
        <Meta title={'ورود'}></Meta>
        <Navbar />
        <div className="w-full  mt-12 grid md:grid-cols-2 justify-center items-center space-x-5">
          <div className="text-start md:px-16 px-5   text-lg ">
            <form onSubmit={handelSubmit}>
              <div className="text-center font-bold text-2xl">
                <h1>ورود</h1>
              </div>
              <Input label={"ایمیل"} name={"email"} placeholder={"ایمیل تان را بنویسید"} type={"email"}/>
              <Input label={"رمز عبور"} name={"password"} placeholder={"رمز عبور تان را بنویسید"} type={"password"}/>
              <div className="my-2">
                <label className="text-gray-600 px-2 ">به یاد داشتنن:</label>
                <input className="outline-none" type="checkbox"></input>
              </div>
              <div className="my-4">
                  <button className="block w-full py-2 bg-blue-800 text-white hover:bg-green-300 transition-all hover:text-gray-800 rounded-md">
                    ورود
                  </button>
              </div>
              <div className="my-4 font-mono text-md  grid md:grid-cols-2 sm:grid-cols-2 justify-between px-3">
                <div>
                  <span>
                    <Link href="/forget">
                      <a className="hover:text-green-500">فراموشی رمز عبور؟</a>
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
          <div className="md:mt-0 mt-5 items-center">
            <img src="/Login/login.svg" className="w-10/12 mx-auto"></img>
          </div>
        </div>
      </div>
    );
   function handelSubmit(e){
        e.preventDefault();
        console.log('sunmit');
    }
}

export default Login;