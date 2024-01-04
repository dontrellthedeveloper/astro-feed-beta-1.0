import React, { useEffect, useState, useContext } from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import { AstroContext } from "../context/AstroContext";
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import { GiRam } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import {images} from '../constants';


const Navbar = () => { 
  
  const { sign, compHeader} = useContext(AstroContext);

  // console.log(compHeader.name)


  if(!compHeader) return (
    <div className="preloader">
        <div className="status"></div>
    </div>
)  
  
  return (
    
  <Stack 
  direction="row" 
  alignItems="center" 
  // p={2} 
  sx={{ 
    position:  "sticky", 
    background: '#000', 
    top: 0, 
    justifyContent: "space-between" 
    }}
  >
    <div style={{backgroundColor: '#290300', height: '80px', width: '256px'}}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={logo} alt="logo" height={45} /> */}
      </Link>
    </div>
    {/* <SearchBar /> */}

    <div className="main-header">

              <div className="zodiac-type-container aries">
            
                <TbZodiacAries className="aries-symbol" size={20} />
                <div className="zodiac-type aries" >
                  <span className="zodiac-type-text aries" >
                    {sign.name}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <GiRam size={25} />
                  <span className="zodiac-type-text aries">
                    {sign.symbol}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <FaFireAlt size={25} />
                  <span className="zodiac-type-text aries">
                    {sign.element}
                  </span>
                </div>

                <div className="zodiac-planet aries">
                  <img className="zodiac-planet-size" src={images.mars}/>
                  <span className="zodiac-planet-text aries">      
                    {sign.ruling_planet}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <MdDateRange size={25} />
                  <span className="zodiac-type-text aries">
                    {sign.date_range}
                  </span>
                </div>
                {compHeader &&
                  (compHeader.name === 'Aries') 
                  ? <TbZodiacAries className="aries-symbol" size={20} /> :
                  (compHeader.name === 'Taurus') 
                  ? <TbZodiacTaurus className="taurus-symbol" size={20} /> :
                  (compHeader.name === 'Gemini') 
                  ? <TbZodiacGemini className="gemini-symbol" size={20} /> :
                  (compHeader.name === 'Cancer') 
                  ? <TbZodiacCancer className="cancer-symbol" size={20} /> :
                  (compHeader.name === 'Leo') 
                  ? <TbZodiacLeo className="leo-symbol" size={20} /> :
                  (compHeader.name === 'Virgo') 
                  ? <TbZodiacVirgo className="virgo-symbol" size={20} /> :
                  (compHeader.name === 'Libra') 
                  ? <TbZodiacLibra className="libra-symbol" size={20} /> :
                  (compHeader.name === 'Scorpio') 
                  ? <TbZodiacScorpio className="scorpio-symbol" size={20} /> :
                  (compHeader.name === 'Sagittarius') 
                  ? <TbZodiacSagittarius className="sagittarius-symbol" size={20} /> :
                  (compHeader.name === 'Capricorn') 
                  ? <TbZodiacCapricorn className="capricorn-symbol" size={20} /> :
                  (compHeader.name === 'Aquarius') 
                  ? <TbZodiacAquarius className="aquarius-symbol" size={20} /> :
                  (compHeader.name === 'Pisces') 
                  ? <TbZodiacPisces className="pisces-symbol" size={20} /> :
                  "" 
                }


                {/* <TbZodiacAries className="aries-symbol" size={20} /> */}

              </div>  
            </div>
  </Stack>
)};

export default Navbar;