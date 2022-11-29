import React from "react";
import PagesCover from "../Components/PageCover";
import Card from "../Components/Card";


const Books = () => {
  

  // const [currentCourses, setCurrentCourses] = React.useState([]);

  // const search = (word) => {
  //   setValueSearch(currentCourses.filter((item) => item.title.includes(word)));

  //   console.log(valueSearch);
  //   console.log(values.word);
  // };
  return (
    <>
      <PagesCover />
     
      <Card/>
    </>
  );
};

export default Books;
