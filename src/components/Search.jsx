import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
const Search = () => {
  const {searchTerm} = useParams(); 
  const [videos, setvideos] = useState("");/////
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <div>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            We are showing results of : {searchTerm} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </div>
    </Stack>
  );
};

export default Search;