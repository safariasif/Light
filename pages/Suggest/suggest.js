import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
import Input from "../Regester/inputRegester";
import SubFooter from "../../components/Footer/subfooter";
import * as Yup from 'Yup';
import { Formik, useFormik, Form } from 'formik';
import axios from "axios";
import { useState } from "react";
const Suggest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggest, setSuggest] = useState('');
 const handelSubmit = () => {
      axios.post(
        `https://sheet.best/api/sheets/6e3f0197-b14b-4d01-bd51-66ff76d3729e`,
        name , email , suggest
      );  
  }
    return (
      <div>
        <Meta title={'نظریات / پشنهادات'} />
        <Navbar />
        <div className="pt-36">
          <div>
            <h2 className="text-center py-4 text-2xl">نظریات و پشنهادات</h2>
          </div>
          <form onSubmit={handelSubmit} method="POst">
            <div className="md:w-6/12 w-10/12 mx-auto mb-4">
              <label className="pr-4" htmlFor="name">
                نام :
              </label>
              <input
                type={'text'}
                name="name"
                className="w-full py-2 pl-4 px-3 outline-none border rounded-full  shadow-2xl"
                placeholder="نام تان را بنویسید"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="md:w-6/12 w-10/12 mx-auto mb-4">
              <label className="pr-4" htmlFor="name">
                ایمیل :
              </label>
              <input
                type={'text'}
                className=" w-full py-2  pl-4 px-3 outline-none border rounded-full  shadow-2xl"
                name="name"
                placeholder="ایمیل تان را بنویسید"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="md:w-6/12 w-10/12 mx-auto">
              <label className="text-gray-600 px-2 font-bold" htmlFor="">
                نظریه / پشنهاد
              </label>
              <textarea
                required
                typeof="textarea"
                className="border border-2 w-full py-1  my-2 outline-none px-4 shadow-lg rounded-md"
                rows={6}
                value={suggest}
                onChange={(e) => {
                  setSuggest(e.target.value);
                }}
                placeholder={'نظریه و پشنهادات خود را اینجا بنویسید'}
              ></textarea>
            </div>
            <div className="my-4 md:w-6/12 w-10/12 mx-auto">
              <button
                onClick={Message}
                className="block w-full py-2 bg-bgWave text-white hover:text-gray-300  transition-all  rounded-full shadow-lg"
              >
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

export default Suggest;