import Image from 'next/image';
import lightImage from '../../public/WhyLight/whylight.jpg';
import { Loader } from 'next/dynamic';
const WhyLight = () => {
  return (
    <section className="bg-gray rounded-t-3xl  p-6 mt-12 mb-0">
      <article className="lg:grid lg:grid-cols-2 grid grid-cols-1 mx-auto w-full justify-center  md:mb-16 container md:px-16 px-0">
        <div className=" md:px-12 px-0 text-center  w-full">
          <h2 className="text-5xl font-bold text-center py-8 text-gray-800">
            چرا چراغ ؟
          </h2>
          {/*  <h2 className="text-10xl z-0 opacity-25 ">L</h2> */}
          <span className="text-gray-700 md:text-lg text-sm ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد.مان
            مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد.
          </span>
        </div>
        <div className="">
          <div className="text-center items-center md:pt-36 pt-3">
            <Image
              width={200}
              height={120}
              loader={Loader}
              src={lightImage}
              layout="responsive"
              alt="Group"
              className="rounded-2xl"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhyLight;
