import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Sign, Navbar, Feed, Sidebar } from './components';
import Aries from "./components/Signs/Aries";
import Taurus from "./components/Signs/Taurus";
import Gemini from "./components/Signs/Gemini";
import { useState } from "react";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

return (
  <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
          <Box sx={{ 
              backgroundColor: '#000' ,
              height: { sx: "auto", md: "92vh" }, 
              // borderRight: "1px solid #3d3d3d", 
              borderRight: "1px solid #000", 
              px: { sx: 0, md: 2 } 
            }}
          >
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            


            <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
              Copyright © 2024 Astro Feed
            </Typography>
          </Box>

          <Box 
          // p={2}
          className="" 
          sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
            <div className="" style={{height: '92vh'}}>
              <Routes>
                  <Route exact path='/' element={<Feed />} />
                  <Route path='/aries' element={<Aries />} />
                  <Route path='/taurus' element={<Taurus />} />
                  <Route path='/gemini' element={<Gemini />} />
                  <Route path='/sign?s=:id' element={<Feed />} />
                  <Route path='/video/:id' element={<VideoDetail />} />
                  <Route path='/channel/:id' element={<ChannelDetail />} />
                  <Route path='/search/:searchTerm' element={<SearchFeed />} />
              </Routes>
            </div>
          </Box>
        </Stack>
      </Box>
    </BrowserRouter>
  )
  
  
};


export default App;
