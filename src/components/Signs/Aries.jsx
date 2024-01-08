import React, { useEffect, useState, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./../";
import { render } from 'react-dom';
import { useNavigate } from "react-router-dom";

import { fetchAries } from "../../utils/fetchFromAPI";

import { categories } from "../../utils/constants";
import { useParams, createSearchParams } from "react-router-dom";


import { TbZodiacAries } from "react-icons/tb";
import { GiRam } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import './Signs.css'
import {images} from '../../constants';
import { Link } from "react-router-dom";
import {AriesCompatibility} from "./Aries/AriesCompatibility";

import { HiPlusSm } from "react-icons/hi";

import { AstroContext } from "../../context/AstroContext";


const Aries = () => {
  
    const { sign,setSign, compHeader} = useContext(AstroContext);

    console.log(compHeader)

    const params = useParams();
    const [videos, setVideos] = useState(null);
    // const [sign, setSign] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    console.log(sign)





    const aries = '#29030066';
    const compBg = 
    (compHeader.name === 'Aries') ? '#29030066' :
    (compHeader.name === 'Taurus') ? '#21401566' :
    (compHeader.name === 'Gemini') ? '#32260166' :
    (compHeader.name === 'Cancer') ? '#3c3a3666' :
    (compHeader.name === 'Leo') ? '#342b0666' :
    (compHeader.name === 'Virgo') ? '#27261a66' :
    (compHeader.name === 'Libra') ? '#161b4166' :
    (compHeader.name === 'Scorpio') ? '#00000066' :
    (compHeader.name === 'Sagittarius') ? '#30192d66' :
    (compHeader.name === 'Capricorn') ? '#2a252266' :
    (compHeader.name === 'Aquarius') ? '#060f4466' :
    (compHeader.name === 'Pisces') ? '#2a331366' :
    ""

    const gradient = {
      aries: `linear-gradient(to right, ${aries}, ${compBg})`
    }

    

    
    
    useEffect(() => {
    fetchAries()
      .then((data) => setSign(data))
      console.log(sign)
    }, [selectedCategory]);

    

    // useEffect(() => {

    //   fetchAries()
    //     .then((data) => setAries(data))
    //     console.log(aries)
    //   }, []);
    
    
    
    if(!sign) return (
      <div className="preloader">
          <div className="status">...</div>
      </div>
    )  


  //   if(!compHeader) return (
  //     <div className="preloader">
  //         <div className="status"></div>
  //     </div>
  // )  



  return (
    <div className="main--s aries">
      <div className="main--s2" 
      style={{background: compHeader.name === 'Aries'|| 'Taurus' || 'Gemini' || 'Cancer' || 'Leo'|| 'Virgo' || 'Libra' || 'Scorpio' || 'Sagittarius' || 'Capricorn' || 'Aquarius' || 'Pisces' ? gradient.aries : 
        '#290300'}}
        >
        <div className="main-content">
            {/* <div className="main-header">
              <div className="zodiac-type-container aries">
            
                <TbZodiacAries className="aries-symbol" size={20} />
                <div className="zodiac-type aries">
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


              </div>  
            </div> */}
            <Tabs
              config={[
                {header: "Compatilibility", component: <Compatibility/>},
                {header: "General", component: <General/>},   
                {header: "About", component: <About/>},   
                {header: "Women", component: <Women/>},
                {header: "Men", component: <Men/>},
                {header: "Love", component: <Love/>}, 
                // {header: "Relationships", component: <Relationships/>},
                // {header: "Career", component: <Career/>},
                // {header: "Nature", component: <Nature/>},
                // {header: "Health", component: <Health/>},
              ]}
            />
        </div>
      </div>
    </div>

  );
};

const Compatibility = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");



  useEffect(() => {
      fetchAries()
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

          <AriesCompatibility/>
    </>
  )
}


const General = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

      fetchAries()
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
        <div className="cards-s" style={{display: 'flex', justifyContent:'space-evenly', textAlign: 'center'}}>
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


    </>
  )
}



const About = () => {
  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

      fetchAries()
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
      <div className="card aries-card">
        <h2 className="card-header aries aries-card-detail">About {sign.name}</h2>
        <p>{sign.about}</p>
      </div>
    </div>
  )
}

const Compatibility2 = () => {

  const [sign, setSign] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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

      fetchAries()
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




export default Aries;



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