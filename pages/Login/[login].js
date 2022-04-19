import Link from 'next/link'
import Navbar from '../../components/Navbar/navbar'
import NotFount from '../404';
import Meta from '../../components/Meta/Meta'
import Input from '../Regester/inputRegester';
import DashBoard from '../AdminBord/[dashboard]'
import { Component } from 'react';
import * as yup from 'yup';

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
        const response= e.email == 'mohammdaasifsafari1997@gmail.com'?'ایمیل تان درست نیست':'رمز عبور تان درست نیست';
        result.email == 'mohammdaasifsafari1997@gmail.com' &&
        result.password == 'asif'
          ? (window.location = '/AdminBord/dashboard')
          : this.setState({
              errors: [response],
            }); 
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
        <Navbar />
        <div className="w-full  mt-12 grid md:grid-cols-2 justify-center content-center items-center space-x-5">
          <div className="text-start md:px-16 px-5   text-lg ">
            {this.state.errors.length !== 0 && (
              <div
                className="bg-red-600 rounded-lg py-5 px-6 mb-4 text-base text-white mb-3"
                role="alert"
              >
                <ul>
                  {this.state.errors.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
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
                type={'email'}
                value={email}
                onChange={this.handelPrees}
              />
              <Input
                label={'رمز عبور'}
                value={password}
                name={'password'}
                type={'password'}
                onChange={this.handelPrees}
              />
              <div className="my-2">
                <label className="text-gray-600 px-2 ">به یاد داشتنن:</label>
                <input className="outline-none" type="checkbox"></input>
              </div>
              <div className="my-4">
                <button
                  disabled={this.state.sending}
                  className="block w-full py-2 bg-blue-800 text-white hover:bg-green-300 transition-all hover:text-gray-800 rounded-md"
                >
                  ورود
                </button>
              </div>
              <div className="my-4 font-mono text-md  grid md:grid-cols-2 sm:grid-cols-2 justify-between px-3">
                <div>
                  <span>
                    <Link href="/forget">
                      <a
                        disabled={this.state.sending}
                        className="hover:text-green-500"
                      >
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
          <div className="md:mt-0 mt-5 items-center">
            <img src="/Login/login.svg" className="w-10/12 mx-auto"></img>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="0.75"
              d="M0,64L15,64C30,64,60,64,90,96C120,128,150,192,180,202.7C210,213,240,171,270,160C300,149,330,171,360,170.7C390,171,420,149,450,122.7C480,96,510,64,540,85.3C570,107,600,181,630,186.7C660,192,690,128,720,112C750,96,780,128,810,154.7C840,181,870,203,900,192C930,181,960,139,990,122.7C1020,107,1050,117,1080,128C1110,139,1140,149,1170,133.3C1200,117,1230,75,1260,74.7C1290,75,1320,117,1350,128C1380,139,1410,117,1425,106.7L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
            ></path>
          </svg>
          <h1
            className="text-center opacity-75 text-white md:text-2xl text-md pb-4"
            style={{ background: '#5000ca' }}
          >
            {' '}
            روشنایی همه تاریکی ها" چراغ"
            <h1 className="text-center text-sm mt-5">All right reserved</h1>
          </h1>
        </div>
      </div>
    );
  }
}

export default Login;