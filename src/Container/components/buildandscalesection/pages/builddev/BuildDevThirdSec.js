import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import intro from '../../../../assets/intro-one.svg'
import ThirdSecBuildDevModal from './ThirdSecBuildDevModal';
import { BASE_URL } from '../../../../../utility/Helper';

const BuildDevThirdSec = () => {
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
            const res = await axios.get(`${BASE_URL}/dev/zero/card/get`)
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
                cardData.map((curElm) => <div className="col-lg-6 col-md-6 col-12">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }

                    <div className="intro-card">
                        <div className="intro-content">
                            <div className="intro-icon">
                                {/* <img src="images/intro-one.svg"> */}
                                <img src={intro} className='img-fluid' />

                            </div>
                            <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>
                            <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3"></div>


                            <div className="poisition-btn">
                                <button className="green-btn-efect"><span className="lnr lnr-move"></span> Go to</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            {
                CardModal && <ThirdSecBuildDevModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default BuildDevThirdSec



