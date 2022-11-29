import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const StyledLinkNavbar = styled(Link)(({ theme }) => ({
  paddingLeft: "28px",
  textDecoration: "none",
  fontSize: "20px",
  fontFamily: ["monospace", "cursive"],
  "&:hover": {
    cursor: "pointer",
    color: `${theme.palette.primary.main}`,
  },
  diplay: "inline-block",
}));



