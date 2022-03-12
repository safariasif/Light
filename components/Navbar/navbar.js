import Link from 'next/Link'
const Navbar=()=>{
    return (
      <div>
        <div className="container-fluid m-0 p-0 navigation-bar">
          <div className="m-0 p-0 row flex justify-between  rounded py-4 px-4 text-center">
            <div className="col-4  m-0 p-0">
              <button className="regester btn rounded text-blue-800 font-bold px-5 py-2">
                ثبت نام / ورورد
              </button>
            </div>
            <div className="col-lg-8 m-0 p-0 lg:block hidden">
              <ul className="flex">
                <li className="items">
                  <Link href="/about">
                    <a>درباره ما</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/suggest">
                    <a>پشنهادات</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/telegram">
                    <a>کانال تلگرام</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/posts">
                    <a>پست ها</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/new">
                    <a>جدید ترن ها</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/Course">
                    <a>دوره های آموزشی</a>
                  </Link>
                </li>
                <li className="items">
                  <Link href="/">
                    <a>خانه</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;