import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import ThirdSecFundingModal from './ThirdSecFundingModal';

const FundingThirdSec = () => {
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
            const res = await axios.get("/build/purposeCard/get")
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
               cardData.map((curElm)=> <div className='col-lg-3 col-12'>
                 {
                    
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                }

               <div className='mini-funding-card'>
               <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>
               <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                </div>

               { curElm._id !='64807ab42cc6ecc70addd0ba' && <i class="fa-sharp fa-solid fa-plus"></i>}
            </div>
            )
            }


            {
                CardModal && <ThirdSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingThirdSec



