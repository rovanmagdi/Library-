import React from "react";
import Favorite from "../Components/Favorite";
import PagesCover from "../Components/PageCover";

const FavoriteComponent = (props) => {
  return (
    <>
      <PagesCover Word="Favorite" />
      <Favorite />
    </>
  );
};

export default FavoriteComponent;
