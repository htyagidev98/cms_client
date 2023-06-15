import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Col } from "react-bootstrap";
import CardVideo from "../CardVideo";
import video1 from "../../../assets/video1.jpg";
import event1 from "../../../assets/event1.jpg";

import SecondSecUpcomingEventModal from './SecondSecUpcomingEventModal';
import { CardEvent } from '../CardNews';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const UpcomingEventSecondSec = ({ setOpen, flag, cardData, setUpdateUi }) => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [objectData, setObjectData] = useState({});

    const closeModal = () => {
        setCardModal(false);
    };



    const getData = async (data) => {
        setCardModal(true);
        setObjectData(data);
    };


    const trashData = async (id) => {
        try {
            const response = await axios.delete(`/upcoming-events/event/card/delete?_id=${id}`);
            if (response.status === 200) {

                toast.success('Card Deleted Successfully');
                setUpdateUi((prev) => !prev)

            }
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <>
            {cardData.map((curElm, index) => (
                index < 3 && !flag && (
                    <Col md="6" lg="4" key={index}>
                        {
                            contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                        }
                        <CardEvent
                            img={curElm.image_url}
                            tag1="Hackathon"
                            title={<div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>}
                            para={<div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>}
                            address="Warsaw, Poland + ONLINE"
                            date="May 26-28, 2023"
                            btnText="Event Page"
                        />
                    </Col>
                ) || index >= 3 && flag && (
                    <Col md="6" lg="4" key={index}> {
                        contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                    }
                        <CardEvent
                            img={curElm.image_url}
                            tag1="Hackathon"
                            title={<div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>}
                            para={<div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>}
                            address="Warsaw, Poland + ONLINE"
                            date="May 26-28, 2023"
                            btnText="Event Page"
                        />
                    </Col>
                )
            ))}

            {CardModal && <SecondSecUpcomingEventModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />}
        </>
    );
};

export default UpcomingEventSecondSec;



