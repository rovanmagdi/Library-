import styled from "@emotion/styled";
import {  Stack } from "@mui/material";
//Footer
export const StyledStackFooter = styled(Stack)(({ theme }) => ({
  height: "auto",
  width: "100%",
  backgroundColor: `${theme.palette.primary.dark}`,
  padding:"10px",
  color:`${ theme.palette.primary.light}`,
  textAlign: "center",marginTop:"20px"

}));
