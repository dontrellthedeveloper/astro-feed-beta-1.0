import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchAriesCompatability } from '../../../utils/fetchCompatibility';
import { 
    TbZodiacAquarius, 
    TbZodiacAries, 
    TbZodiacCancer, 
    TbZodiacCapricorn, 
    TbZodiacGemini, 
    TbZodiacLeo, 
    TbZodiacLibra, 
    TbZodiacPisces, 
    TbZodiacSagittarius, 
    TbZodiacScorpio, 
    TbZodiacTaurus, 
    TbZodiacVirgo 
} from 'react-icons/tb';
import { HiPlusSm } from 'react-icons/hi';
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaDAndD, FaFireAlt, FaWind } from "react-icons/fa";
import {images} from '../../../constants';
import { FaEarthAmericas } from 'react-icons/fa6';
import { IoIosWater } from 'react-icons/io';

import { AstroContext } from "../../../context/AstroContext";


export function AriesCompInfo({sign, setSign, id}) {
   
    // const [sign, setSign] = useState('');
    // const compatabilityId = {id}
    // console.log(compatabilityId.id)
    // console.log(id)

    // const { compatibility,setCompatibility} = useContext(AstroContext);

    // const {id} = useParams();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // console.log(id)

    useEffect(() => {
        fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
          .then((data) => setSign(data))
        //   console.log(compatibility)
    }, [id]);

    const zodiacComp = sign;

    const love = zodiacComp[0];
    const planets = zodiacComp[1];
    const elements = zodiacComp[2];
    const mod = zodiacComp[3];
    const best = zodiacComp[4]



    console.log(love)

    const zodiacSign = id;
    // console.log(zodiacSign)

    if(!love || !planets || !elements || !mod || !best) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )  

    return (
        <div>                            
            <div className="card-s">
                <div className="card aries-card">
                <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>Aries & {zodiacSign} Relationship </h2>

                <div className='compatibility-main detail'>
                        <div>
                            <TbZodiacAries className="aries-symbol" size={40} />
                            {/* <p className='compatibility-p aries'>Aries</p> */}
                        </div>
                        <div>
                            <HiPlusSm size={30} />
                            
                        </div>
                        <div>
                            {
                                (zodiacSign === 'aries') ?
                                <TbZodiacAries className="aries-symbol" size={40} /> :
                                (zodiacSign === 'taurus') ?
                                <TbZodiacTaurus className="taurus-symbol" size={40} /> :
                                (zodiacSign === 'gemini') ?
                                <TbZodiacGemini className="gemini-symbol" size={40} /> :
                                (zodiacSign === 'cancer') ?
                                <TbZodiacCancer className="cancer-symbol" size={40} /> :
                                (zodiacSign === 'leo') ?
                                <TbZodiacLeo className="leo-symbol" size={40} /> :
                                (zodiacSign === 'virgo') ?
                                <TbZodiacVirgo className="virgo-symbol" size={40} /> :
                                (zodiacSign === 'libra') ?
                                <TbZodiacLibra className="libra-symbol" size={40} /> :
                                (zodiacSign === 'scorpio') ?
                                <TbZodiacScorpio className="scorpio-symbol" size={40} /> :
                                (zodiacSign === 'sagittarius') ?
                                <TbZodiacSagittarius className="sagittarius-symbol" size={40} /> :
                                (zodiacSign === 'capricorn') ?
                                <TbZodiacCapricorn className="capricorn-symbol" size={40} /> :
                                (zodiacSign === 'aquarius') ?
                                <TbZodiacAquarius className="aquarius-symbol" size={40} /> :
                                (zodiacSign === 'pisces') ?
                                <TbZodiacPisces className="pisces-symbol" size={40} /> :
                                <MdOutlineQuestionMark 
                                className="aries-symbol question-mark aries" 
                                size={40} 
                                /> 

                            }
                            
                            {/* {
                                zodiacSign ?
                                <p className='compatibility-p aries'>{zodiacSign}</p> :
                                <p className='compatibility-p aries'></p>
                                
                            } */}
                        </div>
                    </div>
                            
                    {/* <h3>{love.header}</h3> */}
                    <p className='comp-text aries'>{love.text}</p>
                </div>
            </div>

            <div className="card-s">
                <div className="card aries-card">
                <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>
                {/* Elements -  */}
                Fire & 
                
                {
                            (zodiacSign === 'aries') 
                            ? 
                            ' Fire ' : 
                            (zodiacSign === 'taurus') 
                            ? 
                            ' Earth ' : 
                            (zodiacSign === 'gemini') 
                            ? 
                            ' Air ' : 
                            (zodiacSign === 'cancer') 
                            ? 
                            ' Water ' : 
                            (zodiacSign === 'leo') 
                            ? 
                            ' Fire ' : 
                            (zodiacSign === 'virgo') 
                            ? 
                            ' Earth ' : 
                            (zodiacSign === 'libra') 
                            ? 
                            ' Air ' : 
                            (zodiacSign === 'scorpio') 
                            ? 
                            ' Water ' : 
                            (zodiacSign === 'sagittarius') 
                            ? 
                            ' Fire ' : 
                            (zodiacSign === 'capricorn') 
                            ? 
                            ' Earth ' : 
                            (zodiacSign === 'aquarius') 
                            ? 
                            ' Air ' : 
                            (zodiacSign === 'pisces') 
                            ? 
                            ' Water ' : 
                            ""
                            } 
                
                </h2>
                <div className='compatibility-main detail'>
                        <div className="">
                            <FaFireAlt className="aries-symbol" size={40} />

                            {/* <p>Mars</p> */}
                        </div> 
                        <div>
                            <HiPlusSm size={30} />
                            
                        </div>
                        <div>
                            {
                                (zodiacSign === 'aries') ?
                                <FaFireAlt className="aries-symbol" size={40} />
                                :
                                (zodiacSign === 'taurus') ?
                                <FaEarthAmericas className="taurus-symbol" size={40} /> :
                                (zodiacSign === 'gemini') ?
                                <FaWind className="gemini-symbol" size={40} /> :
                                (zodiacSign === 'cancer') ?
                                <IoIosWater className="cancer-symbol" size={40} /> :
                                (zodiacSign === 'leo') ?
                                <FaFireAlt className="leo-symbol" size={40} /> :
                                (zodiacSign === 'virgo') ?
                                <FaEarthAmericas className="virgo-symbol" size={40} /> :
                                (zodiacSign === 'libra') ?
                                <FaWind className="libra-symbol" size={40} /> :
                                (zodiacSign === 'scorpio') ?
                                <IoIosWater className="scorpio-symbol" size={40} /> :
                                (zodiacSign === 'sagittarius') ?
                                <FaFireAlt className="sagittarius-symbol" size={40} /> :
                                (zodiacSign === 'capricorn') ?
                                <FaEarthAmericas className="capricorn-symbol" size={40} /> :
                                (zodiacSign === 'aquarius') ?
                                <FaWind className="aquarius-symbol" size={40} /> :
                                (zodiacSign === 'pisces') ?
                                <IoIosWater className="pisces-symbol" size={40} /> :
                                <MdOutlineQuestionMark 
                                className="aries-symbol question-mark aries" 
                                size={40} 
                                /> 

                            }
                            
                            {/* {
                                (zodiacSign === 'aries') ?
                                <p className='compatibility-p aries'>Mars</p> :
                                <p className='compatibility-p aries'></p>
                                
                            } */}
                        </div>
                    </div>
                            
                    {/* <h3>{love.header}</h3> */}
                    <p className='comp-text aries'>{elements.text}</p>
                </div>
            </div>


            <div className="card-s">
                <div className="card aries-card">
                <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>
                    {/* Planets -  */}
                    Mars & 
                        {
                            (zodiacSign === 'aries') 
                            ? 
                            ' Mars ' : 
                            (zodiacSign === 'taurus') 
                            ? 
                            ' Venus ' : 
                            (zodiacSign === 'gemini') 
                            ? 
                            ' Mercury ' : 
                            (zodiacSign === 'cancer') 
                            ? 
                            ' Moon ' : 
                            (zodiacSign === 'leo') 
                            ? 
                            ' Sun ' : 
                            (zodiacSign === 'virgo') 
                            ? 
                            ' Mercury ' : 
                            (zodiacSign === 'libra') 
                            ? 
                            ' Venus ' : 
                            (zodiacSign === 'scorpio') 
                            ? 
                            ' Mars ' : 
                            (zodiacSign === 'sagittarius') 
                            ? 
                            ' Jupiter ' : 
                            (zodiacSign === 'capricorn') 
                            ? 
                            ' Saturn ' : 
                            (zodiacSign === 'aquarius') 
                            ? 
                            ' Uranus ' : 
                            (zodiacSign === 'pisces') 
                            ? 
                            ' Jupiter ' : 
                            ""
                            } 
                     
                    </h2>

                <div className='compatibility-main detail'>
                        <div className="">
                            <img className="zodiac-planet-size planet-size-comp" src={images.mars}/>
                            <span className="zodiac-planet-text aries">      
                                {sign.ruling_planet}
                                
                            </span>
                            {/* <p>Mars</p> */}
                        </div> 
                        <div>
                            <HiPlusSm size={30} />
                            
                        </div>
                        <div>
                            {
                                (zodiacSign === 'aries') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mars}/>
                                    <span className="zodiac-planet-text aries">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'taurus') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.venus}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'gemini') ?
                                
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mercury}/>
                                    <span className="zodiac-planet-text gemini">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'cancer') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" style={{width: '75px'}} src={images.moon}/>
                                    <span className="zodiac-planet-text cancer">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'leo') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" style={{width: '85px'}} src={images.sun}/>
                                    <span className="zodiac-planet-text leo">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'virgo') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mercury}/>
                                    <span className="zodiac-planet-text virgo">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'libra') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.venus}/>
                                    <span className="zodiac-planet-text libra">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>  
                                :
                                (zodiacSign === 'scorpio') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mars}/>
                                    <span className="zodiac-planet-text scorpio">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'sagittarius') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.jupiter}/>
                                    <span className="zodiac-planet-text sagittarius">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>  
                                :
                                (zodiacSign === 'capricorn') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.saturn}/>
                                    <span className="zodiac-planet-text capricorn">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'aquarius') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.uranus}/>
                                    <span className="zodiac-planet-text aquarius">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>  
                                :
                                (zodiacSign === 'pisces') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.saturn}/>
                                    <span className="zodiac-planet-text pisces">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>  
                                :
                                <MdOutlineQuestionMark 
                                className="aries-symbol question-mark aries" 
                                size={40} 
                                /> 

                            }
                            
                            {/* {
                                (zodiacSign === 'aries') ?
                                <p className='compatibility-p aries'>Mars</p> :
                                <p className='compatibility-p aries'></p>
                                
                            } */}
                        </div>
                    </div>
                            
                    {/* <h3>{love.header}</h3> */}
                    <p className='comp-text aries'>{planets.text}</p>
                </div>
            </div>


            <div className="card-s">
                <div className="card aries-card">
                    <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>
                    Cardinal & {(
                        zodiacSign === 'aries' ? 'cardinal':  
                        zodiacSign === 'taurus' ? 'fixed': 
                        zodiacSign === 'gemini' ? 'mutable': 
                        zodiacSign === 'cancer' ? 'cardinal': 
                        zodiacSign === 'leo' ? 'fixed': 
                        zodiacSign === 'virgo' ? 'mutable': 
                        zodiacSign === 'libra' ? 'cardinal': 
                        zodiacSign === 'scorpio' ? 'fixed': 
                        zodiacSign === 'sagittarius' ? 'mutable': 
                        zodiacSign === 'capricorn' ? 'cardinal': 
                        zodiacSign === 'aquarius' ? 'fixed': 
                        zodiacSign === 'pisces' ? 'mutable': 
                        ''
                        )} 
                    </h2>
                <div className='compatibility-main detail'>
                        <div className="">
                            <img className="zodiac-planet-size planet-size-comp" src={images.cardinal}/>
                            <span className="zodiac-planet-text aries">      
                                {sign.ruling_planet}
                                
                            </span>
                            {/* <p>Cardinal</p> */}
                        </div> 
                        <div>
                            <HiPlusSm size={30} />
                            
                        </div>
                        <div>
                            {
                                (zodiacSign === 'aries') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.cardinal}/>
                                    <span className="zodiac-planet-text aries">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'taurus') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.fixed}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div> 
                                :
                                (zodiacSign === 'gemini') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mutable}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'cancer') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.cardinal}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'leo') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.fixed}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'virgo') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mutable}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'libra') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.cardinal}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'scorpio') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.fixed}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'sagittarius') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mutable}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'capricorn') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.cardinal}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'aquarius') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.fixed}/>
                                    <span className="zodiac-planet-text taurus">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                (zodiacSign === 'pisces') ?
                                <div className="">
                                    <img className="zodiac-planet-size planet-size-comp" src={images.mutable}/>
                                    <span className="zodiac-planet-text pisces">      
                                        {sign.ruling_planet}
                                    </span>
                                </div>                                 :
                                <MdOutlineQuestionMark 
                                className="aries-symbol question-mark aries" 
                                size={40} 
                                /> 

                            }
                            
                            {/* {
                                (zodiacSign === 'aries') ?
                                <p className='compatibility-p aries'>Mars</p> :
                                <p className='compatibility-p aries'></p>
                                
                            } */}
                        </div>
                    </div>
                            
                    {/* <h3>{love.header}</h3> */}
                    <p className='comp-text aries'>{mod.text}</p>
                </div>
            </div>

            <div className="card-s">
                <div className="card aries-card">
                <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>Best Aspect of Aries & {zodiacSign} </h2>
                <div className='compatibility-main detail'>
                        <div className="">
                        <div>
                            <TbZodiacAries className="aries-symbol" size={40} />
                            {/* <p className='compatibility-p aries'>Aries</p> */}
                        </div>
                            {/* <p>Aries</p> */}
                        </div> 
                        <div>
                            <HiPlusSm size={30} />
                            
                        </div>
                        <div>
                            {
                                (zodiacSign === 'aries') ?
                                <TbZodiacAries className="aries-symbol" size={40} /> :
                                (zodiacSign === 'taurus') ?
                                <TbZodiacTaurus className="taurus-symbol" size={40} /> :
                                (zodiacSign === 'gemini') ?
                                <TbZodiacGemini className="gemini-symbol" size={40} /> :
                                (zodiacSign === 'cancer') ?
                                <TbZodiacCancer className="cancer-symbol" size={40} /> :
                                (zodiacSign === 'leo') ?
                                <TbZodiacLeo className="leo-symbol" size={40} /> :
                                (zodiacSign === 'virgo') ?
                                <TbZodiacVirgo className="virgo-symbol" size={40} /> :
                                (zodiacSign === 'libra') ?
                                <TbZodiacLibra className="libra-symbol" size={40} /> :
                                (zodiacSign === 'scorpio') ?
                                <TbZodiacScorpio className="scorpio-symbol" size={40} /> :
                                (zodiacSign === 'sagittarius') ?
                                <TbZodiacSagittarius className="sagittarius-symbol" size={40} /> :
                                (zodiacSign === 'capricorn') ?
                                <TbZodiacCapricorn className="capricorn-symbol" size={40} /> :
                                (zodiacSign === 'aquarius') ?
                                <TbZodiacAquarius className="aquarius-symbol" size={40} /> :
                                (zodiacSign === 'pisces') ?
                                <TbZodiacPisces className="pisces-symbol" size={40} /> :
                                <MdOutlineQuestionMark 
                                className="aries-symbol question-mark aries" 
                                size={40} 
                                /> 

                            }
                            
                            {/* {
                                (zodiacSign === 'aries') ?
                                <p className='compatibility-p aries'>Mars</p> :
                                <p className='compatibility-p aries'></p>
                                
                            } */}
                        </div>
                    </div>
                            
                    {/* <h3>{love.header}</h3> */}
                    <p className='comp-text aries'>{best.text}</p>
                </div>
            </div>
        </div>

    );
};





















// export function AriesTaurusCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/taurus`}>
//            <TbZodiacTaurus style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Taurus</p>
//             </Link>
//         </>
//     );
// };

// export function AriesGeminiCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/gemini`}>
//            <TbZodiacGemini style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Gemini</p>
//             </Link>
//         </>
//     );
// };

// export function AriesCancerCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/cancer`}>
//            <TbZodiacCancer style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Cancer</p>
//             </Link>
//         </>
//     );
// };

// export function AriesLeoCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/leo`}>
//                 <TbZodiacLeo style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Leo</p>
//             </Link>
//         </>
//     );
// };

// export function AriesVirgoCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/virgo`}>
//            <TbZodiacVirgo style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Virgo</p>
//             </Link>
//         </>
//     );
// };

// export function AriesLibraCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/libra`}>
//            <TbZodiacLibra style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Libra</p>
//             </Link>
//         </>
//     );
// };

// export function AriesScorpioCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/scorpio`}>
//            <TbZodiacScorpio style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Scorpio</p>
//             </Link>
//         </>
//     );
// };

// export function AriesSagittariusCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/sagittarius`}>
//            <TbZodiacSagittarius style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//               <p className='compatibility-p'>Sagittarius</p>
//             </Link>
//         </>
//     );
// };

// export function AriesCapricornCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/capricorn`}>
//                 <TbZodiacCapricorn style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//                 <p className='compatibility-p'>Capricorn</p>
//             </Link>
//         </>
//     );
// };

// export function AriesAquariusCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/aquarius`}>
//                 <TbZodiacAquarius style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//                 <p className='compatibility-p'>Aquarius</p>
//             </Link>
//         </>
//     );
// };

// export function AriesPiscesCompatibility() {
//     const {id} = useParams();

//     const [sign, setSign] = useState('');
//     useEffect(() => {

//         fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
//           .then((data) => setSign(data))
//           console.log(sign)
//         }, []);

//         if(!sign) return (
//           <div className="preloader">
//               <div className="status"></div>
//           </div>
//         )  

//     return (
//         <>
//            <Link to={`/aries/pisces`}>
//                 <TbZodiacPisces style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
//                 <p className='compatibility-p'>Pisces</p>
//             </Link>
//         </>
//     );
// };

