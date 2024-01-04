import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Sign, Navbar, Feed, Sidebar } from './components';
import Aries from "./components/Signs/Aries";
import Taurus from "./components/Signs/Taurus";
import Gemini from "./components/Signs/Gemini";
import { useEffect, useState } from "react";
import Cancer from "./components/Signs/Cancer";
import Leo from "./components/Signs/Leo";
import Virgo from "./components/Signs/Virgo";
import Scorpio from "./components/Signs/Scorpio";
import Libra from "./components/Signs/Libra";
import Sagittarius from "./components/Signs/Sagittarius";
import Capricorn from "./components/Signs/Capricorn";
import Aquarius from "./components/Signs/Aquarius";
import Pisces from "./components/Signs/Pisces";
import {AriesCompatibility} from "./components/Signs/Aries/AriesCompatibility";
import { TaurusCompatibility } from "./components/Signs/Taurus/TaurusCompatibility";
import AriesComp from "./components/Signs/Aries/AriesComp";
import { fetchAries } from "./utils/fetchFromAPI";
import {AstroContext} from './context/AstroContext';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sign, setSign] = useState('');

  // useEffect(() => {

  //   fetchAries()
  //     .then((data) => setAries(data))
  //     console.log(aries)
  //   }, []);

return (
  <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <AstroContext.Provider value={{sign, setSign}}>
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
                    <Route path='/aries/:id' element={<Aries />} />
                    <Route path='/taurus' element={<Taurus />} />
                    <Route path='/taurus/:id' element={<TaurusCompatibility />} />
                    <Route path='/gemini' element={<Gemini />} />
                    <Route path='/cancer' element={<Cancer />} />
                    <Route path='/leo' element={<Leo />} />
                    <Route path='/virgo' element={<Virgo />} />
                    <Route path='/libra' element={<Libra />} />
                    <Route path='/scorpio' element={<Scorpio />} />
                    <Route path='/sagittarius' element={<Sagittarius />} />
                    <Route path='/capricorn' element={<Capricorn />} />
                    <Route path='/aquarius' element={<Aquarius />} />
                    <Route path='/pisces' element={<Pisces />} />

                    {/* <Route path='/aries/:id' element={<AriesTaurusCompatibility />} />
                    <Route path='/aries/:id' element={<AriesGeminiCompatibility />} />
                    <Route path='/aries/:id' element={<AriesCancerCompatibility />} /> */}
                    <Route path='/sign?s=:id' element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
              </div>
            </Box>
          </Stack>
        </AstroContext.Provider>

      </Box>
    </BrowserRouter>
  )
  
  
};


export default App;
