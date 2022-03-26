import Navbar from "../../components/Navbar/navbar";
import Meta from "../../components/Meta/Meta";


const NewCourses=()=>{
    return(
        <div>
            <Meta title={'جدید ترین دوره های آموزشی'}/>
            <Navbar/>
            <div className="text-center bg-gray-100 py-3 my-4">
                <h1  className="text-2xl newcourses">جدید ترین دوره های آموزشی</h1>
            </div>
        </div>
    )
}

export default NewCourses