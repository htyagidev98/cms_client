import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import TwelthSecBuildDevModal from './TwelthSecBuildDevModal';
import testnet from '../../../../assets/testnet.svg'
import explorer from '../../../../assets/explorer.svg'
import wallets from '../../../../assets/wallet.svg'
import documentation from '../../../../assets/documentation.svg'

const BuildDevTwelthSec = () => {
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
            const res = await axios.get("/dev/additional/card/get")
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
                cardData.map((curElm) => <div className="col-lg-3 col-md-6 col-12">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className="intro-card" data-aos="fade-up">
                        <div className="intro-content">
                            <div className="intro-icon">
                                {/* <img src="images/intro-four.svg"/> */}
                                <img src={curElm._id==="6486ed9f9037de7364edf80f"? testnet:curElm._id==="6486ede69037de7364edf812"? explorer:curElm._id==="6486ee049037de7364edf815"? wallets: curElm._id==="6486ee299037de7364edf818"?documentation:"" } className='img-fluid' />

                            </div>
                            <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                            <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>


                            <div className="poisition-btn">
                                <button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            {
                CardModal && <TwelthSecBuildDevModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default BuildDevTwelthSec



