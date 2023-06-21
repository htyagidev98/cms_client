import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import {BiCopy, BiLinkExternal} from 'react-icons/bi'

import FifthSecPressKitModal from './FifthSecPressKitModal';

const PressKitFifthSec = () => {
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
            const res = await axios.get("/press/boil/card/get")
            // console.log('cardData', res.data.responseData[0].title)
            setCardData(res.data.responseData);
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async (data) => {
        console.log('click data', data)
        setCardModal(true)
        setObjectData(data)
    }


    useEffect(() => {
        fetchHeroData();
    }, [updateUi])

    return (
        <>


          
    <div className="col-md-8 right-text">
     <div className="row">
     <div className="col-md-6">
     {
            contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(cardData[0])}><FaRegEdit /> </span>
        }
      <div className="intro-sec text-bolier mb-5">
      <div dangerouslySetInnerHTML={{ __html: cardData[0]?.title }} className="text-white"></div>
      <div dangerouslySetInnerHTML={{ __html: cardData[0]?.paragraph }} className="mt-3 text-white"></div>
         <a href="#" className="">
         <BiCopy/>
         </a>
      </div>
      <div className="intro-sec text-bolier ">
      {
            contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(cardData[2])}><FaRegEdit /> </span>
        }
      <div dangerouslySetInnerHTML={{ __html: cardData[2]?.title }} className="text-white"></div>
      <div dangerouslySetInnerHTML={{ __html: cardData[2]?.paragraph }} className="mt-3 text-white"></div>

         <a href="#" className="">
          
         <BiCopy/>
         </a>
      </div>
     </div>
     <div className="col-md-6">
     {
            contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(cardData[1])}><FaRegEdit /> </span>
        }
      <div className="intro-sec text-bolier ">
      <div dangerouslySetInnerHTML={{ __html: cardData[1]?.title }} className="text-white"></div>
      <div dangerouslySetInnerHTML={{ __html: cardData[1]?.paragraph }} className="mt-3 text-white"></div>

         <a href="#" className="">
         <BiCopy/>
         </a>
      </div>
     </div>
     </div>
  </div>
            {
                CardModal && <FifthSecPressKitModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default PressKitFifthSec



