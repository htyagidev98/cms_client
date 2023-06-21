import React from 'react'
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
const Presskit = () => {
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
            <div className="col-md-8 right-text">
              <h3 className="h3-title">2023</h3>
              <div className="date-list-div">
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={decrypt} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src="images/cointelegraph.svg" />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
              </div>
              <h3 className="h3-title">2022</h3>
              <div className="date-list-div">
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
              </div>
              <h3 className="h3-title">2021</h3>
              <div className="date-list-div">
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
                <div className="date-list">
                  <h5>2022-12-31</h5>
                  <div className="logo-img">
                    <img src={stockhead} />
                  </div>
                  <p>Proof of reserves is becoming more effective, but not all its challenges are technical</p>
                </div>
              </div>
            </div>
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
                <h2 className="side-border my-0"><b>Brand</b>  assets</h2>
              </div>
            </div>
            <div className="col-md-8 right-text">
              <div className="row">
                <div className="col-md-6">
                  <div className="brand-card">
                    <div className="img-brand">
                      <img src={logo} />
                    </div>
                    <div className="text-brand">
                      <h4>Logotype horizontal</h4>
                      <div className="color-text">
                        <span className="white">White</span>
                        <span className="graphite">Graphite</span>
                        <span className="black">Black</span>
                      </div>
                    </div>
                    <div className="download-files">
                      {/* <!-- put react icon  --> */}
                      <span className="png-file"><BsDownload /> PNG</span>
                      <span className="svg-file"><BsDownload /> SVG</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="brand-card">
                    <div className="img-brand">
                      <img src={logo} />
                    </div>
                    <div className="text-brand">
                      <h4>Logotype horizontal</h4>
                      <div className="color-text">
                        <span className="white">White</span>
                        <span className="graphite">Graphite</span>
                        <span className="black">Black</span>
                      </div>
                    </div>
                    <div className="download-files">
                      {/* <!-- put react icon  --> */}
                      <span className="png-file"><BsDownload /> PNG</span>
                      <span className="svg-file"><BsDownload /> SVG</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="brand-card">
                    <div className="img-brand">
                      <img src={logo} />
                    </div>
                    <div className="text-brand">
                      <h4>Logotype horizontal</h4>
                      <div className="color-text">
                        <span className="white">White</span>
                        <span className="graphite">Graphite</span>
                        <span className="black">Black</span>
                      </div>
                    </div>
                    <div className="download-files">
                      {/* <!-- put react icon  --> */}
                      <span className="png-file"><BsDownload /> PNG</span>
                      <span className="svg-file"><BsDownload /> SVG</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="brand-card">
                    <div className="img-brand">
                      <img src={logo} />
                    </div>
                    <div className="text-brand">
                      <h4>Logotype horizontal</h4>
                      <div className="color-text">
                        <span className="white">White</span>
                        <span className="graphite">Graphite</span>
                        <span className="black">Black</span>
                      </div>
                    </div>
                    <div className="download-files">
                      {/* <!-- put react icon  --> */}
                      <span className="png-file"><BsDownload /> PNG</span>
                      <span className="svg-file"><BsDownload /> SVG</span>
                    </div>
                  </div>
                </div>
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
                <h2 className="side-border my-0"><b>Partners</b>  & investors</h2>
              </div>
            </div>
            <div className="col-md-8 right-text">
              <div className="partners-logo-row row">
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={black} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={one} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={two} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={three} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={four} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={five} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={six} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={seven} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={eight} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={nine} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={ten} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={eleven} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={twelve} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={thirteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={fourteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={fifteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={sixteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={sixteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={fifteen} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={one} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={two} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={three} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={four} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={five} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={six} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={seven} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={eight} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={nine} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={ten} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="investor-logo">
                    <img src={eleven} />
                  </div>
                </div>
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