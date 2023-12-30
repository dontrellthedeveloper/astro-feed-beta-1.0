import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";

import {useParams,useHistory, Link } from "react-router-dom";


const Categories = ({selectedCategory, setSelectedCategory}) => (

  
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      backgroundColor: '#000'
    }}
  >
    {/* {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))} */}
      <Link to={`/aries`}>
        <button
          className="category-btn-aries"
          onClick={() => setSelectedCategory("aries")}
          style={{
            background: "aries" === selectedCategory && "#F33A25",
            color: "white",
          }}
        >
         
          <span style={{ color: "aries" === selectedCategory ? "white" : "#F33A25", marginRight: "15px" }}>
          <TbZodiacAries />
          </span>
          <span style={{ opacity: "aries" === selectedCategory ? "1" : "0.8" }}>
              Aries
          </span>
     
        </button>
      </Link>
      <Link to={`/taurus`}>
            <button
              className="category-btn-taurus"
              onClick={() => setSelectedCategory("taurus")}
              style={{
                background: "taurus" === selectedCategory && "#65BB45",
                color: "white",
              }}
            >
                    
              <span style={{ color: "taurus" === selectedCategory ? "white" : "#65BB45", marginRight: "15px" }}>
              <TbZodiacTaurus />
              </span>
              <span style={{ opacity: "taurus" === selectedCategory ? "1" : "0.8" }}>
              taurus
              </span>

            </button>
      </Link>
      <Link to={`/gemini`}>
        <button
          className="category-btn-gemini"
          onClick={() => setSelectedCategory("gemini")}
          style={{
            background: "gemini" === selectedCategory && "#FEBC04",
            color: "white",
          }}
        >
          <span style={{ color: "gemini" === selectedCategory ? "white" : "#FEBC04", marginRight: "15px" }}>
          <TbZodiacGemini />
          </span>
          <span style={{ opacity: "gemini" === selectedCategory ? "1" : "0.8" }}>
          gemini
          </span>
        </button>
      </Link>

      <Link to={`/cancer`}>
        <button
          className="category-btn-cancer"
          onClick={() => setSelectedCategory("cancer")}
          style={{
            background: "cancer" === selectedCategory && "#DDDCDA",
            color: "white",
          }}
        >
          <span style={{ color: "cancer" === selectedCategory ? "white" : "#DDDCDA", marginRight: "15px" }}>
          <TbZodiacCancer />
          </span>
          <span style={{ opacity: "cancer" === selectedCategory ? "1" : "0.8" }}>
          cancer
          </span>
        </button>
      </Link>  
      <Link to={`/leo`}>
        <button
          className="category-btn-leo"
          onClick={() => setSelectedCategory("leo")}
          style={{
            background: "leo" === selectedCategory && "#EDDD96",
            color: "white",
          }}
        >
          <span style={{ color: "leo" === selectedCategory ? "white" : "#EDDD96", marginRight: "15px" }}>
          <TbZodiacLeo />
          </span>
          <span style={{ opacity: "leo" === selectedCategory ? "1" : "0.8" }}>
          leo
          </span>
        </button>
      </Link>    
      <Link to={`/virgo`}>
        <button
          className="category-btn-virgo"
          onClick={() => setSelectedCategory("virgo")}
          style={{
            background: "virgo" === selectedCategory && "#848259",
            color: "white",
          }}
        >
          <span style={{ color: "virgo" === selectedCategory ? "white" : "#848259", marginRight: "15px" }}>
          <TbZodiacVirgo />
          </span>
          <span style={{ opacity: "virgo" === selectedCategory ? "1" : "0.8" }}>
          virgo
          </span>
        </button>
      </Link>    
      <Link to={`/libra`}>
        <button
          className="category-btn-libra"
          onClick={() => setSelectedCategory("libra")}
          style={{
            background: "libra" === selectedCategory && "#B8BEE7",
            color: "white",
          }}
        >
          <span style={{ color: "libra" === selectedCategory ? "white" : "#B8BEE7", marginRight: "15px" }}>
          <TbZodiacLibra />
          </span>
          <span style={{ opacity: "libra" === selectedCategory ? "1" : "0.8" }}>
          libra
          </span>
        </button>
      </Link>     
      <Link to={`/scorpio`}>
        <button
          className="category-btn-scorpio"
          onClick={() => setSelectedCategory("scorpio")}
          style={{
            background: "scorpio" === selectedCategory && "#000",
            color: "white",
          }}
        >
          <span style={{ color: "scorpio" === selectedCategory ? "white" : "white", marginRight: "15px" }}>
          <TbZodiacScorpio />
          </span>
          <span style={{ opacity: "scorpio" === selectedCategory ? "1" : "0.8" }}>
          scorpio
          </span>
        </button>
      </Link>
      <Link to={`/sagittarius`}>
        <button
          className="category-btn-sag"
          onClick={() => setSelectedCategory("sagittarius")}
          style={{
            background: "sagittarius" === selectedCategory && "#984F8E",
            color: "white",
          }}
        >
          <span style={{ color: "sagittarius" === selectedCategory ? "white" : "#984F8E", marginRight: "15px" }}>
          <TbZodiacSagittarius />
          </span>
          <span style={{ opacity: "sagittarius" === selectedCategory ? "1" : "0.8" }}>
          sagittarius
          </span>
        </button>
      </Link>
      <Link to={`/capricorn`}>
        <button
          className="category-btn-cap"
          onClick={() => setSelectedCategory("capricorn")}
          style={{
            background: "capricorn" === selectedCategory && "#7A6E64",
            color: "white",
          }}
        >
          <span style={{ color: "capricorn" === selectedCategory ? "white" : "#7A6E64", marginRight: "15px" }}>
          <TbZodiacCapricorn />
          </span>
          <span style={{ opacity: "capricorn" === selectedCategory ? "1" : "0.8" }}>
              capricorn
          </span>
        </button>
      </Link>
      <Link to={`/aquarius`}>
        <button
          className="category-btn-aq"
          onClick={() => setSelectedCategory("aquarius")}
          style={{
            background: "aquarius" === selectedCategory && "#4A62EF",
            color: "white",
          }}
        >
          <span style={{ color: "aquarius" === selectedCategory ? "white" : "#4A62EF", marginRight: "15px" }}>
          <TbZodiacAquarius />
          </span>
          <span style={{ opacity: "aquarius" === selectedCategory ? "1" : "0.8" }}>
              aquarius
          </span>
        </button>
      </Link>
      <Link to={`/pisces`}>
        <button
          className="category-btn-pisces"
          onClick={() => setSelectedCategory("pisces")}
          style={{
            background: "pisces" === selectedCategory && "#B6CF79",
            color: "white",
          }}
        >
          <span style={{ color: "pisces" === selectedCategory ? "white" : "#B6CF79", marginRight: "15px" }}>
          <TbZodiacPisces />
          </span>
          <span style={{ opacity: "pisces" === selectedCategory ? "1" : "0.8" }}>
          pisces
          </span>
        </button>
      </Link>
  </Stack>
);

export default Categories;