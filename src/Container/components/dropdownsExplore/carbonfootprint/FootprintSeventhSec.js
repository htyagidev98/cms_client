import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import carbonIcon4 from '../../../assets/carbon-icon4.svg';
import carbonIcon5 from '../../../assets/carbon-icon5.svg';
import carbonIcon6 from '../../../assets/carbon-icon6.svg';
import carbonIcon7 from '../../../assets/carbon-icon7.svg';
import SeventhSecFootprintModal from './SeventhSecFootprintModal';

const FootprintSeventhSec = () => {
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
            const res = await axios.get("/carbon-negative/unit/Card/get")
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

                cardData.map((curElm) => <div className='col-lg-3 col-md-3 col-12'>
                    <div className='carbon-border-card or-section text-white' data-aos="zoom-in" >
                        {
                            contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                        }
                        <div className='source-link'>
                            <i class="fa-solid fa-info"></i>
                        </div>
                        <img src={curElm._id === "647d8fa6f6e82a902a2d2f58" ? carbonIcon4 :
                            curElm._id === "647d8fc2f6e82a902a2d2f5b" ? carbonIcon5 :
                                curElm._id === "647d8fecf6e82a902a2d2f5e" ? carbonIcon6 :
                                curElm._id === "647d9059f6e82a902a2d2f61" ? carbonIcon7 :
                                    null} alt='Carbon-Icon' className='img-fluid' />
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3"></div>
                    </div>
                </div>)
            }
            {
                CardModal && <SeventhSecFootprintModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FootprintSeventhSec



