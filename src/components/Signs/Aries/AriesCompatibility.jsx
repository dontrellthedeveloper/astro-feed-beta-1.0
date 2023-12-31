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

export function AriesCompatibility() {
    const {id} = useParams();
    const [sign, setSign] = useState('');

    const [selectedCategory, setSelectedCategory] = useState(null);

    console.log(id)

    useEffect(() => {
        fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
          .then((data) => setSign(data))
          console.log(sign)
        }, []);

        const zodiacSign = id;
        console.log(zodiacSign)

        if(!sign) return (
          <div className="preloader">
              <div className="status"></div>
          </div>
        )  
    return (
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
                            <TbZodiacGemini className="aries-symbol" size={40} /> :
                            (zodiacSign === 'cancer') ?
                            <TbZodiacCancer className="aries-symbol" size={40} /> :
                            (zodiacSign === 'leo') ?
                            <TbZodiacLeo className="aries-symbol" size={40} /> :
                            (zodiacSign === 'virgo') ?
                            <TbZodiacVirgo className="aries-symbol" size={40} /> :
                            (zodiacSign === 'libra') ?
                            <TbZodiacLibra className="aries-symbol" size={40} /> :
                            (zodiacSign === 'scorpio') ?
                            <TbZodiacScorpio className="aries-symbol" size={40} /> :
                            (zodiacSign === 'sagittarius') ?
                            <TbZodiacSagittarius className="aries-symbol" size={40} /> :
                            (zodiacSign === 'capricorn') ?
                            <TbZodiacCapricorn className="aries-symbol" size={40} /> :
                            (zodiacSign === 'aquarius') ?
                            <TbZodiacAquarius className="aries-symbol" size={40} /> :
                            (zodiacSign === 'pisces') ?
                            <TbZodiacPisces className="aries-symbol" size={40} /> :
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
                                className="compatibility-select aries-symbol aries" 
                                size={30} 
                            />
                            <p className='compatibility-p aries'>Leo</p>
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

