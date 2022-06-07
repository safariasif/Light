import Navbar from "../../components/Navbar/navbar";
import Meta from "../../components/Meta/Meta";
import SliderBlog from "../../components/slider/SliderBlog";


const NewCourses=()=>{
    return (
      <div>
        <div className="text-center bg-gray-100 pb-3 mb-4">
          <Meta title={'جدید ترین دوره های آموزشی'} />
          <Navbar />
          <div className="pt-28">
            <h1 className="text-2xl newcourses my-5 pb-5">
              جدید ترین دوره های آموزشی
            </h1>
            <div>
              <SliderBlog />
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewCourses