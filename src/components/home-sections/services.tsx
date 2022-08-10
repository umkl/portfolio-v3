import React from "react";
import servicesStyle from "@styles/services.module.scss";

const Services = () => {
  return (
    <div className={servicesStyle.content}>
      <h1 className={servicesStyle.heading}>
        <span className={servicesStyle.code}>03.</span> <span> Services</span>
      </h1>
    </div>
  );
};

export default Services;
