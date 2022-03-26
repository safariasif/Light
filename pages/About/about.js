import react from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
const About=()=>{
    return (
      <div>
        <Meta title={'درباره ما'} />
        <Navbar bgColor={"#0099ff"} textColor={"#ffffff"}  />
        <img src="/footer (2).svg"></img>
        <div className="text-center">
            <h1 className="text-2xl font-bold">درباره ما</h1>
            <p className="mt-3">وبسایت آموزشی چراغ یکی از وبسایت های رسمی و تمام ویدیو های درسی آن مدرن و اپدیت میباشد</p>
            <p>تمام تلاش ما و استادان ما در این است که کریکولم درسی و مواد درسی از دانشگاه های بین المللی باشد</p>
        </div>
        <div className="text-center my-10">
            <h1>با ما بیشتر آشنا شوید</h1>
            <p>تیم ما</p>
        </div>
      </div>
    );
}

export default About;