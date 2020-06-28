//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import typography from "@styled-system/typography";
//@ts-ignore
import space from "@styled-system/space";
//@ts-ignore
import color from "@styled-system/color";
import { TypographyProps, SpaceProps, ColorProps } from "styled-system";

const Box: React.FC<TypographyProps | SpaceProps | ColorProps> = cxs("div")(
  typography,
  space,
  color
);

export default Box;
