//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import typography from "@styled-system/typography";
//@ts-ignore
import space from "@styled-system/space";
//@ts-ignore
import color from "@styled-system/color";
//@ts-ignore
import layout from "@styled-system/layout";
//@ts-ignore
import flexbox from "@styled-system/flexbox";
//@ts-ignore
import grid from "@styled-system/grid";
//@ts-ignore
import background from "@styled-system/background";
//@ts-ignore
import border from "@styled-system/border";
//@ts-ignore
import position from "@styled-system/position";
//@ts-ignore
import shadow from "@styled-system/shadow";

import { StylesProps } from "styled-system";

const Box: React.FC<StylesProps> = cxs("div")(
  typography,
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);

export default Box;
