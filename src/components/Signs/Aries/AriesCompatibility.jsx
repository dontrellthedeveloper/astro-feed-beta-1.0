import React, { useEffect, useState } from 'react';
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
import { FaDAndD, FaFireAlt } from "react-icons/fa";
import {images} from '../../../constants';


export function AriesCompatibility() {
    const {id} = useParams();
    const [sign, setSign] = useState('');

    const [selectedCategory, setSelectedCategory] = useState(null);

    // console.log(id)

    useEffect(() => {
        fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
          .then((data) => setSign(data))
          console.log(sign)
    }, [id]);

    const love = sign[0];
    const planets = sign[1];
    const elements = sign[2];
    const mod = sign[3];
    const best = sign[4]



    console.log(love)

    const zodiacSign = id;
    // console.log(zodiacSign)

    if(!sign || !love || !planets || !elements) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )  

    return (
        <>
            <div className="card-s">
                <div className="card aries-card">
                    <h2 className="card-header aries aries-card-detail">    
                        Compatibility
                    </h2>



                    <div className='compatibility-main'>
                        <div>
                            <TbZodiacAries className="aries-symbol" size={40} />
                            <p className='compatibility-p aries'>Aries</p>
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
                            
                            {
                                zodiacSign ?
                                <p className='compatibility-p aries'>{zodiacSign}</p> :
                                <p className='compatibility-p aries'></p>
                                
                            }
                        </div>
                    </div>



                    <div className='compatibility-first-row'>
                        <div className='comp-sign'>
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
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Virgo</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/libra`}>
                                <TbZodiacLibra 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Libra</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/scorpio`}>
                                <TbZodiacScorpio 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Scorpio</p>
                            </Link>
                        </div>
                    </div>



                    <div className='compatibility-third-row'>
                        <div className='comp-sign'>
                            <Link to={`/aries/sagittarius`}>
                                <TbZodiacSagittarius 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Sagittarius</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/capricorn`}>
                                <TbZodiacCapricorn 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Capricorn</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/aquarius`}>
                                <TbZodiacAquarius 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Aquarius</p>
                            </Link>
                        </div>
                        <div className='comp-sign'>
                            <Link to={`/aries/pisces`}>
                                <TbZodiacPisces 
                                    className="compatibility-select aries-symbol aries" 
                                    size={30} 
                                />
                                <p className='compatibility-p aries'>Pisces</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


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
                {/* Elements -  */}
                Fire & {(zodiacSign === 'aries') ? 'Fire':''} </h2>
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
                    <p className='comp-text aries'>{elements.text}</p>
                </div>
            </div>

            <div className="card-s">
                <div className="card aries-card">
                    <h2 className="card-header aries aries-card-detail" style={{textTransform: 'capitalize'}}>
                    Modalities - Cardinal & {(
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
                <div className='compatibility-main'>
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
                <div className='compatibility-main'>
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

