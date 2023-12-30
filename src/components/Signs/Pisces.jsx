import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./../";
import { render } from 'react-dom';


import { fetchPisces } from "../../utils/fetchFromAPI";

import { categories } from "../../utils/constants";


import { TbZodiacAries, TbZodiacCancer, TbZodiacPisces, TbZodiacScorpio } from "react-icons/tb";
import { GiRam } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import './Signs.css'
import {images} from '../../constants';


import { IoFish } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";

const Pisces = () => {

    const [videos, setVideos] = useState(null);
    const [sign, setSign] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {

        fetchPisces()
          .then((data) => setSign(data))
          console.log(sign)
        }, [selectedCategory]);

        if(!sign) return (
          <div className="preloader">
              <div className="status"></div>
          </div>
        )  


  return (
    <div className="main--s aries">
      <div className="main--s2">
        <div className="main-content">
            <div className="main-header">
              {/* <p className="header-symbol-container">
                <TbZodiacPisces className="aries-symbol" size={40} />
              </p>
              <h2 className="zodiac-name aries">{sign.name}</h2> */}
              {/* <p className="zodiac-date aries">{sign.date_range}</p> */}
              <div className="zodiac-type-container pisces">
            
                <TbZodiacPisces className="aries-symbol" size={20} />
                <div className="zodiac-type aries" style={{backgroundColor: '#FC1503', cursor:'default'}}>
                  <span className="zodiac-type-text aries" style={{color: '#fff'}}>
                    {sign.name}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <IoFish size={25} />
                  <span className="zodiac-type-text aries">
                    {sign.symbol}
                  </span>
                </div>
                <div className="zodiac-type aries">
                  <IoIosWater size={25} />
                  <span className="zodiac-type-text aries">
                    {sign.element}
                  </span>
                </div>

                <div className="zodiac-planet aries">
                  <img className="zodiac-planet-size" src={images.jupiter}/>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <>
        <div className="cards-s" style={{display: 'flex', justifyContent:'space-evenly', textAlign: 'center'}}>
            <div className="card card-sm aries-card">
              <h2 className="card-header aries">Compatibility</h2>
              <p>
                {sign.compatibility.substring().split(',').map((substring, idx) => {
                  return (
                    <div key={idx}>
                      <span>{substring}</span>
                      <br/>
                    </div>
                  )
                })}
              </p>
            </div>
            <div className="card card-sm aries-card">
              <h2 className="card-header aries">Strengths</h2>
              <p>
                {sign.strengths.split(',').map((substring, idx) => {
                  return (
                    <div key={idx}>
                      <span>{substring}</span>
                      <br/>
                    </div>
                  )
                })}
              </p>
            </div>

            <div className="card card-sm aries-card">
              <h2 className="card-header aries">Weaknesses</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <div className="card-s">
      <div className="card aries-card">
        <h2 className="card-header aries aries-card-detail">About {sign.name}</h2>
        <p>{sign.about}</p>
      </div>
    </div>
  )
}

const Compatibility = () => {

  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

        if(!sign) return (
          <div className="preloader">
              <div className="status"></div>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name } Health</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name } in Love</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )   

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name} Relationships</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )    

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name} Nature</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name } Men</h2>
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

    fetchPisces()
        .then((data) => setSign(data))
        console.log(sign)
      }, [selectedCategory]);

      if(!sign) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
      )  

  return (
    <>
      <div className="card-s">
        <div className="card aries-card">
          <h2 className="card-header aries aries-card-detail">{sign.name } Women</h2>
          <p>{sign.woman}</p>
        </div>
      </div>
    </>
  )
}





const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div className="tab aries" style={{margin: '0 auto', textAlign: 'center'}}>
      <div className="tab-headers aries">
        {
          config.map((entry,index)=>(
            <div
              className={`tab-header aries ${activeTab === index ? "active" : ""} `}
              onClick={()=>setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))
        }
      </div>
      <div className="tab-body aries">
        {config[activeTab].component}
      </div>
    </div>
  )
};




export default Pisces;


