import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path fill="#c9c4d4" d="M36 8l-8 8h6v14c0 2.21-1.79 4-4 4s-4-1.79-4-4v-14c0-4.41-3.59-8-8-8s-8 3.59-8 8v14h-6l8 8 8-8h-6v-14c0-2.21 1.79-4 4-4s4 1.79 4 4v14c0 4.41 3.59 8 8 8s8-3.59 8-8v-14h6l-8-8z"/><path d="M0 0h48v48h-48z" fill="none"/>
    </Svg>
  );
};

export default Icon;
