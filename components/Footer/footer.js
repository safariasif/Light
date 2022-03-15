const Footer=()=>{
    return (
      <div className="footer mt-12 text-white">
        <div className="grid md:grid-cols-4 gap-5 sm:grid-cols-2 xs:block py-12 px-8">
          <div>
            <h1>درباره ما:</h1>
            <span>
              مام تلاش ما در باره کمیت اموزش و افزایش کورس ها نیست بلکه تمام
              تمام تلاش ما درباره کیفیت آموزش است
            </span>
          </div>
          <div>
            <h1>پشنهاد و نظریات خود را با ما شریک کنید</h1>
            <input
              type="text"
              className="w-full border-2 text-gray-800"
              placeholder="نام"
            ></input>
            <textarea
              className="w-full my-2 border-2 text-gray-800"
              name="message"
              id=""
              cols="30"
              rows="2"
              placeholder="پیام خود را بنویسید"
            ></textarea>
            <button className="d-block w-full rounded py-1 text-white bg-green-500">
              ارسال
            </button>
          </div>
          <div className="">
            <div className="">
              <h6>پل ارتباطی :</h6>
            </div>
            <div className="">
              <p>
                <span className="">+93</span> 76 55 20 732
              </p>
              <p>
                <span className="">+93</span> 78 00 51 517
              </p>
            </div>
            <div className=" ">
              <span>ایمیل: </span>
              <span> mohammadasifsafari1997</span>
            </div>
          </div>
          <div className="">
            <div>
              <h6>و همچنان ما را در صفحات مجازی دنبال کیند</h6>
            </div>
            <div className="">
              <i className="fab fa-facebook text-primary"></i>
              <i className="fab fa-instagram text-danger"></i>
              <i className="fab fa-twitter text-info"></i>
              <i className="fab fa-linkedin text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Footer;