import Image from "next/image";
const NewCoursesDitailes = ({ data }) => {
  return (
    <>
      <div className="border-l mb-12 border-[#1E3D59] border-opacity-60 space-x-6 mx-5 rounded-l-3xl">
        <div className="flex justify-center px-3 py-3">
          <Image
            className="rounded-t-2xl rounded-b-md"
            src={data.img}
            width={320}
            height={200}
          />
        </div>
        <div className="text-right pr-5 pt-3">
          <h3> {data.name}: دوره آموزشی </h3>
          <h3> مدرس دوره : {data.instructor} </h3>
          <h3> {data.time}: مدت </h3>
          <div className="my-2 flex flex-row-reverse justify-around items-center py-2 rounded-lg bg-bgWave text-white ">
            <span className="border-b "> : قیمت </span>
            <button className="px-12 border-b shadow-sm transition-all hover:text-gray-300 rounded-full shadow-lg hover:-translate-x hover:scale-105 transition duration-500 ease-in-out focus:outline-none shadow-white  rounded-lg ">
              {' '}
              {data.price}{' '}
            </button>
          </div>
        </div>
        <divc className="border-t">
          <p className="text-center text-sm text-[#444]">
            تاریخ منتشر شده : ۱۲ آگوست ۲۰۲۲
          </p>
        </divc>
      </div>
    </>
  );
};

export default NewCoursesDitailes;