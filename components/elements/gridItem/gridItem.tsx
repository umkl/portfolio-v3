import React, { ReactElement } from "react";
import Icon from "./../../../assets/Icons/home.svg";

import l from "./griditem.module.scss";

interface Props {
  name: string;
}

export default function GridItem({ name }: Props): ReactElement {
  return (
    <div className={l["gridcontainer"]}>
      <ul className={l["gridlist"]}>
        <li className={l["gridlistitem"]}>{name}</li>
        <li className={l["gridlistitem"]}>
          <Icon className={l["icon"]} />
        </li>
      </ul>
    </div>
  );
}
