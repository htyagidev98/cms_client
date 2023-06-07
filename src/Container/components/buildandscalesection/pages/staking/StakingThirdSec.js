import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import keepStaking from '../../../../assets/keep-staking.svg';
import getStaking from '../../../../assets/get-staking.svg';
import friendlyStaking from '../../../../assets/friendly-staking.svg';
import stayStaking from '../../../../assets/stay-staking.svg';


import ThirdSecStakingModal from './ThirdSecStakingModal';

const StakingThirdSec = () => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [objectData, setObjectData] = useState({})
    const [updateUi, setUpdateUi] = useState(false);

    const closeModal = () => {
        setCardModal(false);
    }

    const fetchHeroData = async () => {
        try {
            const res = await axios.get("/staking/staking/card/get")
            setCardData(res.data.responseData);
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async (data) => {
        setCardModal(true)
        setObjectData(data)
    }


    useEffect(() => {
        fetchHeroData();
    }, [updateUi])

    return (
        <>

            {
                cardData.map((curElm) => <div className="col-md-6 mx-auto hover_common " data-aos="fade-left">

                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }

                    <div className="wallet_data_staking">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="icon-area">
                                    <img src={curElm._id === "647dce56f02b2e44108cf2f9" ? keepStaking :
                                        curElm._id === "647dce6ef02b2e44108cf2fc" ? getStaking :
                                            curElm._id === "647dce96f02b2e44108cf2ff" ? friendlyStaking :
                                            curElm._id === "647dceb1f02b2e44108cf302" ? stayStaking :
                                                null} alt="Zero secure" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-9">
                                <div className="hover_effect">
                                    <div className="top_data">
                                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>
                                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                </NavLink>
                */}
                </div>)
            }


            {
                CardModal && <ThirdSecStakingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default StakingThirdSec



