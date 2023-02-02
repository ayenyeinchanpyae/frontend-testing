import React, { memo } from "react";
import PropTypes from "prop-types";

function Label(props) {
  const { text, hint, required, customStyle } = props;
  return (
    <label htmlFor={text}>
      <p
        className={
          customStyle ? `mb-2 p2-bold-16 ${customStyle}` : "mb-2 p2-bold-16"
        }
      >
        {text} <span className="negative">{required}</span>
      </p>
      {hint && (
        <p className="mb-2 mt-[-0.5rem] p4-regular-12 description">{hint}</p>
      )}
    </label>
  );
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  hint: PropTypes.string,
  required: PropTypes.string,
  // props: PropTypes.shape({
  //   customStyle: propTypes.string,
  // }),
  customStyle: PropTypes.string,
};

Label.defaultProps = {
  hint: null,
  required: "",
  customStyle: "",
};

export default memo(Label);
