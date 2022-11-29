import React, { useState } from 'react';
import { FormControl, OutlinedInput, InputAdornment, Typography, Box, Stack } from "@mui/material";
import { StyledBoxSearch } from "../Styled/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const FormSearch = () => {
    const [valueSearch, setValueSearch] = useState("");
    const handleChangeTxt = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const search = (word) => {
        // books.map((book) => console.log(book.title === word && console.log(book)));
        // ("str".split(' '));
        // console.log(book.title.split(' '));
        // setValueSearch(books.filter((ele) => ele.title === word));
    
        console.log(valueSearch);
      };
      const [values, setValues] = useState({
        word: "",
      });
    return (
        <Stack >
    <Typography>
    All Courses of Edule

    </Typography>

        <FormControl
        sx={{ m: 1, width: "40ch", backgroundColor: "white" }}
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          value={values.word}
          onChange={handleChangeTxt("word")}
          endAdornment={
            <InputAdornment
              position="end"
              onClick={() => search(values.word)}
              sx={{ cursor: "pointer" }}
            >
              <StyledBoxSearch>
                <SearchOutlinedIcon />
              </StyledBoxSearch>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Search here"
        />
      </FormControl>
        </Stack>
    );
};

export default FormSearch;