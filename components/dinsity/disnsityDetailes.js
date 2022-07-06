
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const DensityItem = ({
  text,
  link,
  id,
  selected,
  setOpenDensity,
}) => {
  const clickHandler = () => {
      setOpenDensity(false);
  };
  const router = useRouter();
  return (
      <div
        className={`mx-3  flex  justify-between text-textWave hover:bg-bgWave hover:text-white rounded-md transition-all  `}
      onClick={clickHandler}
      >
        <div
          className={`flex  rounded-lg px-2 py-2  w-full ${
            selected ? 'bg-[#f6f7f8]' : ''
          } hover:cursor-pointer `}
        >
          <div className=" w-full rounded-md transition-all  text-right">
            {id == 1 ? (
              <Link href={'/' + link}>
                <p className="font-bold text-lg py-1 pr-2">{text}</p>
              </Link>
            ) : (
              <p className="font-bold text-lg py-1 pr-2">{text}</p>
            )}
          </div>
        </div>
        <div className="w-16 flex justify-center items-center  rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-check-all border rounded-full"
              viewBox="0 0 16 16"
            >
              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>
          </span>
        </div>
      </div>
  );
};

export default DensityItem;
