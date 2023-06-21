import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import SixthSecCoreTeamModal from './SixthSecCoreTeamModal';
import prize from "../../../assets/top25-prize.svg";
import kpt from "../../../assets/kpt.svg";

const CoreTeamSixthSec = () => {
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
            const res = await axios.get("/team/research/get")
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
        <div className="custom-wrapper">
            {
                contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(cardData)}><FaRegEdit /> </span>
            }

            <div className="tutorial-small-card">
                <h2 className="side-border my-0">
                <div dangerouslySetInnerHTML={{ __html: cardData.title }} className=" mt-3 text-white"></div>
                </h2>
            </div>
            <div className="row cardinal">
                <div className="col-md-6">
                    <h3 className="cardinal-img">
                        <img src={cardData.image_url} style={{width:"155px", height:"75"}} />
                    </h3>
                    <div className="research-card">
                        <a href="#">
                            <div className="card-detail">
                                <div className="frst-img">
                                    <img src={prize} className="img-fluid" />
                                </div>
                                <div className="right-div">
                                    <h5>Startup of the year</h5>
                                    <p>
                                        by
                                        <img src={kpt} />
                                    </p>
                                    <div className="button-hidden">
                                        <span className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-box-arrow-up-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                                ></path>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-code">
                        <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3 text-white"></div>

                        <a href="#" className="btn btn-green">
                            Visit website
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="ms-2 bi bi-box-arrow-up-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {
            CardModal && <SixthSecCoreTeamModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </div>
    )
}

export default CoreTeamSixthSec;