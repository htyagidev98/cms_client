import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsBoxArrowUpRight, BsDot, BsDownload, BsEnvelope, BsFileArrowDown } from 'react-icons/bs'
import { BiCopy, BiLinkExternal } from 'react-icons/bi'
import './presskit.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import decrypt from '../../assets/decrypt-monochrome.svg'
import stockhead from '../../assets/stockhead.svg'
import logo from '../../assets/logo-img.png'
import black from '../../assets/black.svg'
import one from '../../assets/54.svg'
import two from '../../assets/buildhodl-capital.svg'
import three from '../../assets/cardinal.svg'

import four from '../../assets/clst.svg'
import five from '../../assets/coingecko.svg'
import six from '../../assets/coinmarketcup.svg'
import seven from '../../assets/crypto.svg'
import eight from '../../assets/crypto-valley.svg'
import nine from '../../assets/dac.svg'
import ten from '../../assets/darkverse.svg'
import eleven from '../../assets/fomocraft.png'
import twelve from '../../assets/gateio.svg'
import thirteen from '../../assets/genblock.svg'
import fourteen from '../../assets/huobi.svg'
import fifteen from '../../assets/immunefi.svg'
import sixteen from '../../assets/kpt.svg'
import brandbook from '../../assets/brandbook.png'
import JoinSection from './JoinSection'
import Footer from '../../common/footer/Footer'
import PressKitFirstSec from './presskit/PressKitFirstSec'
import PressKitSecondSec from './presskit/PressKitSecondSec'
import PressKitFourthSec from './presskit/PressKitFourthSec'
import PressKitFifthSec from './presskit/PressKitFifthSec'
import PressKitSixthSec from './presskit/PressKitSixthSec'
import axios from 'axios'
import { useSelector } from 'react-redux'
import AddSixthSecPressKitModal from './presskit/AddSixthSecPressKitModal'
import PressKitSeventhSec from './presskit/PressKitSeventhSec'
import AddSeventhSecPressKitModal from './presskit/AddSeventhSecPressKitModal'
import PressKitEighthSec from './presskit/PressKitEighthSec'
import PressKitNinthSec from './presskit/PressKitNinthSec'
import PressKitTenthSec from './presskit/PressKitTenthSec'
import AddTenthSecPressKitModal from './presskit/AddTenthSecPressKitModal'
import { BASE_URL } from '../../../utility/Helper'
const Presskit = () => {
  const { contactData } = useSelector((state) => state.contact);

  const [cardData, setCardData] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);
  const [AddCardModal, setAddCardModal] = useState(false);
  const [seventhSecCardData, setSeventhSecCardData] = useState([]);
  const [seventhAddCardModal, setSeventhAddCardModal] = useState(false);
  const [tenthSecCardData, setTenthSecCardData] = useState([]);
  const [tenthAddCardModal, setTenthAddCardModal] = useState(false);


  const closeModal = () => {
    setAddCardModal(false);
    setSeventhAddCardModal(false);
    setTenthAddCardModal(false)
  }

  const showSecModal = () => {
    setAddCardModal(true)

  }
  const fetchHeroData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/press/press/news/get`)
      // console.log('cardData', res.data.responseData[0].title)
      setCardData(res.data.responseData);
    } catch (error) {
      console.log(error)
    }

  }



  const fetchHeroDataSeventhSec = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/press/brand/card/get`)
      setSeventhSecCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setSeventhSecCardData([])
        console.log(error);

      }
    }

  }

  const fetchHeroDataTenthSec = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/press/investors/card/get`)
      setTenthSecCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setTenthSecCardData([])
        console.log(error);

      }
    }

  }

  const showModalSeventh = () => {
    setSeventhAddCardModal(true)
  }


  const showModalTenth = () => {
    setTenthAddCardModal(true)
  }

  

  useEffect(() => {
    fetchHeroData();
    fetchHeroDataSeventhSec();
    fetchHeroDataTenthSec()
  }, [updateUi])

  return (
    <>

      <header className='header_content'>
        <Header />
        <Navbar />
      </header>

      <div className="mini-banner">
        <div className="custom-wrapper">
          <div className="banner-list">
            <PressKitFirstSec />
          </div>
        </div>
      </div>

      <div className="profile-section section-padding">
        <div className="custom-wrapper">
          <PressKitSecondSec />

          <div className="sperator-bottom">

          </div>
        </div>
      </div>

      <div className="boiler-plates">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-4 left-sticky">
              <div className="tutorial-small-card">
                <PressKitFourthSec />
              </div>
            </div>
            <PressKitFifthSec />
          </div>
          <div className="sperator-bottom">

          </div>
        </div>
      </div>

      <div className="aleph-zero-news">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-4 left-sticky">
              <div className="tutorial-small-card">
                <h2 className="side-border my-0">Blockovia<b> news</b> </h2>
              </div>
            </div>
            {
              contactData.token && <div className='text-end mb-2'><button onClick={() => showSecModal()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
            }
            <PressKitSixthSec cardData={cardData} setUpdateUi={setUpdateUi} />
            {
              AddCardModal && <AddSixthSecPressKitModal show={AddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
          </div>
          <div className="sperator-bottom">

          </div>
        </div>
      </div>

      <div className="aleph-zero-news">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-4 left-sticky">
              <div className="tutorial-small-card">
                
                <PressKitEighthSec />
                
              </div>
            </div>

          
            <div className="col-md-8 right-text">
            {
              contactData.token && <div className='text-end mb-2'><button onClick={() => showModalSeventh()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
            }
              <div className="row">
                <PressKitSeventhSec cardData={seventhSecCardData} setUpdateUi={setUpdateUi} />
                {
                  seventhAddCardModal && <AddSeventhSecPressKitModal show={seventhAddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
                }
              </div>
              <div className="more-btn">
                <a href="#" className="common-btn">Download more assets</a>
              </div>

              <div className="brand-book-div">
                <img src={brandbook} />
              </div>
              <div className="more-btn">
                <a href="#" className="common-btn">See our Brandbook <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
                  </path>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
                  </path>
                </svg></a>
              </div>

              <div className="media-rquest">
                <h3>Media requests and verification</h3>
                <p>For any media queries or official verification, please reach out to us at: <a href="#">verification@alephzero.org</a>   </p>
              </div>

            </div>
          </div>
          <div className="sperator-bottom">

          </div>
        </div>
      </div>

      <div className="partners-investor-section">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-4 left-sticky">
              <div className="tutorial-small-card">
                <PressKitNinthSec />
              </div>
            </div>
            <div className="col-md-8 right-text">
            {
              contactData.token && <div className='text-end mb-2'><button onClick={() => showModalTenth()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
            }
              <div className="partners-logo-row row">
                <PressKitTenthSec cardData={tenthSecCardData} setUpdateUi={setUpdateUi} />
                {
                  tenthAddCardModal && <AddTenthSecPressKitModal show={tenthAddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
                }
              </div>
            </div>
          </div>
          <div className="sperator-bottom">

          </div>
        </div>
      </div>

      <JoinSection buttonText="send message" icon={<BsEnvelope />} text="For PR inquiries," boldText="don't heitate to reach out" />

      <footer className='footer_content'>
        <Footer />
      </footer>


    </>
  )
}
export default Presskit