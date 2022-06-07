import wave from '../../public/wave.svg';
import Image from 'next/image'
import { Loader } from 'next/dynamic'
import Slider from 'react-slick';
import { Information } from '../../constant/data'
import { useEffect, useState } from 'react';
import SldirDetailes from './sliderDetails';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
export const OurTeacher = () => {

  const [teacherInformation, setTeacherInformation] = useState([]);
  useEffect(() => {
    Infromation();
  })
  const Infromation = () => {
    const response = Information.TeacherInformation;
    setTeacherInformation(response);
  }
   const settings = {
     dots: true,
     dotsClass: `slick-dots dots`,
     lazyLoad: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 2,
   };
    return (
      <div className="mt-0">
        <div className=" ">
          <h2 className="bg-bgWave pt-20  m-0 bg-opacity-90 z-0 text-center text-5xl text-white">
            بهترین استادان ما
          </h2>
          <div className="mt-0 pt-0  ">
            <Image src={wave} height={320} className="bg-white " />
          </div>
        </div>
        <div className="mb-16  w-10/12  mx-auto">
          <Slider {...settings}>
            {
              teacherInformation.map((item) => {
                return (
                  <SldirDetailes
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    lastName={item.lastName}
                    src={item.src}
                    job={item.job}
                    exp={item.experianceOfCooding}
                    about={item.about}
                    linkedIn={item.linkedIn}
                    twitter={item.twetter}
                    facebook={item.facebook}
                    instagram={item.instagram}
                  />
                );
              })
            }
          </Slider>
        </div>
      </div>
    );
}

