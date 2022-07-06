import dynamic from 'next/dynamic';
 import { DensityData } from '../../constant/data'

const DensityItem = dynamic(() => import('./disnsityDetailes'));

const Density = ({ setOpenDensity }) => {
    const DensityLenght = DensityData.length;
  return (
    <div
      className={`py-2 ${
        DensityLenght > 6 ? 'sm:w-[300px]' : 'sm:w-[300px]'
      } mt-6  bg-white z-50 border border-gray-200 shadow-md absolute rounded-2xl sm_smobile:right-0 sm:left-0`}
    >
      <div>
        {DensityData.map((d, i) => (
          <DensityItem
                text={d.text}
            link={d.link}
            id={d.id}
            index={i}
            key={i}
            setOpenDensity={setOpenDensity}
            DensityLenght={DensityLenght}
          />
        ))}
      </div>
    </div>
  );
};

export default Density;
