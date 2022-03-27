import react from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
const About=()=>{
    return (
      <div>
        <Meta title={'درباره ما'} />
        <Navbar bgColor={'#0099ff'} textColor={'#ffffff'} />
        <img src="/footer (2).svg"></img>
        <div className="text-center">
          <h1 className="text-2xl font-bold">درباره ما</h1>
          <p className="mt-3">
            وبسایت آموزشی چراغ یکی از وبسایت های رسمی و تمام ویدیو های درسی آن
            مدرن و اپدیت میباشد
          </p>
          <p>
            تمام تلاش ما و استادان ما در این است که کریکولم درسی و مواد درسی از
            دانشگاه های بین المللی باشد
          </p>
        </div>
        <div className="text-center my-10">
          <h1>با ما بیشتر آشنا شوید</h1>
          <p>تیم ما</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 border-b-4 border-l-4 lg:w-10/12 w-full lg:mx-auto  my-4  w-full border-red-900 lg:rounded-full md:rounded-3xl rounded-md shadow-xl ">
            <div className="my-8">
              <div className="img flex lg:justify-end justify-center">
                <span className="mt-3 ml-4 text-left border-b-2">
                  <h1 className="font-bold">Asif Safari</h1>
                  <span className="text-gray-600">Front End Developer</span>
                  <p>
                    Email:{' '}
                    <a href="/email" className="hover:text-slate-600">
                      mohammadasifsafari1997
                    </a>
                  </p>
                  <p>
                    linkedin:{' '}
                    <a href="linkedIn" className="hover:text-purple-500">
                      Safari Asif
                    </a>
                  </p>
                  <p>
                    Telegram:{' '}
                    <span>
                      <span className="text-green-700">+93</span> 780051517
                    </span>
                  </p>
                </span>
                <img
                  src="/profile/profile (2).jpg"
                  alt="asifsafari"
                  className="w-16 h-16 rounded-tl-2xl rounded-tr-4xl rounded-br-2xl   rounded-bl-3xl rounded-tr-3xl border"
                ></img>
              </div>
            </div>
            <div className="lg:mt-28 mt-4 mb-4">
              <div className="img flex lg:justify-start justify-center">
                <span className="mt-3 ml-4 text-left border-b-2">
                  <h1 className="font-bold">Asif Safari</h1>
                  <span className="text-gray-600">Back End Developer</span>
                  <p>
                    Email:{' '}
                    <a href="/email" className="hover:text-slate-600">
                      mohammadasifsafari1997
                    </a>
                  </p>
                  <p>
                    linkedin:{' '}
                    <a href="linkedIn" className="hover:text-purple-500">
                      Safari Asif
                    </a>
                  </p>
                  <p>
                    Telegram:{' '}
                    <span>
                      <span className="text-green-700">+93</span> 780051517
                    </span>
                  </p>
                </span>
                <img
                  src="/profile/profile (2).jpg"
                  alt="asifsafari"
                  className="w-16 h-16 rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-3xl rounded-tr-3xl border"
                ></img>
              </div>
            </div>
            <div className="my-8 ml-5">
              <div className="img flex justify-center">
                <span className="mt-3 ml-4 text-left border-b-2">
                  <h1 className="font-bold">Asif Safari</h1>
                  <span className="text-gray-600">UI/UX deisnger</span>
                  <p>
                    Email:{' '}
                    <a href="/email" className="hover:text-slate-600">
                      mohammadasifsafari1997
                    </a>
                  </p>
                  <p>
                    linkedin:{' '}
                    <a href="linkedIn" className="hover:text-purple-500">
                      Safari Asif
                    </a>
                  </p>
                  <p>
                    Telegram:{' '}
                    <span>
                      <span className="text-green-700">+93</span> 780051517
                    </span>
                  </p>
                </span>
                <img
                  src="/profile/profile (2).jpg"
                  alt="asifsafari"
                  className="w-16 h-16 rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-3xl rounded-tr-3xl border"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;