import PropTypes from "prop-types";
import React from "react";
import "../../style/_SideBarNavItem.scss";

const SideBarNavItem = ({ name, icon }) => {
  return (
    <div className="fsc_SideBarNavItem">
      <div className="fsc_SideBarNavItem__hoverIndicator" />
      <img className="fsc_SideBarNavItem__icon" src={icon} />
      <p className="fsc_SideBarNavItem__text">{name}</p>
    </div>
  );
};

SideBarNavItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string.isRequired
};

export default SideBarNavItem;
