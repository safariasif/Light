import Link from 'next/link';
import Meta from '../../components/Meta/Meta';
import Navbar from '../../components/Navbar/navbar';
import { Component } from 'react';
import Input from './inputRegester';
import * as yup from 'yup'
import SubFooter from '../../components/Footer/subfooter';
class Regester extends Component {
  constructor(props) {
    super(props);
    this.onImageChange = this.onImageChange.bind(this);
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  state = {
    account: {
      name: '',
      email: '',
      password: '',
      repassword: '',
      img: '',
    },
    errors: [],
    data: {
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    img:{
      image:null
    },
  };
  schema = yup.object().shape({
    name: yup.string().required('پر کردن فیلد نام الزامی میباشد'),
    email: yup
      .string()
      .email('فرمت ایمیل تان درست نمیاشد')
      .required('پر کردن فیلد ایمیل الزامی میباشد'),
    password: yup.string().min(8, 'رمز عبور تان حداقل هشت کاراکتر باشد'),
  });
  validate = async () => {
    try {
      const respone = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return respone;
    } catch (error) {
      this.setState({ errors: error.errors });
      console.log(this.state.errors);
    }
  };
  handelPrees = (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    /* this.setState({name:result.name,email:result.email,password:result.password,repassword:result.password});
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.repassword); */

    try {
      localStorage.setItem('token', result.name);
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, email, password, repassword } = this.state.account;
    return (
      <div>
        <Meta title={'ثبت نام'} icon={'/404.svg'}></Meta>
        <Navbar name={name} />
        <div className="regetser mt-12 md:flex block justify-center ">
          <div className="text-start md:px-16 px-5   text-lg  md:w-8/12 ">
            {this.state.errors.length !== 0 && (
              <div
                class="bg-red-600 rounded-lg py-5 px-6 mb-4 text-base text-white mb-3"
                role="alert"
              >
                <ul>
                  {this.state.errors.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
            <form onSubmit={this.handelSubmit}>
              <div className="text-center font-bold text-2xl">
                <h1>ثبت نام</h1>
              </div>

              <Input
                label={'نام و نام فامیلی : '}
                name={'name'}
                type={'text'}
                value={name}
                onChange={this.handelPrees}
              />
              <Input
                name={'email'}
                type={'email'}
                value={email}
                label={'ایمیل تان را وارد کیند : '}
                onChange={this.handelPrees}
              />
              <Input
                name={'password'}
                type={'password'}
                value={password}
                label={'رمر عبور : '}
                onChange={this.handelPrees}
              />
              <Input
                name={'repassword'}
                type={'password'}
                value={repassword}
                label={'تکرار رمز عبور : '}
                onChange={this.handelPrees}
              />
              <div className="my-4">
                <button className="block w-full py-2 bg-green-400 text-gray-700 hover:bg-green-300 transition-all hover:text-gray-800 rounded-full shadow-lg">
                  ثبت نام
                </button>
              </div>
            </form>
          </div>
          <div className="border border-2 px-12 md:mt-16 rounded-md   mx-3 items-center justify-center">
            {/* <h1 className="my-0 py-0 pt-4  text-center">
              انتخاب تصویر دلخواه است
            </h1> */}
            <div className=" grid md:block justify-center md:w-36 md:h-36 w-24 h-24 mt-4 rounded-full items-center">
              <img
                src={this.state.image}
                alt="انتخاب تصویر دلخواه است"
                className="md:w-36 md:h-36 w-28 h-28 rounded-full"
              ></img>
            </div>
            <div className="bg-gray-700 grid  md:block  md:w-20 md:h-20 w-16 h-16 rounded-full  items-center mt-[-30px]   small-circle ">
              <input
                className="w-10 my-5   w-20 h-36 rounded-full  opacity-0"
                type="file"
                name="myImage"
                onChange={this.onImageChange}
              ></input>
            </div>
            <div className="my-4  mr-0 m-0 flex-wrap">
              <h1 className="text-gray-700" style={{ direction: 'ltr' }}>{`${
                name ? name : `« به دنیایی برنامه نویسی  وب خوش آمدید »`
              }`}</h1>
              <span className="m-0 p-0">
                <h1 className="text-gray-700" style={{ direction: 'ltr' }}>{`${
                  email ? email : `« موفقیت شما به نور چراغ افزایش میدهد »`
                }`}</h1>
              </span>
            </div>
          </div>
        </div>
        <SubFooter title="روشنایی همه تاریکی ها 'چراغ'" reserved="All Right Reserved"/>
      </div>
    );
  }
  UploadImage = (event) => {
    this.setState({ img: event.target.files[0].name });
  };
};

export default Regester;

 