
import Meta from "../../components/Meta/Meta";
import Navbar from '../../components/Navbar/navbar'
import SubFooter from "../../components/Footer/subfooter";
import * as Yup from 'Yup';
import {  useFormik} from 'formik';
import Input from "../../components/input/index";
import SuggestBox from "./suggestBox";
const Suggest = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'نام تان حداکثر ۱۵ کاراکتذ باشد').required("پر کردن فیلد نام الزامی میباشد"),
      email: Yup.string().email('فرمت ایمیل تان درست نمیباشد').required("پر کردن فیلد ایمیل الزامی میباشد"),
      message: Yup.string().min(12, 'پیام تان حداقل ۱۲ کاراکتر باشد').required("پر کردن فیلد پیام الزامی میباشد"),
    }),
    onSubmit: () => {
    },
  });
    return (
      <div>
        <Meta title={'نظریات / پشنهادات'} />
        <Navbar />
        <div className="sm:pt-36 pt-24 md:px-6 sm:px-6 sm:grid sm:grid-cols-2 grid-cols-1 px-3 md:gap-x-8 sm:gap-x-4">
          <div>
            <div>
              <h2 className="text-center pb-4 text-4xl text-textWave">
                نظریات و پشنهادات
              </h2>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              method="Post"
              className="bg-transparent border rounded-3xl shadow-xl p-2"
            >
              <div className="items-center  mx-auto ">
                <Input
                  name={'name'}
                  label={'نام / تخلص '}
                  placeholder={'نام / تخلص'}
                  type={'text'}
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  formikError={
                    formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : null
                  }
                ></Input>
                <Input
                  name={'email'}
                  label={' ایمیل)'}
                  placeholder={'ایمیل'}
                  type={'email'}
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  formikError={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null
                  }
                ></Input>
                <div>
                  <textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.message}
                    placeholder="نظریه و پشنهاد تان را اینجا بنویسید"
                    className="w-full outline-none border rounded-xl px-2 py-2"
                    rows={3}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p className="text-red pr-2">{formik.errors.message}</p>
                  ) : null}
                </div>
                <div className="items-center flex  mx-auto text-center ">
                  <button className=" text-white text-2xl rounded-md w-full py-2 my-2 bg-bgWave">
                    ارسال
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="block   sm:my-0 my-8">
            <div className="pt-10 h-[430px] overflow-y-scroll rounded">
              <SuggestBox />
              <SuggestBox />
              <SuggestBox />
            </div>
          </div>
        </div>
        <SubFooter
          title="خوشحالیم که پشنهاد تان را میشنویم"
          reserved="All Right Reserved"
        />
      </div>
    );
}

export default Suggest;