import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./_RoundedButton.scss";

const RoundedButton = ({ children, inverted, small, medium }) => {
  const rootClasses = classNames({
    fsc_RoundedButton: true,
    "fsc_RoundedButton--inverted": inverted,
    "fsc_RoundedButton--small": small,
    "fsc_RoundedButton--medium": medium
  });

  return <div className={rootClasses}>{children}</div>;
};

RoundedButton.propTypes = {
  children: PropTypes.element.isRequired,
  inverted: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default RoundedButton;
