import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./../";
import { render } from 'react-dom';


import { fetchLibra } from "../../utils/fetchFromAPI";

import { categories } from "../../utils/constants";


import { TbZodiacAries, TbZodiacTaurus, TbZodiacGemini, TbZodiacLibra } from "react-icons/tb";

import { FaFireAlt,  } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

import './Signs.css'
import {images} from '../../constants';


import { FaWind } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";

const Libra = () => {

    const [videos, setVideos] = useState(null);
    const [sign, setSign] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {

        fetchLibra()
          .then((data) => setSign(data))
          console.log(sign)
        }, [selectedCategory]);

        if(!sign) return (
          <div className="preloader">
              <div className="status">...</div>
          </div>
        )  


  return (
    <div className="main--s libra">
      <div className="main--s2">
        <div className="main-content">
            <div className="main-header">
              {/* <p className="header-symbol-container">
                <TbZodiacLibra className="gemini-symbol" size={40} />
              </p>
              <h2 className="zodiac-name gemini">{sign.name}</h2>
              <p className="zodiac-date gemini">{sign.date_range}</p> */}
              <div className="zodiac-type-container">
                <TbZodiacLibra className="libra-symbol" size={20} />
                <div className="zodiac-type libra" 
                // style={{backgroundColor: '#F9BC04', cursor:'default'}}
                >
                  <span className="zodiac-type-text libra" 
                  // style={{color: '#896702'}}
                  >
                    {sign.name}
                  </span>
                </div>
                <div className="zodiac-type libra">
                  <FaBalanceScale size={25} />
                  <span className="zodiac-type-text libra">
                    {sign.symbol}
                  </span>
                </div>
                <div className="zodiac-type libra">
                  <FaWind size={25} />
                  <span className="zodiac-type-text libra">
                    {sign.element}
                  </span>
                </div>

                <div className="zodiac-planet libra">
                  <img className="zodiac-planet-size" src={images.venus}/>
                  <span className="zodiac-planet-text libra">      
                    {sign.ruling_planet}
                  </span>
                </div>
                <div className="zodiac-type libra">
                  <MdDateRange size={25} />
                  <span className="zodiac-type-text libra">
                    {sign.date_range}
                  </span>
                </div>
              </div>  
            </div>
            <Tabs
              config={[
                {header: "General", component: <General/>},   
                {header: "About", component: <About/>},   
                {header: "Women", component: <Women/>},
                {header: "Men", component: <Men/>},
                {header: "Love", component: <Love/>}, 
                {header: "Relationships", component: <Relationships/>},
                // {header: "Career", component: <Career/>},
                {header: "Nature", component: <Nature/>},
                {header: "Health", component: <Health/>},
              ]}
            />
        </div>
      </div>

    </div>

  );
};


const General = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
        <div className="cards-s" style={{display: 'flex', justifyContent:'space-evenly', textAlign: 'center'}}>
            {/* <div className="card card-sm gemini-card">
              <h2 className="card-header gemini">Compatibility</h2>
              <p>
                {sign.compatibility.substring().slice().split(',').map((substring, idx) => {
                  return (
                    <div key={idx}>
                      <span>{substring}</span>
                      <br/>
                    </div>
                  )
                })}
              </p>
            </div> */}
            <div className="card card-sm libra-card">
              <h2 className="card-header libra">Strengths</h2>
              <p>
                {sign.strengths.slice().split(',').map((substring, idx) => {
                  return (
                    <div key={idx}>
                      <span>{substring}</span>
                      <br/>
                    </div>
                  )
                })}
              </p>
            </div>

            <div className="card card-sm libra-card">
              <h2 className="card-header libra">Weaknesses</h2>
              <p>
                {sign.weaknesses.split(',').map((substring, idx) => {
                  return (
                    <div key={idx}>
                      <span>{substring}</span>
                      <br/>
                    </div>
                  )
                })}
              </p>
            </div>


          </div>

      {/* <h2>Compatibility</h2>
      <p>{sign.compatibility}</p> */}
      {/* <h2>Ruling Planet</h2> */}


    </>
  )
}



const About = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <div className="card-s">
      <div className="card libra-card">
        <h2 className="card-header libra libra-card-detail">About {sign.name}</h2>
        <p>{sign.about}</p>
      </div>
    </div>
  )
}

const Compatibility = () => {

  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <h2>Compatibility</h2>
      <div>
          <h2>Compatibility</h2>
          <p>
            {sign.compatibility.substring(25).split(',').map((substring, idx) => {
              return (
                <div key={idx}>
                  <span>{substring}</span>
                  <br/>
                </div>
              )
            })}
          </p>
        </div>
    </>
  )
}

const Career = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <h2>{sign.name } Careers</h2>
      <p>{sign.career}</p>
    </>
  )
}

const Health = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name } Health</h2>
          <p>{sign.health}</p>
        </div>
      </div>
    </>
  )
}

const Love = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name } in Love</h2>
          <p>{sign.love}</p>
        </div>
      </div>
    </>
  )
}

const Relationships = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name} Relationships</h2>
          <p>{sign.relationship}</p>
        </div>
      </div>
    </>
  )
}

const Nature = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name} Nature</h2>
          <p>{sign.nature}</p>
        </div>
      </div>
    </>
  )
}

const Men = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name } Men</h2>
          <p>{sign.man}</p>
        </div>
      </div>
    </>
  )
}

const Women = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchLibra()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status">...</div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card libra-card">
          <h2 className="card-header libra libra-card-detail">{sign.name } Women</h2>
          <p>{sign.woman}</p>
        </div>
      </div>
    </>
  )
}





const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div className="tab libra" style={{margin: '0 auto', textAlign: 'center'}}>
      <div className="tab-headers libra">
        {
          config.map((entry,index)=>(
            <div
              className={`tab-header libra ${activeTab === index ? "active" : ""} `}
              onClick={()=>setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))
        }
      </div>
      <div className="tab-body libra">
        {config[activeTab].component}
      </div>
    </div>
  )
};




export default Libra;


