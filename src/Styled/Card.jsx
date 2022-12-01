import styled from "@emotion/styled";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";

export const StyledCardBook = styled(Card)(({ theme }) => ({
  width: "250px",
  margin: "20px",
  // position: "relative",
  border: "1px solid transparent",
  borderRadius: "18px",
  transition: "border 0.7s",
  // display: "inline-block",
  "&:hover": {
    cursor: "pointer",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
   
      backgroundColor: ` ${theme.palette.primary.light}`,
      borderRadius:"10px",
      width:"100%"

  }));
