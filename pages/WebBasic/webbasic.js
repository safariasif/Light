import Data from '../../constant/data'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import Loader from 'next/dynamic'
import {AiFillLike} from 'react-icons/ai'
import { FcLike } from 'react-icons/fc';
import { MdAddComment } from 'react-icons/md';
import axios from 'axios';
import { useEffect } from 'react';
import Loading from '../../components/Loading/loading'
const WebBasic = () => {
 const [like,setLike]= useState(1);
 const [heart,setHeart]= useState(3);
 const [comment,setComment]= useState(2);
 const [course, setcourse]=useState([]);
 const [loading,isloading]=useState(false);
console.log(loading)
 console.log(course)
 useEffect(()=>{
   Courses();
 })
 const Courses = ()=>{
       const response= Data.WebBasic;
         setTimeout(() => {
           return setcourse(response), isloading(true);
         }, 1000);       
 }
  return (
    <div className="container-fluid lg:mx-24 mx-12 w-100">
      <div className="text-center my-12">
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
      <div className="row my-5 space-x-5 h-500   snap-mandatory scroll-smooth pt-6 pb-8 overflow-x-hidden webbasicCourses px-4">
        <div className="card grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-16 mx-auto ">
          {loading ? (
            course.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" space-x-2 md:space-x-4 border border-2 shadow-2xl   rounded-2xl cursor-pointer"
                >
                  <div className="bg-gray-100 py-4 rounded-2xl">
                    <Link href={`/webbasic/${item.slug}`} key={index}>
                      <div>
                        <Image
                          width={500}
                          height={200}
                          quality={100}
                          /* loader={Loader} */
                          src={item.img}
                          /*  layout="responsive" */
                          alt="Group"
                        />
                        <div className="px-3">
                          <h1 className="mt-3 mb-2 text-right flex flex-row-reverse text-right">
                            <span className="text-gray-500">{item.info}</span>
                            <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                              {item.name}:
                            </span>
                          </h1>
                          <h1 className="flex-row-reverse text-right">
                            <span className="text-gray-500">مدت </span>
                            <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                              :{item.time}
                            </span>
                          </h1>
                          <h1 className="mb-3 flex-row-reverse text-right">
                            <span className="text-gray-500">مدرس </span>
                            <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                              :{item.instructor}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </Link>
                    <div className="px-3 flex-row-reverse flex">
                      <div className="flex my-2 bg-slate-100 py-2 rounded-md px-3  transition-all">
                        <button className="text-gray-700 hover:text-gray-800 ">
                          {item.price}
                        </button>
                      </div>
                    </div>
                    <div className="px-3">
                      <div className="flex justify-around pb-2 pt-2  text-sm border-t border-r-0 border-l-0 my-2 py-1 text-center rounded-md">
                        <p className="text-center items-center flex">
                          <span className="px-2 py-0 rounded-full bg-green-500  text-sm mx-2">
                            {item.comment}
                          </span>
                          <span
                            className="text-gray-700 hover:text-gray-500 "
                            onClick={IncreasComment}
                          >
                            <MdAddComment
                              style={{ fontSize: 20 }}
                              className="mt-1"
                            />
                          </span>
                        </p>
                        <p className="text-center items-center flex">
                          <span className="px-2 py-0 rounded-full bg-red-500  mx-2 text-sm">
                            {item.heart}
                          </span>
                          <span
                            className="text-red-600 hover:text-red-400"
                            onClick={IncreaseHeart}
                          >
                            <FcLike
                              style={{ fontSize: 20 }}
                              className="mt-1 text-red-600"
                            />
                          </span>
                        </p>
                        <p className="text-center items-center flex">
                          <span className="px-2 py-0 rounded-full bg-blue-500  mx-2 text-sm">
                            {item.like}
                          </span>
                          <span
                            className="hover:text-blue-400 text-blue-600 transition-all"
                            onClick={() => {
                              item.like + 1;
                            }}
                          >
                            <AiFillLike
                              style={{ fontSize: 20 }}
                              className="mt-1"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
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
