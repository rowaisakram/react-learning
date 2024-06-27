import { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const Signin = () => {
  const defaultValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("Please Enter your Email"),
    password: yup.string().required("Please Enter your Password"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="text-center">
          <h1>SignIn</h1>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
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

export default Signin;
