import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
import Input from "../Regester/inputRegester";
class Suggest extends Component{
render() {
    return (
      <div>
          <Meta title={'نظریات / پشنهادات'}/>
        <Navbar />
        <div className="mt-12">
          <form onSubmit={this.handelSubmit}>
            <div className="md:w-8/12 w-10/12 mx-auto">
              <Input label={'نام'} name={'name'} type={'text'} />
              <Input label={'ایمیل'} name={'name'} type={'email'} />
            </div>
            <div className="md:w-8/12 w-10/12 mx-auto">
              <label className="text-gray-600 px-2 font-bold" htmlFor="">
                نظریه / پشنهاد
              </label>
              <textarea
                className="border"
                typeof="textarea"
                className="border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg rounded-md"
                rows={6}
              ></textarea>
            </div>
            <div className="my-4 md:w-8/12 w-10/12 mx-auto">
              <button className="block w-full py-2 bg-green-400 text-gray-700 hover:bg-green-300 transition-all hover:text-gray-800 rounded-full shadow-lg">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
}

export default Suggest;