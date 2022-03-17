import Link from 'next/link';
import Meta from '../../components/Meta/Meta';
import Navbar from '../../components/Navbar/navbar';
import { Component } from 'react';
import Input from './inputRegester';
class Regester extends Component {
  state = {
    account: {
      name: '',
      email: '',
    },
  };
  handelPrees=(e)=>{
    const input = e.currentTarget;
    const account ={...this.state.account};
    account[input.name]=input.value;
    this.setState({account})
  }
  render() {
    const {name,email}=this.state.account;
    return (
      <div>
        <Meta title={'ثبت نام'} icon={'/404.svg'}></Meta>
        <Navbar />
        <div className="regetser mt-12 md:flex block justify-center ">
          <div className="text-start md:px-16 px-5   text-lg  md:w-8/12 ">
            <form action="">
              <div className="text-center font-bold text-2xl">
                <h1>ثبت نام</h1>
              </div>

              <Input
                label={'نام و نام فامیلی : '}
                name={'name'}
                placeholder={'نام خود را وارد کنید'}
                type={'text'}
                value={name}
                onChange={this.handelPrees}
              />
              <Input
                name={'email'}
                placeholder={'ایمیل خود را وارد کنید'}
                type={'email'}
                value={email}
                label={'ایمیل تان را وارد کیند : '}
                onChange={this.handelPrees}
              />
              <Input
                name={'password'}
                placeholder={'رمز عبور خود را وارد کنید'}
                type={'password'}
                label={'رمر عبور : '}
              />
              <Input
                name={'password'}
                placeholder={'تکرار رمز عبور'}
                type={'password'}
                label={'تکرار رمز عبور : '}
              />
              <div className="my-4">
                <Link href="/Regester/regester">
                  <button className="block w-full py-2 bg-green-400 text-gray-700 hover:bg-green-300 transition-all hover:text-gray-800 rounded-full shadow-lg">
                    ثبت نام
                  </button>
                </Link>
              </div>
            </form>
            {/* <div className=" lg:grid lg:grid-cols-4 w-full mx-auto my-5">
            <div className="flex justify-between  text-start py-3">
              <Link href="/google">
                <a className="">ورود با فسبوک</a>
              </Link>
              <Link href="/google">
                <img src="/facebook.svg" className="rounded bg-red-800"></img>
              </Link>
            </div>
            <div className="flex justify-between py-3  text-start">
              <Link href="/google">
                <a className="">ورود با انستگرام</a>
              </Link>
              <Link href="/google">
                <img src="/instagram.svg" className=" rounded bg-red-800"></img>
              </Link>
            </div>
            <div className="flex justify-between py-3">
              <Link href="/google">
                <a className="">ورود با لینکدین</a>
              </Link>
              <Link href="/google">
                <img src="/linkdin.svg" className=" rounded bg-red-800"></img>
              </Link>
            </div>
            <div className="flex justify-between py-3">
              <Link href="/google">
                <a className="">ورود با تویتر</a>
              </Link>
              <Link href="/google">
                <img src="/twitter.svg" className="rounded bg-red-800"></img>
              </Link>
            </div>
          </div> */}
          </div>
          <div className="border border-2 px-12 md:mt-16 rounded-md   mx-3 items-center justify-center">
            <h1 className="my-0 py-0 pt-4  text-center">
              انتخاب تصویر دلخواه است
            </h1>
            <div className="bg-gray-800 grid md:block justify-center md:w-36 md:h-36 w-24 h-24 mt-4 rounded-full items-center"></div>
            <div className="bg-gray-700 grid  md:block   md:w-20 md:h-20 w-16 h-16 rounded-full  items-center mt-[-30px]   small-circle ">
              <input
                className="w-10 my-5   w-20 h-36 rounded-full  opacity-0"
                type="file"
              ></input>
            </div>
            <div className="my-4  mr-0 m-0 flex-wrap">
              <h1 className="text-gray-700">{`${
                name ? name : `« به دنیایی برنامه نویسی  وب خوش آمدید »`
              }`}</h1>
              <span className="m-0 p-0">
                <h1 className="text-gray-700">{`${
                  email ? email : `« موفقیت شما به نور چراغ افزایش میدهد »`
                }`}</h1>
              </span>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Regester;

 