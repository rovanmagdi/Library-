import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CardHome from "../Components/CardHome";
import PagesCover from "../Components/PageCover";
import { StyledButtonHome } from "../Styled/Button";

const Home = () => {
  const clickBtn = () => {
    console.log(localStorage.getItem("Favourite") === "undefined");
   
    // };
  };
  return (
    <>
      <PagesCover Word="Home" />

      <CardHome />
      <Stack alignItems="center">
        <StyledButtonHome onClick={clickBtn}>More Books</StyledButtonHome>
      </Stack>
    </>
  );
};

export default Home;
