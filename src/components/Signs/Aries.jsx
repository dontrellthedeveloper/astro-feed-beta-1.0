import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./../";
import { render } from 'react-dom';


import { fetchAries } from "../../utils/fetchFromAPI";

import { categories } from "../../utils/constants";

import './Signs.css'
import { TbZodiacAries } from "react-icons/tb";

import { FaFireAlt } from "react-icons/fa";
import {images} from '../../constants';



const Aries = () => {

    const [videos, setVideos] = useState(null);
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
    <div className="main--s">
        <div style={{marginBottom: '50px', marginTop: '50px'}}>
          <p style={{textAlign: 'center', color: '#FC1503'}}>
          {/* {sign.symbol} */}
          <TbZodiacAries size={40} />
          </p>
          <h2 style={{textAlign: 'center', color: '#650801'}}>{sign.name}</h2>
          <p style={{textAlign: 'center', color: '#7e0a02', fontWeight: '500'}}>{sign.date_range}</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly', maxWidth: '220px', margin: '0 auto', paddingTop: '5px'}}>
            <div style={{textAlign: 'center', color: '#FC1503', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <FaFireAlt size={25} />
              <span style={{paddingLeft: '10px', color: '#7e0a02', fontWeight: '800'}}>{sign.element}
              </span>
            </div>
  
            <div style={{textAlign: 'center', color: '#7e0a02', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={images.mars} style={{width: '30px'}}/>
              <span style={{paddingLeft: '10px', color: '#7e0a02', fontWeight: '800'}}>      
                {sign.ruling_planet}
              </span>
            </div>
          </div>  
        </div>
        

        {/* <br/> */}
        <Tabs
          config={[
            {header: "About", component: <About/>},   
            {header: "Women", component: <Women/>},
            {header: "Men", component: <Men/>},
            {header: "Love", component: <Love/>}, 
            {header: "Career", component: <Career/>},
            {header: "Nature", component: <Nature/>},
            {header: "Health", component: <Health/>},
            {header: "Relationships", component: <Relationships/>},
          ]}
        />


        {/* <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Health
          <span style={{ color: "#FC1503" }}>{sign.health}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Love
          <span style={{ color: "#FC1503" }}>{sign.love}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Men
          <span style={{ color: "#FC1503" }}>{sign.man}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Women
          <span style={{ color: "#FC1503" }}>{sign.woman}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Nature
          <span style={{ color: "#FC1503" }}>{sign.nature}</span>
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Relationship
          <span style={{ color: "#FC1503" }}>{sign.relationship}</span>
        </Typography>
        <br/>
        <br/> */}

    </div>
  );
};



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
    <>
      <h2>About {sign.name}</h2>
      <p>{sign.about}</p>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
        <div style={{width: '200px', color: '#7e0a02'}}>
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
        <div style={{width: '200px', color: '#7e0a02'}}>
          <h2>Strengths</h2>
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

        <div style={{width: '200px', color: '#7e0a02'}}>
          <h2>Weaknesses</h2>
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
      <h2>{sign.name } Health</h2>
      <p>{sign.health}</p>
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
      <h2>{sign.name } in Love</h2>
      <p>{sign.love}</p>
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
      <h2>{sign.name } Relationships</h2>
      <p>{sign.relationship}</p>
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
      <h2>{sign.name } Nature</h2>
      <p>{sign.nature}</p>
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
      <h2>{sign.name } Men</h2>
      <p>{sign.man}</p>
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
      <h2>{sign.name } Women</h2>
      <p>{sign.woman}</p>
    </>
  )
}





const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div className="tab" style={{margin: '0 auto', textAlign: 'center'}}>
      <div className="tab-headers">
        {
          config.map((entry,index)=>(
            <div
              className={`tab-header ${activeTab === index ? "active" : ""} `}
              onClick={()=>setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))
        }
      </div>
      <div className="tab-body">
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