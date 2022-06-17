import react from 'react';
import Image from 'next/image';
import learning from '../../public/learning.svg';
const CoursesBanner = ({ title }) => {
  return (
    <div className="row grid md:grid-cols-2 grid-cols-1">
      {title ? (
        <div className="text-center lg:mt-28 md:mt-12 mt-8">
          <div className="headerCourse">
            <h1 className="md:text-5xl text-3xl text-textWave headerCourse">{title}</h1>
          </div>
          <div className="flex md:justify-end justify-center my-3 bannerCourse">
            <h2 className="md:text-4xl text-2xl text-textWave">
              ، یادگیری وب و
              <span className="text-textWave"> دنیایی ارز دیجیتال </span>
            </h2>
          </div>
          <div className="justify-end flex md:ml-0 ml-4 footerCourse">
            <button className="text-textWave">آموزش سریع و کاربردی</button>
          </div>
        </div>
      ) : (
        <div className="text-center lg:mt-28 md:mt-12 mt-8">
          <div className="headerCourse">
            <h1 className="md:text-5xl text-3xl headerCourse">
              یگ قدم به سمت تحلیل
            </h1>
          </div>
          <div className="flex md:justify-end justify-center my-3 bannerCourse">
            <h2 className="md:text-4xl text-2xl text-green-400 ">
              ، یادگیری وب و
              <span className="text-yellow-400"> دنیایی ارز دیجیتال </span>
            </h2>
          </div>
          <div className="justify-end flex md:ml-0 ml-4 footerCourse">
            <button className="text-pink-500">آموزش سریع و کاربردی</button>
          </div>
        </div>
      )}
      <div className="flex items-center pt-7 ">
        <Image
          src={learning}
          width={500}
          height={300}
          className="w-8/12 mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
};
export default CoursesBanner;
