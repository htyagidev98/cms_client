import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { ReactComponent as ArrowLeftIcon } from "../../../assets/arrow-left.svg";
import SecondSecAmbassadorModal from './SecondSecAmbassadorModal';
import { Tilt } from "react-tilt";
import ambImg5 from "../../../assets/ambassadors-backgrounds-decorations.png";
import { BASE_URL } from '../../../../utility/Helper';


const AmbassadorSecondSec = ({defaultOptions}) => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [cardData, setCardData] = useState({});
    const [objectData, setObjectData] = useState({})
    const [updateUi, setUpdateUi] = useState(false);

    const closeModal = () => {
        setCardModal(false);
    }

    const fetchHeroData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/ambassador/background/get`)
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
        <div className='text-white'>
            {
                contactData.token && <span className='d-block text-end cursor' onClick={() => getData(cardData)}><FaRegEdit /> </span>
            }

            <div className="purposeSectn__left">
                <div className="mainHeading">
                    <small>BACKGROUND</small>
                    <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

                </div>
                <div className="purposeSectn__leftcontent">
                    <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3"></div>

                </div>

                <Tilt options={defaultOptions}>
                    <div className="purposeimg">
                        <img
                            src={ambImg5}
                            alt="ambImg5"
                            className="purposeimg-1 img-fluid"
                        />
                    </div>
                </Tilt>
            </div>



            {
                CardModal && <SecondSecAmbassadorModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </div>
    )
}

export default AmbassadorSecondSec;