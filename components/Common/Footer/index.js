import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
 
    return (
      <div className="cus-footer">
        <Container>
          <Row>
            <Col md={7} sm={7} xs={12}>
              <a href="#" className="brand">
                <img className="footer-logo" src="https://techindustan.com/wp-content/uploads/2017/01/techindustan-logo-sticky.jpg" alt="" />
              </a>
              <p className="right-brdr text-justify">Top Web Development Companies is an online platform that highlights the list of most trusted web and app development companies around the world. This platform will help people to hire best app developers for their requirements and also helpful for listed vendors to promote their business in front of potential clients.</p>
            </Col>
            <Col md={5} sm={5} xs={12}>
              <ul className="social-media">
                <li className="facebook">
                  <a href="#" className="btn btn-green btn-rounded">
                    <span className="icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                    <span className="text">Facebook</span>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#" className="btn btn-green btn-rounded">
                    <span className="icon"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                    <span className="text">Instagram</span>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#" className="btn btn-green btn-rounded">
                    <span className="icon"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                    <span className="text">Twitter</span>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#" className="btn btn-green btn-rounded">
                    <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                    <span className="text">Linkedin</span>
                  </a>
                </li>
              </ul>
              <h2 className="footer-title">Powered By</h2>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <img src="https://topwebdevelopmentcompanies.com/front_assets/img/app-development-companies.png" alt="" title="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="https://topwebdevelopmentcompanies.com/front_assets/img/top-app-development-companies.png" alt="" title="" />
                          </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="https://topwebdevelopmentcompanies.com/front_assets/img/software-logo.png" alt="" title="" />
                          </a>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="border"></div>
          <Row>
            <Col md={6} sm={6} xs={12} className="mobile-center">
              <p>Designed By:
                <a href="#">
                  <img src="https://techindustan.com/wp-content/uploads/2017/01/techindustan-logo-sticky.jpg" alt="" />
                </a>
              </p>
            </Col>
            <Col md={6} sm={6} xs={12} className="text-center">
                <p className="bottom-footer">Copyright © 2020 By <a href="">TopWebDevelopmentCompanies.com</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
