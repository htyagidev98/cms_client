import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import carbonIcon1 from '../../../assets/carbon-icon1.svg';
import carbonIcon2 from '../../../assets/carbon-icon2.svg';
import carbonIcon3 from '../../../assets/carbon-icon3.svg';
// import carbonIcon2 from '../../assets/carbon-icon2.svg';
// import carbonIcon3 from '../../assets/carbon-icon3.svg';
import FifthSecFootprintModal from './FifthSecFootprintModal';
import { BASE_URL } from '../../../../utility/Helper';

const FootprintFifthSec = () => {
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
            const res = await axios.get(`${BASE_URL}/carbon-negative/numbers/get`)
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

                cardData.map((curElm) => <div className='col-lg-4 col-md-4 col-12'>
                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className='carbon-border-card right-equal text-white'>
                        <img src={curElm._id === "64799ba859980a52966b4e19" ? carbonIcon1 :
                            curElm._id === "64799bc159980a52966b4e1c" ? carbonIcon2 :
                                curElm._id === "64799bd959980a52966b4e1f" ? carbonIcon3 :
                                    null} alt='Carbon-Icon' className='img-fluid' />
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3"></div>
                    </div>
                </div>
                )
            }
            {
                CardModal && <FifthSecFootprintModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FootprintFifthSec



