import React, { useEffect } from "react";
import {
  BsArrowRight,
  BsBoxArrowUpRight,
  BsDot,
  BsFileArrowDown,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./ambassador.css";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as ArrowLeftIcon } from "../../assets/arrow-left.svg";
import ambImg1 from "../../assets/amb-images-1.png";
import ambImg2 from "../../assets/amb-images-2.png";
import ambImg3 from "../../assets/amb-images-3.png";
import ambImg4 from "../../assets/amb-images-4.png";
import ambImg5 from "../../assets/ambassadors-backgrounds-decorations.png";
import ambImg6 from "../../assets/ambassadors-backgrounds-lines.png";
import { ReactComponent as BootstrapArrow } from "../../assets/bootstrap.svg";
import decorationBg from "../../assets/hero-ambassadors-decorations.png";
import { Tilt } from "react-tilt";
import Footer from "../../common/footer/Footer";
import TopDesign from "./TopDesign";
import JoinSection from "./JoinSection";
import Separator from "./Separator";
import AmbassadorFirstSec from "./ambassador/AmbassadorFirstSec";
import AmbassadorSecondSec from "./ambassador/AmbassadorSecondSec";
import AmbassadorThirdSec from "./ambassador/AmbassadorThirdSec";
import AmbassadorFourthSec from "./ambassador/AmbassadorFourthSec";
import AmbassadorFifthSec from "./ambassador/AmbassadorFifthSec";
import AmbassadorSixthSec from "./ambassador/AmbassadorSixthSec";
import AmbassadorSeventhSec from "./ambassador/AmbassadorSeventhSec";
import AmbassadorEighthSec from "./ambassador/AmbassadorEighthSec";


const Ambassador = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };



  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>

      <section className="ambassodor">
        <Container>
          <Row>
            <Col md="6">
            <AmbassadorFirstSec defaultOptions={defaultOptions} />
            </Col>
            <Col md="6">
              <div className="ambassodor__right">
                <div className="amb-images">
                  <div className="amb-img amb-images-1">
                    <img src={ambImg1} alt="amb-images-1" />
                  </div>
                  <div className="amb-img amb-images-2">
                    <img src={ambImg2} alt="amb-images-2" />
                  </div>
                  <div className="amb-img amb-images-3">
                    <img src={ambImg3} alt="amb-images-3" />
                  </div>

                  <div className="amb-img amb-images-4">
                    <img src={ambImg4} alt="amb-images-4" />
                  </div>
                </div>

                <div className="amb-bg"></div>

                <Tilt options={defaultOptions}>
                  <div className="decoration-bg">
                    <img
                      src={decorationBg}
                      alt="decoimg"
                      className="img-fluid"
                    />
                  </div>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="purposeSectn">
      <TopDesign/>
        <Container>
          <Row>
            <Col md="5">
             <AmbassadorSecondSec />
            </Col>
            <Col md="7">
              <div className="purposeSectn__right">
                <div className="purposeSectn__rt__content">
                 <AmbassadorThirdSec />

                  <Row>
                   <AmbassadorFourthSec />
                  </Row>
                </div>
                <Separator/>

                <div className="purposeSectn__rt__content">
                 <AmbassadorFifthSec />

                  <Row>
                  <AmbassadorSixthSec />
                  </Row>
                </div>
                <Separator/>

                <div className="purposeSectn__rt__content">
                <AmbassadorSeventhSec />

                  <Row>
                   <AmbassadorEighthSec />
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <JoinSection buttonText="Apply Now" text="Are you" boldText="ready to join?"/>

      <footer className="footer_content">
          <Footer />
        </footer>
    </>
  );
};
export default Ambassador;
