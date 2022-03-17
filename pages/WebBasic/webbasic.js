import Data from '../../components/Courses/data';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faComment ,faStar } from '@fortawesome/free-solid-svg-icons';
const WebBasic = () => {
 const [like,setLike]= useState(1);
 const [heart,setHeart]= useState(3);
 const [comment,setComment]= useState(2);
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="mx-6 my-6 text-bold text-3xl">
          دوره های ابتدایی طراحی وب
        </h1>
        <span className="px-5 text-gray-600">
          درین مجموعه از کورس های که شروع برنامه نویسی تحت وب میباشد کورس های{' '}
          <strong className="text-primary">Bootstrap</strong> ,{' '}
          <strong className="text-primary">Flex_Box</strong>,{' '}
          <strong className="text-primary">CSS_Grid</strong>,{' '}
          <strong className="text-primary">CSS</strong>,{' '}
          <strong className="text-primary">HTML</strong> و همچنان نحوه کار با
          طراحی قالب فروشگاهی آنلاین را از صفر تا به صد یاد خواهید گرفت
        </span>
      </div>
      <div className="row my-5 space-x-4 mx-4">
        <div className="card grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-x-16 md:gap-y-4 gap-3 max-w-6xl mx-auto">
          {Data.WebBasic.map((item, index) => {
            return (
              <div
                key={index}
                className=" space-x-2 md:space-x-4 border border-2  rounded-xl cursor-pointer"
              >
                <div className="bg-gray-100">
                  <Link href={`/WebBasic/${item.slug}`} key={index}>
                    <div>
                      <div
                        style={{ direction: 'ltr' }}
                        className="star text-yellow-400 px-2 py-2"
                      >
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ fontSize: 17 }}
                          className="hover:text-yellow-500"
                        />
                      </div>
                      <img
                        src={item.img}
                        className="hover:opacity-50 h-48 mx-auto transition-all"
                      ></img>
                      <div className="px-3">
                        <h1 className="mt-3 mb-2">
                          <span className="text-gray-500">{item.info}</span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {item.name}
                          </span>
                        </h1>
                        <h1 className="">
                          <span className="text-gray-500">مدت : </span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {item.time}
                          </span>
                        </h1>
                        <h1 className="mb-3">
                          <span className="text-gray-500">مدرس : </span>
                          <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                            {item.instructor}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <div className="px-3">
                    <div className="flex my-2 bg-slate-300 py-2 rounded-md px-3  hover:bg-teal-500 transition-all">
                      <button className="text-gray-700 hover:text-gray-800 ">
                        {item.price}
                      </button>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="flex justify-around border border-t-2 text-sm border-b-2 border-r-0 border-l-0 my-2 py-1 text-center rounded-md">
                      <p className="text-center items-center">
                        <span className="px-2 py-0 rounded-full bg-green-500 text-white text-sm mx-2">
                          {comment}
                        </span>
                        <span
                          className="text-gray-700 hover:text-gray-500 "
                          onClick={IncreasComment}
                        >
                          <FontAwesomeIcon
                            icon={faComment}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                      <p>
                        <span className="px-2 py-0 rounded-full bg-red-500 text-white mx-2 text-sm">
                          {heart}
                        </span>
                        <span
                          className="text-red-600 hover:text-red-400"
                          onClick={IncreaseHeart}
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                      <p>
                        <span className="px-2 py-0 rounded-full bg-blue-500 text-white mx-2 text-sm">
                          {like}
                        </span>
                        <span
                          className="hover:text-blue-400 text-blue-600 transition-all"
                          onClick={IncreaseLike}
                        >
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            style={{ fontSize: 17 }}
                            className="mt-1"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
 function IncreaseLike(){
      setLike(like+1);
      console.log(like);
 }
 function IncreaseHeart(){
      setHeart(heart+1);
      console.log(heart)
 }
 function IncreasComment(){
      setComment(comment+1);
      console.log(comment)
 }
};

export default WebBasic;
