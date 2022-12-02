import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButtonDetails = styled(Button)(({ theme }) => ({
  padding: "10px",
  margin: "20px",
  textTransform: "capitalize",
  fontWeight: "600",
  fontSize: "1.3rem",

  backgroundImage:
    " linear-gradient(#212832, #212832), linear-gradient(#309255, #309255)",
  backgroundSize: " 0 100%, auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  transition: "all .3s ease-out",

  "&:hover": {
    color: " #fff",
    backgroundSize: " 100% 100%, auto",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".7em",
  },
}));


export const StyledButtonNotFound = styled(Button)(({ theme }) => ({
  marginTop:'20px',
  borderRadius:'10px',
  padding:'15px 25px 15px 25px',
  boxShadow:'none',
  color:"white",
  textTransform:'capitalize',
  backgroundImage:' linear-gradient(#212832, #212832), linear-gradient(#309255, #309255)',
  backgroundSize:' 0 100%, auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  transition: 'all .3s ease-out',
  fontWeight:'bold',
  margin:"20px",

  "&:hover": {
    color:' #fff',
    backgroundSize:' 100% 100%, auto',
   
  }, [theme.breakpoints.down('md')]: {
    fontSize:'1em',
  },[theme.breakpoints.down('sm')]: {
    fontSize:'.7em',
  }
}));

