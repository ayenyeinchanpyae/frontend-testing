import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ConnectedFocusError } from "focus-formik-error";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Label from "../../components/Label";
import Submit from "../../components/Submit";
import PasswordField from "../../components/PasswordField";
import CheckIcon from "../../components/CheckIcon";
import SuccesscheckIcon from "../../components/SuccesscheckIcon";
import ErrorServer from "../../components/ErrorServer";
import { useNavigate, useParams, useLocation } from "react-router-dom";
function Login() {
  //const dispatch = useDispatch();
  const [errorServer, setErrorServer] = useState("");
  const [rememberData, setRememberData] = useState({});

  useEffect(() => {
    setRememberData({
      rememberUserID: Cookies.get("userID"),
      rememberPassword: Cookies.get("password"),
      isRememberme: Cookies.get("rememberme"),
    });
  }, []);

  const initialValues = {
    userID: rememberData?.rememberUserID || "",
    password: rememberData?.rememberPassword || "",
    rememberme: rememberData?.isRememberme || false,
  };
  // validate form
  const validationSchema = Yup.object({
    userID: Yup.string().required("userID  is required."),
    password: Yup.string().required("Password is required."),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
  };
  return (
    <div className="pt-12 h-[80vh] align-middle">
      <div className="relative  max-w-[500px] mx-auto bg-white px-16 py-4 rounded-[5px] lgmx:max-w-full lgmx:w-[90%] lgmx:py-4 lgmx:px-8">
        <div className="w-full p-4">
          <div className="max-w-md">
            <h4 className="text-center">Welcome to .....</h4>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="relative ">
              <ConnectedFocusError />

              <Label text="User Name" required="*" />

              <Field
                type="text"
                name="userID"
                placeholder="User Name"
                className={`input-field ${
                  formik.errors.userID && formik.touched.userID
                    ? "error-border"
                    : ""
                }`}
                autoComplete="off"
              />

              <div className="validate-show grid grid-cols-4">
                <div class="col-end-4 col-span-2">
                  <ErrorMessage
                    name="userID"
                    component="div"
                    className="negative"
                  />
                </div>
              </div>

              <Label text="Password" required="*" />

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

              <div className="validate-show grid grid-cols-4">
                <div class="col-end-4 col-span-2">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="negative"
                  />
                </div>
              </div>

              <div className="col-end-4 col-span-2">
                <Field type="checkbox" name="rememberme" className="mr-3" />
                <div
                  className="inline-block cursor-pointer "
                  role="button"
                  onClick={() =>
                    formik.setFieldValue(
                      "rememberme",
                      !formik.values.rememberme
                    )
                  }
                  onKeyDown={() =>
                    formik.setFieldValue(
                      "rememberme",
                      !formik.values.rememberme
                    )
                  }
                  tabIndex={-1}
                >
                  <p className="inline p3-regular-14">Remember me</p>
                </div>
              </div>
              <div className="text-center">
                <Submit styleBtn="primary-btn" text="Login" />
              </div>
              <ErrorServer msg={errorServer} />

              {/* <div className="text-center p3-regular-14 pt-2 mb-4 mt-7">
                No account?
                <Link to="/register">
                  <span className="ml-1 info underline cursor-pointer">
                    Register here
                  </span>
                </Link>
              </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
