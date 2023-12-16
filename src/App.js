import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Sign, Navbar, Feed, Sidebar } from './components';
import Aries from "./components/Signs/Aries";
import Taurus from "./components/Signs/Taurus";
import { useState } from "react";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("libra");

return (
  <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
          <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            


            <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
              Copyright © 2024 Star Gazing
            </Typography>
          </Box>

          <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            {/* <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
              {selectedCategory} <span style={{ color: "#FC1503" }}>feed</span>
            </Typography> */}

            <Routes>
                <Route exact path='/' element={<Feed />} />
                <Route path='/aries' element={<Aries />} />
                <Route path='/taurus' element={<Taurus />} />
                <Route path='/sign?s=:id' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
{/* 
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
              <span style={{ color: "#FC1503" }}></span>
            </Typography> */}


          </Box>
        </Stack>
      </Box>
    </BrowserRouter>
  )
  
  
};


export default App;
