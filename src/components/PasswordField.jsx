import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function PasswordField({
  type,
  name,
  placeholder,
  className,
  autoComplete,
  formik,
  disabled,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Field
        type={showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
        disabled={disabled}
      />

      <div className="absolute right-[10px] top-[10px]">
        {type === "password" && String(formik.values[name]).length > 0 && (
          <p className="mb-0 text-small text-gray">
            <i
              className={`${
                showPassword ? "far fa-eye" : "far fa-eye-slash"
              } mr-2 cursor-pointer outline-none`}
              onKeyDown={() => setShowPassword((pre) => !pre)}
              onClick={() => setShowPassword((pre) => !pre)}
              tabIndex={-1}
              role="presentation"
            />
          </p>
        )}
      </div>
    </div>
  );
}

PasswordField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  formik: PropTypes.instanceOf(Object).isRequired,
  disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
  placeholder: "",
  disabled: false,
};

export default memo(PasswordField);
