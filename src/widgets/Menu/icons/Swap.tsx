import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <image overflow="visible" width="48" height="48" id="icon_swap_48_px_image" xlinkHref="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDhsLTggOGg2djE0YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00di0xNGMwLTQuNDEtMy41OS04LTgtOHMtOCAzLjU5LTggOHYxNGgtNmw4IDggOC04aC02di0xNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0djE0YzAgNC40MSAzLjU5IDggOCA4czgtMy41OSA4LTh2LTE0aDZsLTgtOHoiLz48cGF0aCBkPSJNMCAwaDQ4djQ4aC00OHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=">
      </image>
    </Svg>
  );
};

export default Icon;
