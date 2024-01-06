import React, { useEffect, useState, useContext } from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import { AstroContext } from "../context/AstroContext";
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import { GiLion, GiRam } from "react-icons/gi";
import { FaFireAlt, FaWind } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import {images} from '../constants';
import { HiPlusSm } from "react-icons/hi";







const Navbar = () => { 
  
  const { sign, compHeader} = useContext(AstroContext);

  const aries = '#290300';
  const compBg = 
  (compHeader.name === 'Aries') ? '#290300' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Gemini') ? '#322601' :
  (compHeader.name === 'Cancer') ? '#3c3a36' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Leo') ? '#342b06' :
  (compHeader.name === 'Aquarius') ? '#060f44' :
                  ''

  const gradient = {
    // ariesLeo:  `linear-gradient(to right, ${aries}, ${compBg})`,
    // ariesTaurus:  `linear-gradient(to right, ${aries}, ${compBg})`,
    aries: `linear-gradient(to right, ${aries}, ${compBg})`
  }



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
    <div style={{backgroundColor: '#290300', height: '70px', width: '256px'}}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={logo} alt="logo" height={45} /> */}
      </Link>
    </div>
    {/* <SearchBar /> */}

    <div className="main-header" style={{
      background: 
        compHeader.name === 'Aries'|| 'Taurus' || 'Gemini' || 'Cancer' || 'Leo'|| 'Virgo' || 'Libra' || 'Scorpio' || 'Sagittarius' || 'Capricorn' || 'Aquarius' || 'Pisces' ? gradient.aries : 
        '#290300'
      }}>

              <div className="zodiac-type-container aries" style={{maxWidth: '1100px'}}>
              <TbZodiacAries className="aries-symbol" size={20} />
              <div style={{display: 'flex', backgroundColor: ''}}>


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
              
                  <div className={!compHeader ? 'zodiac-type aries':'zodiac-type aries none'}>
                    <MdDateRange size={25} />
                    <span className="zodiac-type-text aries">
                      {sign.date_range}
                    </span>
                  </div>

                </div>

                <HiPlusSm style={{color: '#fff', backgroundColor: ''}} size={30} />



                <div style={{display: 'flex', backgroundColor: ''}}>

                <div className="zodiac-planet aquarius">
                    <img className="zodiac-planet-size" src={images.uranus}/>
                    <span className="zodiac-planet-text aquarius">      
                      {compHeader.ruling_planet}
                    </span>
                  </div>


                  <div className="zodiac-type aquarius">
                    <FaWind size={25} />
                    <span className="zodiac-type-text aquarius">
                      {compHeader.element}
                    </span>
                  </div>




                  <div className="zodiac-type aquarius">
                    <GiLion size={25} />
                    <span className="zodiac-type-text aquarius">
                      {compHeader.symbol}
                    </span>
                  </div>

                  <div className="zodiac-type aquarius" >
                    <span className="zodiac-type-text aquarius" >
                      {compHeader.name}
                    </span>
                  </div>
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