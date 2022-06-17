import dynamic from 'next/dynamic';
 import { DensityData } from '../../constant/data'

const DensityItem = dynamic(() => import('./disnsityDetailes'));

const Density = ({ setOpenDensity }) => {
    const DensityLenght = DensityData.length;
  return (
    <div
      className={`py-2 ${
        DensityLenght > 6 ? 'sm:w-[280px]' : 'sm:w-[280px]'
      } mt-6  bg-white z-50 border border-gray-200 shadow-md absolute rounded-2xl sm_smobile:-right-14 sm:left-0`}
    >
      <div>
        {DensityData.map((d, i) => (
          <DensityItem
                text={d.text}
                link={d.link}
            index={i}
            key={i}
            /* setSelectedDensity={setSelectedDensity} */
            setOpenDensity={setOpenDensity}
            DensityLenght={DensityLenght}
            /* selected={selectedDensity === i} */
          />
        ))}
      </div>
    </div>
  );
};

export default Density;
