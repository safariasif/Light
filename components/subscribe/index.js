export const Subscribe = () => {
    return (
      <div className="py-12 sm:px-12 px-4 w-full">
        <p className="text-center md:text-4xl text-3xl text-textWave   font-bold">
          چراغ را سبسکرایب نمایید تا از تازه ترین آموزش ها مستفید شوید
        </p>
        <form className="flex items-center justify-center  pt-12  w-full md:px-16 px-2">
          <div className="sm:flex block rounded-2xl w-full sm:border border-0 shadow-2xl">
            <div className="sm:w-8/12  rounded-2xl sm:pb-0 pb-4">
              <input
                type="email"
                className=" w-full sm:py-4 py-3  text-lg flex items-center rounded-2xl sm:rounded-l-none px-4 outline-none border sm:bottom-0"
                placeholder="ایمیل تان را وارد کنید ....."
              />
            </div>
            <div className="sm:w-4/12 bg-bgWave flex justify-center rounded-2xl sm:rounded-r-none">
              <button className="bg-bgWave sm:py-4 py-3 flex items-center  md:text-lg text-sm text-white">
                SUBSCRIBE / سبسکرایب
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}