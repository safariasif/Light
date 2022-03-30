import Skeleton from "react-loading-skeleton";
const Loading=()=>{
    return(
        Array(6).fill({}).map((index)=>{
            return (
              <div key={index} className="text-center p-5 border rounded-xl">
                <div className="flex justify-end">
                  <Skeleton
                    height={25}
                    width={100}
                    count={1}
                    className=""
                  />
                </div>
                <div>
                  <Skeleton circle={true} height={150} width={150} />
                </div>
                <div>
                  <Skeleton height={15} count={5} />
                </div>
              </div>
            );
        })
    )
}
export default Loading;