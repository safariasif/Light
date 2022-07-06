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
const [like,setLike]= useState(12);
  const [heart, setHeart] = useState(20);
 const [comment,setComment]= useState(4);
 const [course, setcourse]=useState(Data.WebBasic);
 const [loading,isloading]=useState(false);
 const [showComment, setShowComment] = useState(true);
 useEffect(()=>{
   Courses();
 })
 const Courses = ()=>{
         setTimeout(() => {
           return isloading(true);
         }, 1000);       
 }
  return (
    <section className="">
      <div className="container-fluid lg:mx-24 sm_mmobile:mx-12 sm_smobile:mx-4 ">
        <div className="text-center mt-16 mb-12">
          <h1 className="mx-6 mt-6 mb-10 text-bold text-4xl text-textWave">
            دوره های ابتدایی طراحی وب
          </h1>
          <span className=" text-textWave text-lg">
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
                    <div className="bg-gray-100 pb-4 rounded-2xl relative">
                      <Link href={`/WebBasic/${item.slug}`} key={index}>
                        <div>
                          <Image
                            width={500}
                            height={300}
                            quality={100}
                            src={item.img}
                            alt="Group"
                            className="rounded-xl"
                          />
                          <div className="px-3">
                            <h1 className="mt-3 mb-2 text-right flex flex-row-reverse text-right">
                              <span className="text-textWave">{item.info}</span>
                              <span className="text-textWave uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                                {item.name}:
                              </span>
                            </h1>
                            <h1 className="flex-row-reverse text-right">
                              <span className="text-textWave">مدت </span>
                              <span className="text-textWave uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                                :{item.time}
                              </span>
                            </h1>
                            <h1 className="mb-3 flex-row-reverse text-right">
                              <span className="text-textWave">مدرس </span>
                              <span className="text-textWave uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                                :{item.instructor}
                              </span>
                            </h1>
                          </div>
                        </div>
                      </Link>
                      <div className="px-3 flex-row-reverse">
                        <Link href={`/WebBasic/${item.slug}`} key={index}>
                          <div className="flex  w-full hover:opacity-80  justify-end pb-1 rounded-md px-3  transition-all">
                            <button className=" text-textWave ">
                              {item.price}
                            </button>
                          </div>
                        </Link>
                        <div className="card-footer  border-t  block">
                          <p className="text-center pt-2 text-[#444]">12 June 2022 : ثبت شده</p>
                        </div>
                      </div>
                      {/* <div className="px-3">
                        <div className="flex justify-around pb-2 pt-2  text-sm border-t border-r-0 border-l-0 my-2 py-1 text-center rounded-md">
                          <p className="text-center items-center flex">
                            <span className="px-2 py-0 rounded-full bg-green-500 text-textWave text-sm mx-2">
                              {comment}
                            </span>
                            <span
                              className="text-textWave "
                              onClick={() => IncreasComment(item.id)}
                            >
                              <MdAddComment
                                style={{ fontSize: 20 }}
                                className="mt-1"
                              />
                            </span>
                          </p>
                          <p className="text-center items-center flex">
                            <span className="px-2 py-0 rounded-full bg-red-500 text-textWave mx-2 text-sm">
                              {heart}
                            </span>
                            <span
                              className="text-textWave"
                              onClick={IncreaseHeart}
                            >
                              <FcLike
                                style={{ fontSize: 20 }}
                                className="mt-1 text-textWave"
                              />
                            </span>
                          </p>
                          <p className="text-center items-center flex">
                            <span className="px-2 py-0 rounded-full bg-blue-500 text-textWave  mx-2 text-sm">
                              {like}
                            </span>
                            <span
                              className="hover:text-blue-400 text-textWave transition-all"
                              onClick={() => IncreaseLike}
                            >
                              <AiFillLike
                                style={{ fontSize: 20 }}
                                className="mt-1"
                              />
                            </span>
                          </p>
                        </div>
                      </div> */}
                      {/* <div
                        className={`absolute bg-white border-t  py-2 bottom-20 w-full px-4 rounded-2xl text-right ${
                          showComment ? 'hidden' : ''
                        }`}
                      >
                        <div className="flex justify-between px-2 items-center pb-1">
                          <svg
                            onClick={() => setShowComment(!showComment)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-circle hover:bg-bgWave hover:text-white rounded-full transition-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                          <h2>نظر</h2>
                        </div>
                        <textarea
                          className="px-3 py-2 outline-none rounded-md text-right text-sm border w-full"
                          placeholder="نظریه تان را بنویسید"
                        ></textarea>
                        <button
                          onClick={SubmitComment}
                          className="bg-bgWave text-white text-sm px-2 py-1 hover:bg-opacity-80 rounded"
                        >
                          ارسال
                        </button>
                      </div> */}
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
    </section>
  );
 function IncreaseLike(){
      setLike(like+1);
 }
 function IncreaseHeart(){
      setHeart(heart+1);
 }
  function IncreasComment(id) {
    setShowComment(!showComment);
    
  }
  function SubmitComment() {
    setShowComment(!showComment);
    setComment(comment + 1);
  }
};

export default WebBasic;
