import React from "react";
import servicesStyle from "@styles/services.module.scss";

const Services = () => {
  return (
    <div className={servicesStyle.content}> 
      <h1 className={servicesStyle.heading}>
        <span className={servicesStyle.code}>03.</span> <span> Services</span>
      </h1>
      <h2>
        <span className={servicesStyle.code}>03.1</span> Webdevelopment
      </h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        laudantium adipisci non, id voluptatem ex quas, recusandae doloremque
        distinctio culpa totam optio? Mollitia, eaque obcaecati quasi molestiae
        repellendus et ut.
      </div>
    </div>
  );
};

export default Services;
