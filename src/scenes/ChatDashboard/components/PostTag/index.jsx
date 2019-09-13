import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./_PostTag.scss";

const PostTag = ({ text, icon, status = "info" }) => {
  const rootClassName = classNames({
    fsc_PostTag: true,
    fsc_PostTag__bgRed: status === "danger",
    fsc_PostTag__bgBlue: status === "info"
  });

  const textClassName = classNames({
    fsc_PostTag__text: true,
    "fsc_PostTag__text--blue": status === "info",
    "fsc_PostTag__text--red": status === "danger"
  });

  return (
    <div className={rootClassName}>
      <img className="fsc_PostTag__image" src={icon} />
      <h6 className={textClassName}>{text}</h6>
    </div>
  );
};

PostTag.propTypes = {
  status: PropTypes.oneOf(["info", "danger"]).isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};

export default PostTag;
