import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ConnectedFocusError } from "focus-formik-error";
import * as Yup from "yup";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { GoogleOAuthProvider } from "@react-oauth/google";
//import callService from "../../contexts/function/callService";
//import { UPDATE_LOADING } from "../../redux/types";
import Label from "../../components/Label";
import Submit from "../../components/Submit";
//import PhoneNumber from "../../components/PhoneNumber";
import PasswordField from "../../components/PasswordField";
import CheckIcon from "../../components/CheckIcon";
import SuccesscheckIcon from "../../components/SuccesscheckIcon";
//import LoginLinkedin from "../../components/LoginLinkedin";
//import LoginGoogle from "../../components/LoginGoogle";
import ErrorServer from "../../components/ErrorServer";

function Register() {
  //const dispatch = useDispatch();
  //const router = useRouter();
  const [errorServer, setErrorServer] = useState("");

  const initialValues = {
    userID: "",
    password: "",
    confirmPassword: "",
    //acceptPDPA: false,
  };
  // validate form
  const validationSchema = Yup.object({
    userID: Yup.string().required("userID  is required."),
    password: Yup.string().required("Password is required."),
    confirmPassword: Yup.string().required("Password is required."),
    //   .min(8, "Password must be at least 8 characters.")
    //   .max(32, "Password should not exceed 32 characters")
    //   .matches(/(?=.*?[A-Z])/, "One uppercase character")
    //   .matches(/(?=.*?[a-z])/, "One lowercase character")
    //   .matches(/(?=.*?[0-9])/, "One number.")
    //   .matches(/[^A-Za-z0-9]/, "One special character ")
    //   .matches(
    //     /^[~`!@#$%^&*()_+=[\]\\{}|;':",.<>?a-zA-Z0-9-]+$/,
    //     "Password must be english letter"
    //   ),
    //acceptPDPA: Yup.bool().oneOf([true], "Please agree before registering."),
  });

  // function render icon check validate password
  //   const renderCheckValidatePassword = (values, validate) => {
  //     const regexMinMax = /^.{8,32}$/g;
  //     const regexDigit = /(?=.*?[0-9])/g;
  //     const regexUpper = /(?=.*?[A-Z])/g;
  //     const regexLower = /(?=.*?[a-z])/g;
  //     const regexSpecialCharacter = /[^A-Za-z0-9]/g;
  //     // check password not blank
  //     if (validate === "One number" && regexDigit.test(values)) {
  //       return <SuccesscheckIcon />;
  //     }
  //     // check min-max
  //     if (validate === "8-32 characters" && regexMinMax.test(values)) {
  //       return <SuccesscheckIcon />;
  //     }
  //     // check at least one uppercase
  //     if (validate === "One uppercase character" && regexUpper.test(values)) {
  //       return <SuccesscheckIcon />;
  //     }
  //     // check at least one lowercase
  //     if (validate === "One lowercase character" && regexLower.test(values)) {
  //       return <SuccesscheckIcon />;
  //     }
  //     // check one special characters
  //     if (
  //       validate === "One special character" &&
  //       regexSpecialCharacter.test(values)
  //     ) {
  //       return <SuccesscheckIcon />;
  //     }
  //     return <CheckIcon />;
  //   };

  const onSubmit = async (data) => {
    console.log("data", data);
    // dispatch({ type: UPDATE_LOADING, loading: true });
    // const response = await callService(
    //   "POST",
    //   `${process.env.domainAPI}/auth/signup/`,
    //   data
    // );
    // if (response.status === 200) {
    //   router.push("/authen/registerCompleted");
    // } else {
    //   setErrorServer(response.message);
    // }
    // dispatch({ type: UPDATE_LOADING, loading: false });
  };
  return (
    <div className="py-[4em]">
      <div className="relative max-w-[500px] mx-auto bg-white p-4 rounded-[5px] lgmx:max-w-full lgmx:w-[90%] lgmx:py-4 lgmx:px-8">
        <div className="w-full p-5">
          <div className="max-w-md">
            <h4 className="text-center">Welcome to MyApp</h4>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="relative p-15">
              <ConnectedFocusError />

              <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <Label text="User ID" required="*" />
                </div>

                <div className="col-span-3">
                  <Field
                    type="text"
                    name="userID"
                    placeholder="User ID"
                    className={`input-field ${
                      formik.errors.userID && formik.touched.userID
                        ? "error-border"
                        : ""
                    }`}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="validate-show grid grid-cols-4">
                <div class="col-end-4 col-span-2">
                  <ErrorMessage
                    name="userID"
                    component="div"
                    className="negative"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <Label text="Password" required="*" />
                </div>
                <div className="col-span-3">
                  <PasswordField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`input-field ${
                      formik.errors.password && formik.touched.password
                        ? "error-border"
                        : ""
                    }`}
                    autoComplete="off"
                    formik={formik}
                  />
                </div>
              </div>
              <div className="validate-show grid grid-cols-4">
                <div class="col-end-4 col-span-2">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="negative"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <Label text="Confirm Password" required="*" />
                </div>
                <div className="col-span-3">
                  <PasswordField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`input-field ${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "error-border"
                        : ""
                    }`}
                    autoComplete="off"
                    formik={formik}
                  />
                </div>
              </div>
              <div className="validate-show grid grid-cols-4">
                <div className="col-end-4 col-span-2">
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="negative"
                  />
                </div>
              </div>

              <div className="text-center">
                <Submit styleBtn="primary-btn" text="Register" />
              </div>
              <ErrorServer msg={errorServer} />
              <div className="flex items-center justify-center space-x-3">
                <div className="w-full h-[1px] bg-[#adaaaa]" />
                <p className="p2-bold-16">or</p>
                <div className="w-full h-[1px] bg-[#a9a5a5]" />
              </div>

              <div className="text-center p3-regular-14 pt-2 mb-4 mt-7">
                Already have an account?
                <Link to="/login">
                  <span className="ml-1 info underline cursor-pointer">
                    Log In
                  </span>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
