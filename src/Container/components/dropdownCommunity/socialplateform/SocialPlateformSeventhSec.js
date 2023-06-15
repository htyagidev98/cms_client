import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import news1 from "../../../assets/news1.jpg";
import avtar from "../../../assets/avtar.jpeg";
// import avtar2 from "../../assets/avtar2.png";
// import news2 from "../../assets/news2.jpeg";
// import news3 from "../../assets/news3.jpeg";

import SeventhSecSocialPlateformModal from './SeventhSecSocialPlateformModal';
import CardNews from '../CardNews';

const SocialPlateformSeventhSec = () => {
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
            const res = await axios.get("/community-page/news/card/get")
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
                cardData.map((curElm) => <Col md={4}>
                    
                    {
                        contactData.token && <span className='d-block text-end  cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    
                    <CardNews
                        img={news1}
                        tag1="Ecosystem"
                        tag2="Application"
                        title={ <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>}
                        avtar={avtar}
                        avtarName="Mateusz Raczyński"
                        date="May 18, 2023"
                        btnText="Go to article"
                    />
                </Col>
                )
            }

            {
                CardModal && <SeventhSecSocialPlateformModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default SocialPlateformSeventhSec



