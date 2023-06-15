import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import CardVideo from "../CardVideo";
import video1 from "../../../assets/video1.jpg";

import NinthSecSocialPlateformModal from './NinthSecSocialPlateformModal';

const SocialPlateformNinthSec = ({setOpen}) => {
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
            const res = await axios.get("/community-page/video/card/get")
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
                cardData.map((curElm) => <Col md="4">
                    {
                        contactData.token && <span className='d-block text-end  cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <CardVideo
                        img={video1}
                        title={ <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>}

                        date="Jan 14, 2023"
                        onClick={() => setOpen(true)}
                    />
                </Col>)
            }

            {
                CardModal && <NinthSecSocialPlateformModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default SocialPlateformNinthSec



