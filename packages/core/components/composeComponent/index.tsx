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
import background from "@styled-system/background";
//@ts-ignore
import border from "@styled-system/border";
//@ts-ignore
import position from "@styled-system/position";
//@ts-ignore
import shadow from "@styled-system/shadow";

const composeComponent = (component: React.FC) =>
  cxs(component)(
    typography,
    space,
    color,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow
  );

export default composeComponent;
