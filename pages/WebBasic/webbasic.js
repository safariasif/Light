const WebBasic =(props)=>{
    return (
      <div className="container">
        <div className="row md:mx-5 md:my-5 my-3">
          <div className="card grid lg:grid-cols-4  lg:gap-4 sm:grid-cols-2 sm:gap-3  gap-3">
            {props.subject.map((item, index) => {
              return (
                <div className=" space-x-2 md:space-x-4 border border-2 text-center px-4 py-8 rounded-lg">
                  <h3 className="font-bold text-2xl text-blue-800 py-2">
                    {item.name}
                  </h3>
                  <h1>
                    <span>{item.name}</span>
                    <span>آموزش</span>{" "}
                  </h1>
                  <p>
                    <span>مدرس:</span>
                    <span className="px-3">{item.instructor}</span>
                  </p>
                  <p>
                    <span>مدت:</span>
                    <span>{item.deuration}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default WebBasic;