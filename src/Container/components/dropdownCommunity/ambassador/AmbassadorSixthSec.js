import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";


import SixthSecAmbassadorModal from './SixthSecAmbassadorModal';

const AmbassadorSixthSec = () => {
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
            const res = await axios.get("/ambassador/perks/card/get")
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
                cardData.map((curElm) => <Col md="6">
                    {
                        contactData.token && <span className='d-block text-end  cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className="psCard">
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>
                    </div>
                </Col>
                )
            }

            {
                CardModal && <SixthSecAmbassadorModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default AmbassadorSixthSec



