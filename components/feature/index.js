import Image from 'next/image';
import lightImage from '../../public/features.jpg';
import { Loader } from 'next/dynamic';
const Features = () => {
  return (
    <section className="bg-[#F8F9F9]  w-100 rounded-b-[70px]  pt-6 pb-16 mt-12">
      <article className="grid md:grid-cols-2 items-center md:px-6 sm_mmobile:px-12 px-4">
        <div className=" block items-center">
          <div className="text-center items-center pt-3">
            <Image
              width={70}
               height ={50 }
              loader={Loader}
              src={lightImage}
              layout="responsive"
              alt="Group"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className=" md:px-12 px-0 text-center w-full">
          <h2 className="lg:text-4xl text-3xl  font-bold text-center lg:pb-10 pb-5 text-textWave tracking-widest">
           .ویژه گی ها چراغ
          </h2>
          <div className="md:pb-0 mb-8">
            <span className="text-textWave md:text-lg text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشر
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Features;
