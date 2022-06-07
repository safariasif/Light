import Meta from "../../components/Meta/Meta";
import Input from '../Regester/inputRegester'; 
const Payement =()=>{
return (
  <div>
    <Meta title={'پرداختی'} />
    <div className="grid grid-cols-2 space-x-12 px-24 my-8">
      <div className=" pl-12">
        <div>
          <Input
            name={'Payement'}
            label={' نمبر حساب بانکی تان'}
            placeholder={'نمبر حساب'}
            type={'number'}
          />
          <Input
            name={'Payement'}
            label={' اسم تان '}
            placeholder={'  اختیاری '}
            type={'text'}
          />
          <Input
            name={'Payement'}
            label={' مبلغ پرداختی '}
            placeholder={'چقدر میخایی بپردازی'}
            type={'text'}
          />
        </div>
      </div>
      <div className="">
        <div>
          <Input
            name={'Payement'}
            label={' مبلغ پرداختی ؟  (به افغانی)'}
            placeholder={'چی قدر میخواهی بپردازی ؟'}
            type={'text'}
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default  Payement