import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
import Input from "../Regester/inputRegester";
import SubFooter from "../../components/Footer/subfooter";
class Suggest extends Component{
render() {
    return (
      <div>
        <Meta title={'نظریات / پشنهادات'} />
        <Navbar />
        <div className="mt-12">
          <form onSubmit={this.handelSubmit} method="POst">
            <div className="md:w-8/12 w-10/12 mx-auto">
              <Input label={'نام'} name={'name'} type={'text'} req/>
              <Input
                label={'ایمیل'}
                name={'name'}
                type={'email'}
                req
              />
            </div>
            <div className="md:w-8/12 w-10/12 mx-auto">
              <label className="text-gray-600 px-2 font-bold" htmlFor="">
                نظریه / پشنهاد
              </label>
              <textarea
                required
                className="border"
                typeof="textarea"
                className="border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg rounded-md"
                rows={6}
                placeholder={'نظریه و پشنهادات خود را اینجا بنویسید'}
              ></textarea>
            </div>
            <div className="my-4 md:w-8/12 w-10/12 mx-auto">
              <button onClick={Message} className="block w-full py-2 bg-green-400 text-gray-700 hover:bg-green-300 transition-all hover:text-gray-800 rounded-full shadow-lg">
                ارسال
              </button>
            </div>
          </form>
          <SubFooter
            title="خوشحالیم که پشنهاد تان را میشنویم"
            reserved="All Right Reserved"
          />
        </div>
      </div>
    );
    function Message(){
      alert('پشنهاد تان موفقانه ثبت گردید')
    }
}
}

export default Suggest;