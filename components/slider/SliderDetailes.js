import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/footer';
import Input from '../../pages/Regester/inputRegester';
import Image from 'next/image'
import {
  faAngleDown,
  faCheckCircle,
  faThumbsUp,
  faHeart,
  faComment,
  faAnglesUp,
  faStar,
  faMarker,
  faShoppingCart,
  faDownload,
  faCloudArrowDown,
  faDownLeftAndUpRightToCenter,
  faFileDownload,
  faVideoSlash,
  faEye,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import { mousePointer } from 'fontawesome';
const SliderDetails = (props) => {
  return (
    <div className='py-6'>
      <div className="border border-2 rounded-xl shadow-2xl  cursor-pointer bg-gray-100 md:mx-8 mx-2">
        <div className="rounded-xl bg-gray-100">
          <div>
            <div
              style={{ direction: 'ltr' }}
              className="star text-yellow-400 px-2 py-2"
            >
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: 17 }}
                className="hover:text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: 17 }}
                className="hover:text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: 17 }}
                className="hover:text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: 17 }}
                className="hover:text-yellow-500"
              />
            </div>
            <Image
              src={props.src}
              width={300}
              height ={180}
              className="hover:opacity-50  mx-auto transition-all"
            />
            <div className="px-3  text-right">
              <h1 className="mt-3 mb-2">
                <span className="text-red-500">{props.info}</span>
                <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                  {props.name}
                </span>
              </h1>
              <h1 className="">
                <span className="text-gray-500">?????? : </span>
                <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                  {props.time}
                </span>
              </h1>
              <h1 className="mb-3">
                <span className="text-gray-500">???????? : </span>
                <span className="text-blue-700 uppercase text-1xl font-bold font-mono  hover:text-blue-800">
                  {props.instructor}
                </span>
              </h1>
            </div>
          </div>
          <div className='mb-4 justify-center items-center  text-center align-items-center content-center'>
              <button className='px-8 py-2 rounded-lg bg-yellow-500 text-white'>...?????????? ????????????</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDetails;
