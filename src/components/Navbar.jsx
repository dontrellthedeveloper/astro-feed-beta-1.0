import React, { useEffect, useState, useContext } from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import { AstroContext } from "../context/AstroContext";
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import { GiAngelOutfit, GiArcher, GiBullHorns, GiGoat, GiLion, GiRam, GiSadCrab, GiScorpion, GiWaterPolo } from "react-icons/gi";
import { FaBalanceScale, FaFireAlt, FaWind } from "react-icons/fa";
import { MdDateRange, MdPeopleOutline } from "react-icons/md";
import {images} from '../constants';
import { HiPlusSm } from "react-icons/hi";
import { IoIosWater } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoFish } from "react-icons/io5";







const Navbar = () => { 
  
  const { sign, compHeader} = useContext(AstroContext);

  const aries = '#290300';
  const compBg = 
  (compHeader.name === 'Aries') ? '#290300' :
  (compHeader.name === 'Taurus') ? '#214015' :
  (compHeader.name === 'Gemini') ? '#322601' :
  (compHeader.name === 'Cancer') ? '#3c3a36' :
  (compHeader.name === 'Leo') ? '#342b06' :
  (compHeader.name === 'Virgo') ? '#27261a' :
  (compHeader.name === 'Libra') ? '#161b41' :
  (compHeader.name === 'Scorpio') ? '#000' :
  (compHeader.name === 'Sagittarius') ? '#30192d' :
  (compHeader.name === 'Capricorn') ? '#2a2522' :
  (compHeader.name === 'Aquarius') ? '#060f44' :
  (compHeader.name === 'Pisces') ? '#2a3313' :
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

              <div className="zodiac-type-container aries" style={{maxWidth: '800px'}}>
              <TbZodiacAries className="aries-symbol" size={20} />
              <div style={{display: 'flex', backgroundColor: ''}}>


                <div className="zodiac-type aries" >
                  <span className="zodiac-type-text aries" >
                    {sign.name}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <GiRam size={25} />
                  {/* <span className="zodiac-type-text aries">
                    {sign.symbol}
                  </span> */}
                </div>




                <div className="zodiac-type aries">
                  <FaFireAlt size={25} />
                  {/* <span className="zodiac-type-text aries">
                    {sign.element}
                  </span> */}
                </div>

                <div className="zodiac-planet aries">
                  <img className="zodiac-planet-size" src={images.mars}/>
                  {/* <span className="zodiac-planet-text aries">      
                    {sign.ruling_planet}
                  </span> */}
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


                  {/* {sign.ruling_planet} */}
                  {
                    (compHeader.name === 'Aries') ?
                    <div className="zodiac-planet aries">
                      <img className="zodiac-planet-size" src={images.mars}/>
                    </div>
                    :
                    (compHeader.name === 'Taurus') ?
                    <div className="zodiac-planet taurus">
                      <img className="zodiac-planet-size" src={images.venus}/>
                    </div>
                    :
                    (compHeader.name === 'Gemini') ?
                    <div className="zodiac-planet gemini">
                      <img className="zodiac-planet-size" src={images.mercury}/>
                    </div>
                    :
                    (compHeader.name === 'Cancer') ?
                    <div className="zodiac-planet cancer">
                      <img className="zodiac-planet-size" src={images.moon}/>
                    </div>
                    :
                    (compHeader.name === 'Leo') ?
                    <div className="zodiac-planet leo">
                      <img className="zodiac-planet-size" src={images.sun}/>
                    </div>
                    :
                    (compHeader.name === 'Virgo') ?
                    <div className="zodiac-planet virgo">
                      <img className="zodiac-planet-size" src={images.mercury}/>
                    </div>
                    :
                    (compHeader.name === 'Libra') ?
                    <div className="zodiac-planet libra">
                      <img className="zodiac-planet-size" src={images.venus}/>
                    </div>
                    :
                    (compHeader.name === 'Scorpio') ?
                    <div className="zodiac-planet scorpio">
                      <img className="zodiac-planet-size" src={images.mars}/>
                    </div>
                    :
                    (compHeader.name === 'Sagittarius') ?
                    <div className="zodiac-planet sagittarius">
                      <img className="zodiac-planet-size" src={images.jupiter}/>
                    </div>
                    :
                    (compHeader.name === 'Capricorn') ?
                    <div className="zodiac-planet capricorn">
                      <img className="zodiac-planet-size" src={images.saturn}/>
                    </div>
                    :
                    (compHeader.name === 'Aquarius') ?
                    <div className="zodiac-planet aquarius">
                      <img className="zodiac-planet-size" src={images.uranus}/>
                    </div>
                    :
                    (compHeader.name === 'Pisces') ?
                    <div className="zodiac-planet pisces">
                      <img className="zodiac-planet-size" src={images.saturn}/>
                    </div>
                    :
                    <div className="zodiac-planet aries" style={{minWidth: '26px', backgroundColor: 'transparent', border: '2px solid transparent'}}>
                      {/* <img className="zodiac-planet-size" src={images.mars}/> */}
                    </div>
                  }

                    
                  {/* {compHeader.element} */}
                  {
                    (compHeader.name === 'Aries') ?
                    <div className="zodiac-type aries">
                      <FaFireAlt size={25} />
                    </div>
                    :
                    (compHeader.name === 'Taurus') ?
                    <div className="zodiac-type taurus">
                      <FaEarthAmericas size={25} />
                    </div>
                    :
                    (compHeader.name === 'Gemini') ?
                    <div className="zodiac-type gemini">
                      <FaWind size={25} />
                    </div>
                    :
                    (compHeader.name === 'Cancer') ?
                    <div className="zodiac-type cancer">
                      <IoIosWater size={25} />
                    </div>
                    :
                    (compHeader.name === 'Leo') ?
                    <div className="zodiac-type leo">
                      <FaFireAlt size={25} />
                    </div>
                    :
                    (compHeader.name === 'Virgo') ?
                    <div className="zodiac-type virgo">
                      <FaEarthAmericas size={25} />
                    </div>
                    :
                    (compHeader.name === 'Libra') ?
                    <div className="zodiac-type libra">
                      <FaWind size={25} />
                    </div>
                    :
                    (compHeader.name === 'Scorpio') ?
                    <div className="zodiac-type scorpio">
                      <IoIosWater size={25} />
                    </div>
                    :
                    (compHeader.name === 'Sagittarius') ?
                    <div className="zodiac-type sagittarius">
                      <FaFireAlt size={25} />
                    </div>
                    :
                    (compHeader.name === 'Capricorn') ?
                    <div className="zodiac-type capricorn">
                      <FaEarthAmericas size={25} />
                    </div>
                    :
                    (compHeader.name === 'Aquarius') ?
                    <div className="zodiac-type aquarius">
                      <FaWind size={25} />
                    </div>
                    :
                    (compHeader.name === 'Pisces') ?
                    <div className="zodiac-type pisces">
                      <IoIosWater size={25} />
                    </div>
                    :
                    <div className="zodiac-type aries" style={{backgroundColor: 'transparent', border: '2px solid transparent', color: 'transparent'}}>
                      <FaFireAlt size={25} />
                    </div>
                  }




                  {/* {compHeader.symbol} */}
                  {
                    (compHeader.name === 'Aries') ?
                    <div className="zodiac-type aries">
                      <GiRam size={25} />
                    </div>
                    :
                    (compHeader.name === 'Taurus') ?
                    <div className="zodiac-type taurus">
                      <GiBullHorns size={25} />
                    </div>
                    :
                    (compHeader.name === 'Gemini') ?
                    <div className="zodiac-type gemini">
                      <MdPeopleOutline size={25} />
                    </div>
                    :
                    (compHeader.name === 'Cancer') ?
                    <div className="zodiac-type cancer">
                      <GiSadCrab size={25} />
                    </div>
                    :
                    (compHeader.name === 'Leo') ?
                    <div className="zodiac-type leo">
                      <GiLion size={25} />
                    </div>
                    :
                    (compHeader.name === 'Virgo') ?
                    <div className="zodiac-type virgo">
                      <GiAngelOutfit size={25} />
                    </div>
                    :
                    (compHeader.name === 'Libra') ?
                    <div className="zodiac-type libra">
                      <FaBalanceScale size={25} />
                    </div>
                    :
                    (compHeader.name === 'Scorpio') ?
                    <div className="zodiac-type scorpio">
                      <GiScorpion size={25} />
                    </div>
                    :
                    (compHeader.name === 'Sagittarius') ?
                    <div className="zodiac-type sagittarius">
                      <GiArcher size={25} />
                    </div>
                    :
                    (compHeader.name === 'Capricorn') ?
                    <div className="zodiac-type capricorn">
                      <GiGoat size={25} />
                    </div>
                    :
                    (compHeader.name === 'Aquarius') ?
                    <div className="zodiac-type aquarius">
                      <GiWaterPolo size={25} />
                    </div>
                    :
                    (compHeader.name === 'Pisces') ?
                    <div className="zodiac-type pisces">
                      <IoFish size={25} />
                    </div>
                    :
                    <div className="zodiac-type aries" style={{backgroundColor: 'transparent', border: '2px solid transparent', color: 'transparent'}}>
                      <GiRam size={25} />
                    </div>
                  }


                  {/* {compHeader.name} */}
                  {
                    (compHeader.name === 'Aries') ?
                    <div className="zodiac-type aries" >
                      <span className="zodiac-type-text aries" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Taurus') ?
                    <div className="zodiac-type taurus" >
                      <span className="zodiac-type-text taurus" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Gemini') ?
                    <div className="zodiac-type gemini" >
                      <span className="zodiac-type-text gemini" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Cancer') ?
                    <div className="zodiac-type cancer" >
                      <span className="zodiac-type-text cancer" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Leo') ?
                    <div className="zodiac-type leo" >
                      <span className="zodiac-type-text leo" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Virgo') ?
                    <div className="zodiac-type virgo" >
                      <span className="zodiac-type-text virgo" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Libra') ?
                    <div className="zodiac-type libra" >
                      <span className="zodiac-type-text libra" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Scorpio') ?
                    <div className="zodiac-type scorpio" >
                      <span className="zodiac-type-text scorpio" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Sagittarius') ?
                    <div className="zodiac-type sagittarius" >
                      <span className="zodiac-type-text sagittarius" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Capricorn') ?
                    <div className="zodiac-type capricorn" >
                      <span className="zodiac-type-text capricorn" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Aquarius') ?
                    <div className="zodiac-type aquarius" >
                      <span className="zodiac-type-text aquarius" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    (compHeader.name === 'Pisces') ?
                    <div className="zodiac-type pisces" >
                      <span className="zodiac-type-text pisces" >
                        {compHeader.name}
                      </span>
                    </div>
                    :
                    <div className="zodiac-type aries" style={{backgroundColor: 'transparent', border: '2px solid transparent', color: 'transparent'}}>
                      <span className="zodiac-type-text aries" style={{backgroundColor: 'transparent', border: '2px solid transparent', color: 'transparent'}}>
                        Aries
                      </span>
                    </div>
                  }




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
                  <TbZodiacAries className="aries-symbol" style={{backgroundColor: 'transparent', border: '2px solid transparent', color: 'transparent'}} size={20} /> 
                }


                {/* <TbZodiacAries className="aries-symbol" size={20} /> */}

              </div>  
            </div>
  </Stack>
)};

export default Navbar;