import React from "react";
import servicesStyle from "@styles/services.module.scss";
import { BrandAdobe } from "tabler-icons-react";

const Services = () => {
  return (
    <div className={servicesStyle.content}>
      <h1 className={servicesStyle.heading}>
        <span className={servicesStyle.code}>03.</span> <span> Services</span>
      </h1>
      <Service/>
      <Service/>
      <Service/>
    </div>
  );
};

const Service = () => {
  return (
    <div id={servicesStyle.gig}>
      <h2 className={servicesStyle.heading2}>
        <span className={servicesStyle.code}>03.1.</span>{" "}
        <span>Webdevelopment</span>
      </h2>
      <div id={servicesStyle.split}>
        <div id={servicesStyle.text}>
          <p>
            I am offering the service to build your website. I can build your
            website from scratch or update your existing website.
          </p>
          <button id={servicesStyle.reachbtn}>reach out to me</button>
          <button id={servicesStyle.fiverrbtn}>fiverr gig</button>
        </div>
        {/* <div id={servicesStyle.picture}>picture</div> */}
      </div>
    </div>
  );
};

export default Services;
