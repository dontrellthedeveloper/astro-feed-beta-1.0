import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchAriesCompatability } from '../../../utils/fetchCompatibility';
import { TbZodiacAries, TbZodiacCancer, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from 'react-icons/tb';

export function AriesAriesCompatibility() {
    const {id} = useParams();
    const [sign, setSign] = useState('');
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
        <div>
           <Link to={`/aries/aries`}>
           <TbZodiacAries style={{cursor: 'pointer'}} className="aries-symbol" size={30} />
            </Link>
            <p className='compatibility-p'>Aries</p>
        </div>
    );
};


export function AriesTaurusCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/taurus`}>
           <TbZodiacTaurus style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Taurus</p>
            </Link>
        </>
    );
};

export function AriesGeminiCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/gemini`}>
           <TbZodiacGemini style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Gemini</p>
            </Link>
        </>
    );
};

export function AriesCancerCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/cancer`}>
           <TbZodiacCancer style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Cancer</p>
            </Link>
        </>
    );
};

export function AriesLeoCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/leo`}>
           <TbZodiacLeo style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Leo</p>
            </Link>
        </>
    );
};

export function AriesVirgoCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/virgo`}>
           <TbZodiacVirgo style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Virgo</p>
            </Link>
        </>
    );
};

export function AriesLibraCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/libra`}>
           <TbZodiacLibra style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Libra</p>
            </Link>
        </>
    );
};

export function AriesScorpioCompatibility() {
    const {id} = useParams();

    const [sign, setSign] = useState('');
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
        <>
           <Link to={`/aries/scorpio`}>
           <TbZodiacScorpio style={{cursor: 'pointer'}} className="aries-symbol" size={30} />

              {/* <button style={{cursor: 'pointer'}}>Taurus</button>
              Aries params: {id} */}
              <p className='compatibility-p'>Scorpio</p>
            </Link>
        </>
    );
};



{/* <Link to={`/aries/taurus`}>
<button style={{cursor: 'pointer'}}>Taurus</button>
</Link> */}

// export default AriesCompatibility;