import PropTypes from "prop-types";
import React from "react";

import "./_RoundedButton.scss";

const RoundedButton = ({ children }) => {
  return <div className="fsc_RoundedButton">{children}</div>;
};

RoundedButton.propTypes = {
  children: PropTypes.element.isRequired
};

export default RoundedButton;
