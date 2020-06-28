import styled from "@emotion/styled";
//@ts-ignore
import variant from "@styled-system/variant";

const Button = styled("button")(
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
