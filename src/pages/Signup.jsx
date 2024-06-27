import { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const Signup = () => {
  const defaultValue = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    checkbox: false,
  };
  const validationSchema = yup.object().shape({
    fname: yup.string().required("Please Enter your First Name"),
    lname: yup.string().required("Please Enter your Last Name"),
    email: yup.string().required("Please Enter your Email").email(),
    password: yup
      .string()
      .required("Please Enter your Password")
      .min(6)
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    cnfmpassword: yup
      .string()
      .required("Please Enter password to confirm")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    checkbox: yup.boolean().oneOf([true], "Please accept terms & conditions"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="text-center">
          <h1>SignUp</h1>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-1 block text-sm font-medium leading-6 text-gray-900">
                <Field
                  type="text"
                  name="fname"
                  placeholder="Enter your First name"
                  className="w-1/2 columns-12 rounded border"
                />
                <p className="text-red-900">
                  <ErrorMessage name="fname" />
                </p>
              </div>
              <div className="mb-1 block text-sm font-medium leading-6 text-gray-900">
                <Field
                  type="text"
                  name="lname"
                  placeholder="Enter your Last Name"
                  className="w-1/2 columns-12 rounded border"
                />
                <p className="text-red-900">
                  <ErrorMessage name="lname" />
                </p>
              </div>
              <div className="mb-1 block text-sm font-medium leading-6 text-gray-900">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-1/2 columns-12 rounded border"
                />
                <p className="text-red-900">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="mb-1 block text-sm font-medium leading-6 text-gray-900">
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className="w-1/2 columns-12 rounded border"
                />
                <p className="text-red-900">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="mb-1 block text-sm font-medium leading-6 text-gray-900">
                <Field
                  type="text"
                  name="cnfmpassword"
                  placeholder="Enter your password again"
                  className="w-1/2 columns-12 rounded border"
                />
                <p className="text-red-900">
                  <ErrorMessage name="cnfmpassword" />
                </p>
              </div>
              <div className="mb-1 text-sm font-medium leading-6 text-gray-900">
                <label className="mt-px flex cursor-pointer select-none justify-center font-light text-gray-700">
                  <Field type="checkbox" name="checkbox"></Field>
                  <p className="font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    I agree the
                    <a
                      className="font-semibold transition-colors hover:text-pink-500"
                      href="#"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </label>
                <p className="text-red-900">
                  <ErrorMessage name="checkbox" />
                </p>
              </div>
              <button
                class="middle none center rounded-lg bg-pink-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
