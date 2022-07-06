import React from 'react';
import Image from 'next/image';
import profile from '../../public/profile/img.jpg';
import postImage from '../../public/Post/clean-code-image.png';
import logo from '../../public/logo/light.png';
import { useState } from 'react';
const PostDetailes = () => {
    const [dots, setDots] = useState(true);
    const [like, setLike] = useState(2);
    const [comment, setComment] = useState(4);
    const [heart, setHeart] = useState(4);
  return (
    <section className="mb-12">
      <article className="sm:grid sm:grid-cols-3 block md:px-12 sm:px-4 px-4 md:gap-x-8 sm:gap-x-4 mb-24 ">
        <div className="col-span-1   bg-gray sm:rounded-xl rounded-t-xl border pt-4 pb-4 pr-4">
          <div className="block ">
            <div className="flex ">
              <Image
                src={profile}
                width={80}
                height={30}
                className="rounded-full"
              />
              <div className="posttitle mt-5 pr-3">
                <h2 className="mt-3 text-lg text-textWave ">علی مهران</h2>
                <span className="text-[gray]">12 جون ۲۰۲۰</span>
              </div>
            </div>
            <div className="pr-4 mt-8 ">
              <h2>موضوع مقاله : </h2>
              <h2 className="pr-2">
                چی طور کود بنویسم که قابل قبول برای همه باشد؟{' '}
              </h2>
            </div>
            <div className="pr-4 mt-4 flex">
              <h2>نویسنده :</h2>
              <h2 className="">علی مهران</h2>
            </div>
            <div className="pr-4 mt-4 flex">
              <h2>مترجم :</h2>
              <h2 className="">حسین یاری </h2>
            </div>
            <div className="pr-4 mt-4 flex">
              <h2>تاریح نشر :</h2>
              <h2 className="">12 جون 2020</h2>
            </div>
            <div className="pr-4 mt-4 md:flex block">
              <h2>لینک رسمی :</h2>
              <a className="text-md hover:text-textWave" href="#">
                www.freecodeComp.com
              </a>
            </div>
            <div className="pr-4 mt-4 flex">
              <h2>خواند مقاله :</h2>
              <h2 className="">۱۰ دقیقه</h2>
            </div>
            <div className="text-center items-center pl-4 pt-4">
              <Image
                src={logo}
                width={150}
                height={150}
                className="mx-auto"
                alt="light"
              />
            </div>
            {/* <div className="flex justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-x text-textWave hover:opacity-75"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-three-dots text-textWave hover:opacity-75"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-span-2  border sm:rounded-xl rounded-b-xl rounded-t-none sm:h-[630px] sm:overflow-y-scroll bg-gray shadow-xl rounded-2xl p-4">
          <h2 className="px-4 py-5 text-2xl text-textWave">
            چی طور کود بنویسم که قابل قبول برای همه باشد:{' '}
          </h2>
          <h2 className="px-4 py-5 text-xl text-textWave">
            یگ برنامه نویس بد کدی مینویسه که فقط یگ کمپیوتر میتانه اونو درک کنه.
            اما یگ برنامه نویس خوب کود مینویسه که یگ انسان میتانه اونو متوجه
            بشه.
            <p className="flex justify-end text-sm">__ مارتین فاولر</p>
          </h2>
          <div className="mx-auto items-center text-center">
            <Image
              src={postImage}
              width={700}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="px-5 py-3">
            <h4>
              نوشتن کدهای تمیز، قابل فهم و قابل نگهداری مهارتی است که برای هر
              توسعه دهنده ای ضروری است که به آن مسلط شود.
            </h4>
            <h4 className="text-textWave text-xl my-2">
              چگونه متغیر های خود را نامگذاری کنیم؟
            </h4>
            <div>
              <p className="pr-4">
                در علوم کامپیوتر فقط دو چیز سخت وجود دارد: نامعتبر کردن حافظه
                پنهان و نامگذاری متغیر ها
              </p>
              <p
                className={`${
                  dots ? 'demo-2' : 'demo-1'
                } cursor-pointer pr-4 transition-all duration-500  text-md`}
                onClick={() => {
                  setDots(!dots);
                }}
              >
                پیدا کردن یک نام خوب ممکن است کمی طول بکشد، اما در آینده زمان
                بیشتری برای شما و تیمتان ذخیره می‌کند. و من مطمئن هستم که اکثر
                خوانندگان با موقعیتی مواجه شده اند که شما فقط چند ماه بعد از کد
                خود بازدید می کنید و درک آنچه قبلا انجام داده اید برایتان مشکل
                است.
                <h2 className="text-xl text-textWave my-2">
                  نحوه ایجاد نام های معنی دار
                </h2>
                <p>
                  از نظرات برای توضیح اینکه چرا از یک متغیر استفاده شده است
                  استفاده نکنید. اگر نامی نیاز به نظر دارد، باید زمان خود را صرف
                  تغییر نام آن متغیر به جای نوشتن نظر کنید.
                </p>
              </p>
            </div>
          </div>

          <div className="flex justify-evenly mt-5">
            <i>
              <div
                className="extends-btn hover:border rounded-md "
                onClick={() => {
                  setLike(like + 1);
                }}
              >
                <span className="b-text text-sm text-textWave" href="/">
                  پسندیدن
                  <span className="px-1 text-textWave">{like}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-hand-thumbs-up text-[blue] hover:opacity-80"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </div>
            </i>
            <i>
              <div
                className="extends-btn hover:border rounded-md "
                onClick={() => {
                  setComment(comment + 1);
                }}
              >
                <span className="b-text text-sm text-textWave" href="/">
                  نظر
                  <span className="px-1 text-textWave">{comment}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chat-dots text-textWave hover:opacity-80"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                </svg>
              </div>
            </i>
            <i>
              <div
                className="extends-btn hover:border rounded-md "
                onClick={() => {
                  setHeart(heart + 1);
                }}
              >
                <span className="b-text text-sm text-textWave" href="/">
                  علاقه
                  <span className="px-1 text-textWave">{heart}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-heart-fill text-[red] hover:opacity-80"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
            </i>
            <i>
              <div
                className="extends-btn hover:border rounded-md "
                onClick={IncreaseHeart}
              >
                <span className="b-text text-sm text-textWave" href="/">
                  اشتراک
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-share text-textWave hover:opacity-80"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </div>
            </i>
          </div>
        </div>
      </article>
    </section>
  );
    function IncreaseHeart() {
      setHeart(heart + 1);
    }
};

export default PostDetailes;
