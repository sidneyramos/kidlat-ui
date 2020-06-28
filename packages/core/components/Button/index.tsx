//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import variant from "@styled-system/variant";
//@ts-ignore
import space from "@styled-system/space";
//@ts-ignore
import color from "@styled-system/color";
import { SpaceProps, ColorProps } from "styled-system";

export interface ButtonProps {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps | SpaceProps | ColorProps> = cxs("button")(
  space,
  color,
  {
    fontFamily: "inherit",
    color: "white",
    backgroundColor: "#047ac2",
    padding: "12px 35px",
    border: "1px solid #047ac2",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
    fontSize: "16px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#03609B",
      borderColor: "#03609B",
    },
  },
  variant({
    variants: {
      primary: {
        color: "white",
      },
      secondary: {
        color: "#047ac2",
        bg: "transparent",
        "&:hover": {
          backgroundColor: "#E5F1F8",
          borderColor: "#03609B",
        },
      },
    },
  })
);

export default Button;
