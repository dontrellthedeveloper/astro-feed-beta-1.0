import React, { useEffect, useState } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchAriesCompatability } from '../../../utils/fetchCompatibility';
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from 'react-icons/tb';
import { HiPlusSm } from 'react-icons/hi';
import { FaQuestion } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";

export function AriesCompatibility() {
    const {id} = useParams();
    const params = useParams();
    const [sign, setSign] = useState('');

    console.log(id)

    useEffect(() => {
        fetchAriesCompatability(`affinity?sign1=aries&sign2=${id}`)
          .then((data) => setSign(data))
          console.log(sign)
        }, []);

        if(!sign) return (
          <div className="preloader">
              <div className="status"></div>
          </div>
        )  
    return (
        <div className="card-s">
        <div className="card aries-card">
          <h2 style={{textAlign: 'center'}} className="card-header aries aries-card-detail"> Compatibility</h2>
          <div style={{display: 'flex',justifyContent: 'space-evenly', textAlign: 'center', padding: '40px 40px 20px 40px', maxWidth: '300px', margin: '0 auto', alignItems: 'baseline'}}>
            <div>
              <>
              <TbZodiacAries className="aries-symbol" size={40} />
                </>
                <p className='compatibility-p'>Aries</p>
            </div>
            <div>
              <HiPlusSm size={30} />
            </div>
            <div>
              <MdOutlineQuestionMark style={{backgroundColor: '#fff3f2',
    color: '#7e0a02'}} className="aries-symbol" size={40} />
                <p className='compatibility-p'>_______</p>
            </div>
          </div>
          <div style={{display: 'flex',justifyContent: 'space-evenly', textAlign: 'center', padding: '10px 40px 20px 40px'}}>
            <div>
                <Link to={`/aries/aries`}>
                    <TbZodiacAries style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                </Link>
                <p className='compatibility-p'>Aries</p>
            </div>
            <div>
                <Link to={`/aries/taurus`}>
                    <TbZodiacTaurus style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Taurus</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/gemini`}>
                    <TbZodiacGemini style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                </Link>
                <p className='compatibility-p'>Gemini</p>
            </div>
            <div>
                <Link to={`/aries/cancer`}>
                    <TbZodiacCancer style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Cancer</p>
                </Link>
            </div>
          </div>
          <div style={{display: 'flex',justifyContent: 'space-evenly', textAlign: 'center', padding: '10px 40px'}}>
            <div>
                <Link to={`/aries/leo`}>
                    <TbZodiacLeo style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Leo</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/virgo`}>
                    <TbZodiacVirgo style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Virgo</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/libra`}>
                    <TbZodiacLibra style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Libra</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/scorpio`}>
                    <TbZodiacScorpio style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Scorpio</p>
                </Link>
            </div>
            {/* <AriesLeoCompatibility/>
            <AriesVirgoCompatibility/>
            <AriesLibraCompatibility/>
            <AriesScorpioCompatibility/>     */}
          </div>
          <div style={{display: 'flex',justifyContent: 'space-evenly', textAlign: 'center', padding: '10px 40px 50px 40px'}}>
            <div>
                <Link to={`/aries/sagittarius`}>
                    <TbZodiacSagittarius style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Sagittarius</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/capricorn`}>
                    <TbZodiacCapricorn style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Capricorn</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/aquarius`}>
                    <TbZodiacAquarius style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Aquarius</p>
                </Link>
            </div>
            <div>
                <Link to={`/aries/pisces`}>
                    <TbZodiacPisces style={{cursor: 'pointer'}} className="aries-symbol aries" size={30} />
                    <p className='compatibility-p'>Pisces</p>
                </Link>
            </div>

            {/* <AriesSagittariusCompatibility/>
            <AriesCapricornCompatibility/>
            <AriesAquariusCompatibility/>
            <AriesPiscesCompatibility/>     */}
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

