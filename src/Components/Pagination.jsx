import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PaginationComponent = ({ booksPerPage, totalbooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalbooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack alignItems="center" margin="2rem">
      <Pagination
        count={pageNumbers.length}
        page={page}
        color="primary"
        onClick={() => paginate(page)}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationComponent;
