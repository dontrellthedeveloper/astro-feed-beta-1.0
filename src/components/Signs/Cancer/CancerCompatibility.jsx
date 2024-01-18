import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { fetchTaurusCompatability } from '../../../utils/fetchCompatibility';
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

export function CancerCompatibility() {
    const {id} = useParams();
    const [sign, setSign] = useState('');

    console.log(id)

    useEffect(() => {
        fetchTaurusCompatability(`affinity?sign1=taurus&sign2=${id}`)
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
            <div className="card taurus-card">
                <h2 className="card-header taurus taurus-card-detail">    
                    Compatibility
                </h2>



                <div className='compatibility-main'>
                    <div>
                        <TbZodiacTaurus className="taurus-symbol" size={40} />
                        <p className='compatibility-p taurus'>Taurus</p>
                    </div>
                    <div>
                        <HiPlusSm size={30} />
                    </div>
                    <div>
                        <MdOutlineQuestionMark 
                            className="taurus-symbol question-mark taurus" 
                            size={40} 
                        />
                        <p className='compatibility-p taurus'>_______</p>
                    </div>
                </div>



                <div className='compatibility-first-row'>
                    <div className='comp-sign'>
                        <Link to={`/taurus/aries`}>
                            <TbZodiacAries 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Aries</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/taurus`}>
                            <TbZodiacTaurus  
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Taurus</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/gemini`}>
                            <TbZodiacGemini 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Gemini</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/cancer`}>
                            <TbZodiacCancer 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Cancer</p>
                        </Link>
                    </div>
                </div>



                <div className='compatibility-second-row'>
                    <div className='comp-sign'>
                        <Link to={`/taurus/leo`}>
                            <TbZodiacLeo 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Leo</p>
                        </Link>
                    </div>
                    <div className='comp-sign'> 
                        <Link to={`/taurus/virgo`}>
                            <TbZodiacVirgo 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Virgo</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/libra`}>
                            <TbZodiacLibra 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Libra</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/scorpio`}>
                            <TbZodiacScorpio 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Scorpio</p>
                        </Link>
                    </div>
                </div>



                <div className='compatibility-third-row'>
                    <div className='comp-sign'>
                        <Link to={`/taurus/sagittarius`}>
                            <TbZodiacSagittarius 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Sagittarius</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/capricorn`}>
                            <TbZodiacCapricorn 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Capricorn</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/aquarius`}>
                            <TbZodiacAquarius 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Aquarius</p>
                        </Link>
                    </div>
                    <div className='comp-sign'>
                        <Link to={`/taurus/pisces`}>
                            <TbZodiacPisces 
                                className="compatibility-select taurus-symbol taurus" 
                                size={30} 
                            />
                            <p className='compatibility-p taurus'>Pisces</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

