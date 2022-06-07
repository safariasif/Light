import SliderDetails from '../slider/SliderDetailes';
import Data from '../../constant/data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { python } from 'fontawesome';
import { useEffect, useState } from 'react';
const SliderBlog = (props) => {
 const [python, setpythonedata] = useState([]);
  useEffect(() => {
    const respone = Data.Python;
    setpythonedata(respone);
  });
  const settings = {
    className: 'center',
    /* centerMode: true, */
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 2,
    speed: 500,
    autoplay: true,
  };
  const Mdsettings = {
    className: 'center',
    /* centerMode: true, */
    dots: true,
    dotsClass: `slick-dots dots`,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    speed: 500,
    autoplay: true,
  };
  const Smsettings = {
    className: 'center',
    /* centerMode: true, */
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500,
    autoplay: true,
  };
  return (
    <>
      <div className="md:block sm_smobile:hidden sm:hidden px-12">
        <Slider {...settings}>
          {python.map((item, index) => {
            return (
              <div key={index}>
                <SliderDetails
                  src={item.img}
                  alt="python"
                  name={item.name}
                  time={item.time}
                  instructor={item.instructor}
                  price={item.price}
                  rate={item.rate}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="sm:block sm_smobile:hidden md:hidden">
        <Slider {...Mdsettings}>
          {python.map((item, index) => {
            return (
              <div key={index}>
                <SliderDetails
                  src={item.img}
                  alt="python"
                  name={item.name}
                  time={item.time}
                  instructor={item.instructor}
                  price={item.price}
                  rate={item.rate}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="md:hidden sm:hidden sm_smobile:block">
        <Slider {...Smsettings}>
          {python.map((item, index) => {
            return (
              <div key={index}>
                <SliderDetails
                  src={item.img}
                  alt="python"
                  name={item.name}
                  time={item.time}
                  instructor={item.instructor}
                  price={item.price}
                  rate={item.rate}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SliderBlog;
