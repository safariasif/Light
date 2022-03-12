const Login=()=>{
    return(
        <div className="container">
            <div className="row">
                <form action="">
                        <div className="email-box">
                            <input className="email" type='email'></input>
                            <label className="w-4/12 bg-red-500">ایمیل</label>
                        </div>
                        <div className="password-box">
                            <input className="password" type='password'></input>
                            <label  className="w-4/12 bg-red-500">رمز عبور</label>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Login