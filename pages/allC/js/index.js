import LearningTearm from "../../../components/dropDown";
import React from "react";
import Navbar from '../../../components/Navbar/navbar'
import CoursesBanner from '../../../components/Banner/BannerCourses'
const Js = () => {
    return (
        <>
            <Navbar />
            <CoursesBanner title={"جاوا اسکریپت"}/>
            <h2 className="pt-36">this is Js</h2>
        </>
    )
}
export default Js;