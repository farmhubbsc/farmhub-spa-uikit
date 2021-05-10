import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
    	<path fill="#603913" d="M347.926,602.989v-12.821h24.17l-7.578-138.426l-11.988,21.982h-19.31v-12.821h11.714l55.146-100.99
			L500,302.989l99.918,56.924l55.146,100.99h11.715v12.821h-19.315l-11.987-21.933l-7.56,138.376h24.143v12.821H347.926z
			 M503.629,475.814c14.859,0,26.949,12.09,26.949,26.951v87.402h84.498l8.727-159.763l-33.391-61.151L500,317.748l-90.413,51.506
			l-33.39,61.151l8.74,159.763h84.484v-87.402c0-14.861,12.09-26.951,26.951-26.951H503.629z M496.372,485.059
			c-9.771,0-17.719,7.943-17.719,17.707v65.555h42.695v-65.555c0-9.763-7.949-17.707-17.719-17.707H496.372z"/>
		<path fill="#BE1E2D" d="M585.659,373.924L500,325.126l-85.659,48.798l-31.643,57.953l1.936,35.438l6.372,116.442h72.004v-80.991
			c0-18.399,14.962-33.361,33.361-33.361h7.256c18.398,0,33.361,14.962,33.361,33.361v80.991h72.018l6.359-116.442l1.936-35.438
			L585.659,373.924z M536.849,445.916h-75.185v-75.197h75.185V445.916z"/>
		<path fill="#603913" d="M465.51,442.069v-67.504h67.492v67.504H465.51z M474.265,436.94h53.671l-27.66-26.013L474.265,436.94z
			 M470.639,433.298l25.899-25.88l-25.899-24.352V433.298z M503.897,407.305l23.976,22.544v-46.518L503.897,407.305z
			 M500.157,403.782l24.108-24.088h-49.729L500.157,403.782z"/>
    </Svg>
  );
};

export default Icon;
