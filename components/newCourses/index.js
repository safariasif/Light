import React, { Component, useState } from "react";
import product1 from '../../public/newCourses/product-1.png';
import Slider from 'react-slick';
import { NewCoursesData } from '../../constant/data';
import Image from "next/image";
import NewCoursesDitailes from "./newCoursesDitailes";
const NewCourses = () => {
  const [data, setData] = useState(NewCoursesData);
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div className="bg-gray bg-opacity-85 pb-16 pt-8">
        <h2 className="text-center mt-6 mb-5 pt-5 pb-7 text-3xl text-textWave ">
          جدید ترین دوره های آموزشی
        </h2>
        <div className="w-10/12 mx-auto">
          <Slider className="" {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <NewCoursesDitailes data={ item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
}
export default NewCourses;

