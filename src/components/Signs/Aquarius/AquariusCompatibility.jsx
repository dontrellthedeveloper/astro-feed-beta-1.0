import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchAriesCompatability, fetchCompSign } from '../../../utils/fetchCompatibility';
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
import { AriesCompInfo } from './AriesCompInfo';
import { fetchAries } from '../../../utils/fetchFromAPI';


export function AriesCompatibility() {
   
    const [sign, setSign] = useState('');
    // const compatabilityId = {id}
    // console.log(compatabilityId.id)
    // console.log(id)

    const { compatibility,setCompatibility, compHeader, setCompHeader} = useContext(AstroContext);

    // const {id} = useParams();
    const {id} = useParams();
    
    const zodiacSign = id;
    console.log(zodiacSign)
    const [selectedCategory, setSelectedCategory] = useState(null);

    // console.log(id)

    useEffect(() => {
        setCompHeader(id)
        fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
          .then((data) => setCompatibility(data))
        //   console.log(compatibility)
    }, [id]);

    useEffect(() => {
        fetchCompSign(`sign?s=${id}`)
          .then((data) => setCompHeader(data))
          console.log(sign)
        }, [id]);

    console.log(compHeader)

    const zodiacComp = compatibility;

    // const love = zodiacComp[0];
    // const planets = zodiacComp[1];
    // const elements = zodiacComp[2];
    // const mod = zodiacComp[3];
    // const best = zodiacComp[4]



    // console.log(love)



    // if(!love || !planets || !elements || !mod || !best) return (
    //     <div className="preloader">
    //         <div className="status"></div>
    //     </div>
    // )  

    // if(!compHeader) return (
    //     <div className="preloader">
    //         <div className="status"></div>
    //     </div>
    // )  

    return (
        <>
            <div className="card-s">
                <div className="card aries-card">




                    <div className='compatibility-main' style={{maxWidth: '800px'}}>
                        <div>
                            <TbZodiacAries className="aries-symbol" size={40} />
                            <p className='compatibility-p aries'>Aries</p>
                        </div>
                        <div>
                            {/* <HiPlusSm size={30} /> */}
                            <h2 className="card-header aries aries-card-detail header">    
                                Compatibility
                            </h2>
                        </div>
                        <div>
                            <Link to='/aries'>
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
                            </Link>
                            {
                                zodiacSign ?
                                <p className='compatibility-p aries'>{zodiacSign}</p> :
                                <p className='compatibility-p aries'></p>
                                
                            }
                        </div>
                    </div>



                    <div className='compatibility-first-row'>
                        <div className='comp-sign' >
                            <Link to={`/aries/aries`}>
                                <TbZodiacAries 
                                    className="compatibility-select aries-symbol aries-symbol-sm aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Aries</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/taurus`}>
                                <TbZodiacTaurus  
                                    className="compatibility-select taurus-symbol taurus-symbol-sm taurus" 
                                    size={30} 
                                />
                                <p className='compatibility-p taurus'>Taurus</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/gemini`}>
                                <TbZodiacGemini 
                                    className="compatibility-select gemini-symbol gemini-symbol-sm gemini" 
                                    size={30} 
                                />
                                <p className='compatibility-p gemini'>Gemini</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/cancer`}>
                                <TbZodiacCancer 
                                    className="compatibility-select cancer-symbol cancer-symbol-sm cancer" 
                                    size={30} 
                                />
                                <p className='compatibility-p cancer'>Cancer</p>
                            </Link>
                        </div>
                    </div>



                    <div className='compatibility-second-row'>
                        <div className='comp-sign'>
                            <Link to={`/aries/leo`}>
                                <TbZodiacLeo 
                                    className="compatibility-select leo-symbol leo-symbol-sm leo" 
                                    size={30} 
                                />
                                <p className='compatibility-p leo'>Leo</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/virgo`}>
                                <TbZodiacVirgo 
                                    className="compatibility-select virgo-symbol virgo-symbol-sm virgo" 
                                    size={30} 
                                />
                                <p className='compatibility-p virgo'>Virgo</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/libra`}>
                                <TbZodiacLibra 
                                    className="compatibility-select libra-symbol libra-symbol-sm libra" 
                                    size={30} 
                                />
                                <p className='compatibility-p libra'>Libra</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/scorpio`}>
                                <TbZodiacScorpio 
                                    className="compatibility-select scorpio-symbol scorpio-symbol-sm scorpio" 
                                    size={30} 
                                />
                                <p className='compatibility-p scorpio'>Scorpio</p>
                            </Link>
                        </div>
                    </div>



                    <div className='compatibility-third-row'>
                        <div className='comp-sign'>
                            <Link to={`/aries/sagittarius`}>
                                <TbZodiacSagittarius 
                                    className="compatibility-select sagittarius-symbol sagittarius-symbol-sm sagittarius" 
                                    size={30} 
                                />
                                <p className='compatibility-p sagittarius'>Sagittarius</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/capricorn`}>
                                <TbZodiacCapricorn 
                                    className="compatibility-select capricorn-symbol capricorn-symbol-sm capricorn" 
                                    size={30} 
                                />
                                <p className='compatibility-p capricorn'>Capricorn</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/aquarius`}>
                                <TbZodiacAquarius 
                                    className="compatibility-select aquarius-symbol aquarius-symbol-sm aquarius" 
                                    size={30} 
                                />
                                <p className='compatibility-p aquarius'>Aquarius</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/pisces`}>
                                <TbZodiacPisces 
                                    className="compatibility-select pisces-symbol pisces-symbol-sm pisces" 
                                    size={30} 
                                />
                                <p className='compatibility-p pisces'>Pisces</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>                      

           <AriesCompInfo sign={sign} setSign={setSign} id={id} />                 





















































        </>

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

