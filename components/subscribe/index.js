export const Subscribe = () => {
    return (
      <div className="py-12">
        <p className="text-center text-4xl  font-bold">
          چراغ را سبسکرایب نمایید تا از تازه ترین آموزش ها مستفید شوید
        </p>
        <form className="flex items-center justify-center pt-12 ">
          <input
            type="email"
            className="sm_smobile:w-2/3 lg:w-2/4 md:h-20 appearance-none shadow-2xl border-2 border-b-gray-700 rounded-r-2xl  py-3 px-3 leading-normal focus:outline-none focus:shadow-outline"
            placeholder="ایمیل تان را وارد کنید ....."
          />
          <button className="bg-bgWave sm_smobile:text-xs sm:text-lg shadow-2xl hover:bg-bgWave text-white sm:font-bold  sm:py-3 md:h-20 leading-normal sm:px-10 rounded-l-2xl -ml-10">
            SUBSCRIBE / سبسکرایب 
          </button>
        </form>
      </div>
    );
}