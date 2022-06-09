import { setIn } from 'formik';
import React from 'react'
import { useState } from 'react';

import { accordaintData } from '../../constant/data';
import  AccordaintUi  from './accordaintUi';

const Accordaint = () => {
    const [index, setIndex] = useState(false);
  return (
      <div className='my-8'>
          <div><h2 className='text-center md:text-5xl sm:text-2xl text-xl text-textWave py-4'>آیا سوالی دارید؟</h2></div>
          {accordaintData.map((item) => {
              return (
                  <AccordaintUi key={item.id} id={item.id} title={item.qestion} answer={item.answer} index={index} setIndex={ setIndex} />
              );
      })}
    </div>
  )
}

export default Accordaint;
