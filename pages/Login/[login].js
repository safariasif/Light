import Link from 'next/link'
import Navbar from '../../components/Navbar/navbar'
import NotFount from '../404';
import Meta from '../../components/Meta/Meta'
import Input from '../Regester/inputRegester';
import { Component } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { createRef } from 'react/cjs/react.production.min';
class Login extends Component {
  state = {
    account: {
      email: '',
      password: '',
    },
    errors: [],
    sending:false,
  };
  schema = yup.object().shape({
    email: yup
      .string()
      .email('فرمت ایمیل درست نمیباشد')
      .required('پر کردن فیلد ایمیل الزامی میباشد'),
    password: yup.string().min(4, 'رمز عبور حداقل چهار کاراکتر باشد'),
  });
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
      console.log(result);
    } catch (error) {
      this.setState({ errors: error.errors });
      console.log(this.state.errors);
    }
  };
  HandelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(result);
    if(result){
      try{
        this.setState({sending:true})
        result.email == 'mohammdaasifsafari1997@gmail.com' &&
        result.password == 'asif' ? (
          ''
        ) : (
          this.setState({ errors:['ایمیل و یا رمز عبور تان درست نمیباشد' ]})
        ); 
        this.setState({sending:false})
      }
      catch(error){
        this.setState({sending:false})
        this.setState({errors:['ایمیل و یا رمز عبور تان درست نمیباشد']})
      }
        }
        
  };
  handelPrees = (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <div>
        <Meta title={'ورود'}></Meta>
        <Navbar/>
        <div className="w-full  mt-12 grid md:grid-cols-2 justify-center items-center space-x-5">
          <div className="text-start md:px-16 px-5   text-lg ">
            {this.state.errors.length !== 0 && (
              <div
                class="bg-red-600 rounded-lg py-5 px-6 mb-4 text-base text-white mb-3"
                role="alert"
              >
                <ul>
                  {this.state.errors.map((e,index)=><li key={index}>{e}</li>)}
                </ul>
              </div>
            )}
            <form onSubmit={this.HandelSubmit}>
              <div className="text-center font-bold text-2xl">
                <h1>ورود</h1>
              </div>
              <Input
                label={'ایمیل'}
                name={'email'}
                placeholder={'ایمیل تان را بنویسید'}
                type={'email'}
                value={email}
                onChange={this.handelPrees}
              />
              <Input
                label={'رمز عبور'}
                value={password}
                name={'password'}
                placeholder={'رمز عبور تان را بنویسید'}
                type={'password'}
                onChange={this.handelPrees}
              />
              <div className="my-2">
                <label className="text-gray-600 px-2 ">به یاد داشتنن:</label>
                <input className="outline-none" type="checkbox"></input>
              </div>
              <div className="my-4">
                <button disabled={this.state.sending} className="block w-full py-2 bg-blue-800 text-white hover:bg-green-300 transition-all hover:text-gray-800 rounded-md">
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
  }
}

export default Login;