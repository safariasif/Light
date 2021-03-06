import { Formik, Form, useField, formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
const Input = ({...props}) => {
  const [field, meta] = useField(props);
  const [showEye, setShowEye] = useState(true);
  return (
    <div className="md:my-2">
      <label htmlFor={props.name} className=" text-white pr-5 font-bold">
        {props.label}
      </label>
      <div className="flex justify-between px-3 border rounded-full  bg-white">
        <input
          className={`${
            props.width
          } py-2 pl-4 px-3 outline-none mx-auto   shadow-2xl ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
          autoComplete="off"
          type={
            props.name != 'password' && props.name != 'repassword'
              ? 'text'
              : showEye
              ? 'password'
              : 'text'
          }
        />
        {props.icons ? (
          <div
            className="items-center flex"
            onClick={() => {
              setShowEye(!showEye);
            }}
          >
            {showEye ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill text-slate-700"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </div>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-red  pr-5">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
