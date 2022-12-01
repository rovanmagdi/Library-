import React from "react";
import { Box, Avatar } from "@mui/material";
import {
  StyledPageCover,
  StyledCircularBorder,
  StyledCircularBox,
  CoverTxtBox,
} from "../Styled/Box";
import {
  StyledPageTitle,
  StyledGreenTxt,
} from "../Styled/Typography";
import { Container } from "@mui/system";
import Line from "../assets/shape-24.webp";
import Author from "../assets/author-11.webp";
import Arrow from "../assets/shape-5.webp";
import Badge from "../assets/badge.png";
import Line2 from "../assets/shape-23.webp";
import UnderLine from "../assets/shape-6.webp";
import DottedShape from "../assets/shape-8.webp";
import TxtUnderline from "../assets/shape-6.webp";

export default function PagesCover(props) {
 
  return (
    <>
      <StyledPageCover>
        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            height: { lg: "100%", md: "70%", sm: "70%", xs: "70%" },
          }}
          src={Line}
        />

        <Avatar
          src={Author}
          sx={{
            width: { lg: "11%", md: "12%", sm: "12%", xs: "12%" },
            height: { lg: "33%", md: "30%", sm: "25%", xs: "25%" },
            position: "absolute",
            bottom: "20%",
            right: "12%",
            zIndex: 1,
          }}
        />

        <Box
          component="img"
          sx={{
            width: "8%",

            position: "absolute",
            bottom: { lg: "43%", md: "43%", sm: "37%", xs: "37%" },
            right: "17%",
            animation: "forward 2s infinite alternate",
            "  @keyframes forward": {
              "0%": {
                right: "18%",
              },

              " 100% ": {
                right: "22%",
              },
            },
          }}
          src={Arrow}
        />
        <StyledCircularBorder>
          <StyledCircularBox>
            <Box
              component="img"
              src={Badge}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "70%",
                height: "70%",
              }}
            ></Box>
          </StyledCircularBox>
        </StyledCircularBorder>

        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "16%",
            right: "29%",
            width: "11%",
          }}
          src={UnderLine}
        />
        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: { lg: "28%", md: "22%", sm: "17%", xs: "10%" },
          }}
          src={Line2}
        />

        <Box
          component="img"
          sx={{
            width: "8%",
            position: "absolute",
            top: "30%",
            left: "10%",
            animation: "rotate 5s  infinite",
            "  @keyframes rotate": {
              "50%": { transform: "rotate(180deg)" },
            },
          }}
          src={DottedShape}
        />
        <Container>
          <CoverTxtBox>
            <Box sx={{ position: "relative" }}>
             
              <StyledPageTitle>
               
                <StyledGreenTxt component={"span"} variant={"body2"}>
                  {props.Word}
                </StyledGreenTxt>
              </StyledPageTitle>
              <Box
                component="img"
                src={TxtUnderline}
                sx={{
                  position: "absolute",
                  bottom: "-8px",
                  right: "0",
                  width: "50%",
                }}
              ></Box>
            </Box>
          </CoverTxtBox>
        </Container>
      </StyledPageCover>
    </>
  );
}
