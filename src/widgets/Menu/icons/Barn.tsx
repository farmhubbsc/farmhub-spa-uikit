import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
		<path fill="#603A17" d="M97.926,399.989v-12.821h24.17l-7.578-138.426l-11.988,21.982h-19.31v-12.821h11.714l55.146-100.99
			L250,99.989l99.918,56.924l55.146,100.99h11.715v12.821h-19.315l-11.987-21.933l-7.56,138.376h24.143v12.821H97.926z
			 M253.629,272.814c14.859,0,26.949,12.09,26.949,26.951v87.402h84.498l8.727-159.763l-33.391-61.151L250,114.748l-90.413,51.506
			l-33.39,61.151l8.74,159.763h84.484v-87.402c0-14.861,12.09-26.951,26.951-26.951H253.629z M246.372,282.059
			c-9.771,0-17.719,7.943-17.719,17.707v65.555h42.695v-65.555c0-9.764-7.949-17.707-17.719-17.707H246.372z"/>
		<path fill="#BE202E" d="M335.659,170.924L250,122.126l-85.659,48.798l-31.643,57.953l1.936,35.438l6.372,116.442h72.004v-80.991
			c0-18.398,14.962-33.361,33.361-33.361h7.256c18.398,0,33.361,14.963,33.361,33.361v80.991h72.018l6.359-116.442l1.936-35.438
			L335.659,170.924z M286.849,242.916h-75.185v-75.197h75.185V242.916z"/>
		<path fill="#603A17" d="M215.51,239.069v-67.504h67.492v67.504H215.51z M224.265,233.94h53.671l-27.66-26.013L224.265,233.94z
			 M220.639,230.298l25.899-25.88l-25.899-24.352V230.298z M253.897,204.305l23.976,22.544v-46.518L253.897,204.305z
			 M250.157,200.782l24.108-24.088h-49.729L250.157,200.782z"/>
    </Svg>
  );
};

export default Icon;
