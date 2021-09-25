import React, { ReactElement } from "react";
import Icon from "./../../../assets/Icons/home.svg";

import l from "./griditem.module.scss";

interface Props {
  name: string;
}

export default function GridItem({ name }: Props): ReactElement {
  return (
    <div>
      <ul>
        <Icon className={l["icon"]} />
        <li>{name}</li>
      </ul>
    </div>
  );
}
