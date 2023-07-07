import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import SecondSecCoreTeamModal from './SecondSecCoreTeamModal';
import { BASE_URL } from '../../../../utility/Helper';

const CoreTeamSecondSec = () => {
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
            const res = await axios.get(`${BASE_URL}/team/meet/get`)
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
        <div className="row">
            {
                contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(cardData)}><FaRegEdit /> </span>
            }
            <div className="col-md-6" data-aos="fade-left">

                <img src={cardData.image_url} className="img-fluid" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <div className="intro-sec ps-md-4 ps-0 text-white">
                    <div dangerouslySetInnerHTML={{ __html: cardData.title } } className="heading-sec"></div>
                    <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3 "></div>


                </div>
            </div>
            {
                CardModal && <SecondSecCoreTeamModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </div>
    )
}

export default CoreTeamSecondSec;