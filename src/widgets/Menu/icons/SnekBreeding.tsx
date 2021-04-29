import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
    	<path d="M21.8,18.1c0.1-0.3,0.2-0.7,0.2-1.1c0-1.7-1.3-3-3-3h-4V8h7V7h-3V4c0-2.2-1.8-4-4-4h-2c-2.2,0-4,1.8-4,4v10H5   c-1.7,0-3,1.3-3,3c0,0.4,0.1,0.8,0.2,1.1C0.9,18.5,0,19.6,0,21c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3C24,19.6,23.1,18.5,21.8,18.1z    M11,4c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2v2h-4v8h-2V4z M5,16h14c0.6,0,1,0.4,1,1s-0.4,1-1,1H5c-0.6,0-1-0.4-1-1S4.4,16,5,16z    M21,22H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,22,21,22z"/><circle cx="15" cy="4" r="1"/>
    </Svg>
  );
};

export default Icon;
