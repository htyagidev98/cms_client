import React, { useEffect, useState } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import walletImg from '../../assets/wallet-icon.svg';
import explorerImg from '../../assets/explorer.svg';
import utilityImg from '../../assets/utility.svg';
import topVector from '../../assets/featured-panel-roadmap.svg';
import { NavLink } from 'react-router-dom'
import './blockovia.css'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import BlockoviaModal from './BlockoviaModal';
const Blockovia = () => {
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
      const res = await fetch("/animated/card/get")
      const data = await res.json();
      setCardData(data.responseData);

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
    <div className="container">
      <section className="wallet_wrapper pt-5 pb-5">
        <div class="top-img">
          <img src={topVector} alt='vector-img' className='img-fluid' />
        </div>
        <div className="row">
          {
            cardData.map((elm) => <div className="col-md-4 mx-auto hover_common">
              {
                contactData.token && <span className='d-block text-end cursor' onClick={() => getData(elm)}><FaRegEdit /> </span>
              }


              <NavLink to='#'>
                <div className="wallet_data" data-aos="fade-up">
                  <div className="hover_effect">
                    <div className="top_data">
                      <div className="icon-img-sec">
                        <img
                          src={
                            elm._id === "64746ebdc38f8a92b6cd3ebf" ? walletImg :
                              elm._id === "64746f4ac38f8a92b6cd3ec6" ? explorerImg :
                                elm._id === "64746f55c38f8a92b6cd3ec9" ? utilityImg :
                                  null
                          }
                          alt="walletImg"
                          className="img-fluid"
                        />

                      </div>
                      <div dangerouslySetInnerHTML={{ __html: elm.title }}></div>

                    </div>

                    <div dangerouslySetInnerHTML={{ __html: elm.paragraph }}></div>

                  </div>
                  <div className="wallet_data_button">
                    <span> <BsBoxArrowUpRight /> </span>
                    <span>Got to </span>

                  </div>
                </div>
              </NavLink>
            </div>)
          }

        </div>
        <div class="top-img">
          <img src={topVector} alt='vector-img' className='img-fluid' />
        </div>

        {
          CardModal && <BlockoviaModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
        }
      </section>
    </div>


  )
}

export default Blockovia