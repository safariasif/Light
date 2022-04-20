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
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay:true,
  };
  return (
    <div>
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
  );
};

export default SliderBlog;
