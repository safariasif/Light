import NavLink from 'next/link'
const Navbar=()=>{
    const navbar=['خانه' ,'دوره های آموزشی' ,'جدیدترین دوره ها' ,'پست ها' ,'کانال تلگرام' ,'پشنهاد' ,'درباره ما']
    return(
        <div>
            <div className="container-fluid m-0 p-0 navigation-bar">
                <div className="m-0 p-0 row flex justify-between  rounded py-4 px-4 text-center">
                    <div className="col-4  m-0 p-0">
                        <button className='regester btn rounded text-blue-800 font-bold px-5 py-2'>ثبت نام / ورورد</button>
                    </div>
                    <div className="col-lg-8 m-0 p-0 lg:block hidden">
                        <ul className='flex'>
                            {
                                navbar.reverse().map((ele,index)=>{
                                   return(
                                    <li  className='nav-item px-4 py-2 rounded'>
                                        <NavLink to='/' href='/' key={index}>{ele}</NavLink>
                                    </li>
                                   )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;