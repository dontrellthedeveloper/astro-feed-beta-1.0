import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./../";

import { fetchTaurus } from "../../utils/fetchFromAPI";

import { categories } from "../../utils/constants";

const Taurus = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [videos, setVideos] = useState(null);
    const [sign, setSign] = useState('');


    useEffect(() => {

        fetchTaurus()
          .then((data) => setSign(data))
          console.log(sign)
        }, [selectedCategory]);


  return (
    <>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {sign.name} <span style={{ color: "#65BB45" }}>Feed</span>
        </Typography>

        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        About
          <span style={{ color: "#65BB45" }}>{sign.about}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Career
          <span style={{ color: "#65BB45" }}>{sign.career}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Compatibility
          <span style={{ color: "#65BB45" }}>{sign.compatibility}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Birthdate Range
          <span style={{ color: "#65BB45" }}>{sign.date_range}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Element
          <span style={{ color: "#65BB45" }}>{sign.element}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Health
          <span style={{ color: "#65BB45" }}>{sign.health}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Love
          <span style={{ color: "#65BB45" }}>{sign.love}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Men
          <span style={{ color: "#65BB45" }}>{sign.man}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Women
          <span style={{ color: "#65BB45" }}>{sign.woman}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Nature
          <span style={{ color: "#65BB45" }}>{sign.nature}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Relationship
          <span style={{ color: "#65BB45" }}>{sign.relationship}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Ruling Planet
          <span style={{ color: "#65BB45" }}>{sign.ruling_planet}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Strengths
          <span style={{ color: "#65BB45" }}>{sign.strengths}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Symbol
          <span style={{ color: "#65BB45" }}>{sign.symbol}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Weakness
          <span style={{ color: "#65BB45" }}>{sign.weaknesses}</span>
        </Typography>
    </>
  );
};

export default Taurus;



// const Feed = () => {


//   return (
//     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
//       <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
//       <Sidebar/>
        
//         <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
//           Copyright © 2024 Star Gazing
//         </Typography>
//       </Box>


//     </Stack>
//   );
// };

// export default Feed;