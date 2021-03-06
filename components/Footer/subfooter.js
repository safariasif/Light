import Image from 'next/image';
import logo from '../../public/logo/light1.png';
import logo1 from '../../public/logo/light.png';
const SubFooter = ({title , reserved ,bgColor}) => {
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={`${bgColor ? 'white' : '#1E3D59'}`}
            fillOpacity="1"
            d="M0,64L15,64C30,64,60,64,90,96C120,128,150,192,180,202.7C210,213,240,171,270,160C300,149,330,171,360,170.7C390,171,420,149,450,122.7C480,96,510,64,540,85.3C570,107,600,181,630,186.7C660,192,690,128,720,112C750,96,780,128,810,154.7C840,181,870,203,900,192C930,181,960,139,990,122.7C1020,107,1050,117,1080,128C1110,139,1140,149,1170,133.3C1200,117,1230,75,1260,74.7C1290,75,1320,117,1350,128C1380,139,1410,117,1425,106.7L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <h1
          className={`text-center md:text-2xl text-md sm:-mt-10 pb-4 ${
            bgColor ? 'bg-white text-textWave' : 'text-white bg-bgWave'
          }`}
        >
          <div className=" items-center flex  text-center justify-center ">
            <h2>{title}</h2>
            <div>
              <Image
                src={bgColor ? logo1 : logo}
                width={70}
                height={70}
                alt="light"
              />
            </div>
          </div>
          <h1 className="text-center text-sm font-bold ">{reserved}</h1>
        </h1>
      </div>
    </div>
  );
};

export default SubFooter;
