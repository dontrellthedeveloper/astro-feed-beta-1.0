import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchAries, fetchFromAPI2 } from "../utils/fetchFromAPI";

import { categories } from "../utils/constants";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("libra");
    const [videos, setVideos] = useState(null);
    const [sign, setSign] = useState(null);


    // useEffect(() => {
    //     setSign(null);
    
    //     fetchAries(`sign?s=${selectedCategory}`)
    //       .then((data) => setSign(data.items))
    //     }, [selectedCategory]);

    //     console.log(sign)



    
    // useEffect(() => {
    //   setVideos(null);
  
    //   fetchFromAPI2(`search?part=snippet&q=${selectedCategory}`)
    //     .then((data) => setSign(data.items))
    //   }, [selectedCategory]);

    //   console.log(sign)    


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2024 Star Gazing
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>feed</span>
        </Typography>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <span style={{ color: "#FC1503" }}></span>
        </Typography>

        {/* <Videos videos={videos}  /> */}
      </Box>
    </Stack>
  );
};

export default Feed;



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