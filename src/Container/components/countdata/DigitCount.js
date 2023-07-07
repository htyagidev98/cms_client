import React, { useEffect, useState } from 'react'
import './digit.css';
import DigitCountModal from './DigitCountModal';
import { useSelector } from 'react-redux'
import axios from 'axios'
import {FaRegEdit} from 'react-icons/fa'
import { BASE_URL } from '../../../utility/Helper';
const DigitCount = () => {
  const [BuildScale, setBuildScale] = useState(false);
  const [data, setData] = useState([]);
  const [objectData, setObjectData] = useState({})
  const [updateUi, setUpdateUi] = useState(false);
  const {contactData} = useSelector((state)=> state.contact);


  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/calculation/get`)
      setData(res.data.responseData);
    } catch (error) {
      console.log(error)
    }
  }

  const getData = (data) => {
    setBuildScale(true);
    setObjectData(data)

  }

  const closeModal = () => {
    setBuildScale(false);
  }


  useEffect(() => {
    fetchData();
  }, [updateUi])

  return (
    <div className="container ">
      <section className="digit_wrapper pt-5 pb-5">
        <div className="row">
          
          {
            data.map((curElm)=> <div className="col-md-3" key={curElm._id}>
            <div className="first_digit digit-head text-center">

              {
               contactData.token && 
              
            <span className='d-block text-end cursor' onClick={()=>getData(curElm)}><FaRegEdit /> </span>
} 
             <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
              <span className='digit_line'></span>
              <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>
            </div>
          </div>)
          }
         
        
        </div>
        <DigitCountModal show={BuildScale} hide={closeModal} setUpdateUi={setUpdateUi} objectData={objectData} />
      </section>
    </div>
  )
}

export default DigitCount