import React from 'react';
import { Container, Table, Button, Row, Col, ListGroup } from 'react-bootstrap';
import Slider from '../../Common/Slider';

function CompanyList() {
    return (
      <Container className="mt-3">
        <Row>
          <Col lg={12} className="cus-re-listing">
            <Row>
              <Col lg={6}>
                <div className="company-container-wrapper">
                  <div className="company-container ">
                    <div className="company-image-div">
                      <div className="inside-image-div">
                        <img
                          src="/images/hedgehog-lab.jpg"
                          alt="blog-img"
                          className="company-image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="company-right cus-com-info">
                    <h3 className="text-center mt-3">2. hedgehog lab</h3>
                    <span>Details</span>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Founded:</td>
                          <td>
                            <b>2015</b>
                          </td>
                          <td>Employees:</td>
                          <td>
                            <b>50</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Hourly Rates:</td>
                          <td>
                            <b>&lt; $50</b>
                          </td>
                          <td>Clutch Rating:</td>
                          <td>
                            <b>5</b>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-between">
                      <Button variant="success">
                        <span className="icon">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span className="text"> +91-9876543210 </span>
                      </Button>
                      <Button variant="primary">
                        <span className="icon">
                          {' '}
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="text"> official@techindustan.com</span>
                      </Button>
                    </div>
                    <div className="service mt-1">
                      <span className="text">Service Line</span>
                      <Slider>
                        <ListGroup horizontal>
                          <div className="d-flex text-center  justify-content-between">
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/color/48/000000/web-design.png"
                                  title="Web-design"
                                  alt="web-design"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dusk/50/000000/web.png"
                                  title="Web Development"
                                  alt="web development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/ios-development.png"
                                  title="IOS Development"
                                  alt="IOS development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/web-advertising.png"
                                  title="Web-advertising"
                                  alt="web-advertising"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                          </div>
                        </ListGroup>
                        <ListGroup horizontal>
                          <div className="d-flex justify-content-between">
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/color/48/000000/web-design.png"
                                  title="Web-design"
                                  alt="web-design"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dusk/50/000000/web.png"
                                  title="Web Development"
                                  alt="web development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/ios-development.png"
                                  title="IOS Development"
                                  alt="IOS development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/web-advertising.png"
                                  title="Web-advertising"
                                  alt="web-advertising"
                                />
                              </div>
                            </ListGroup.Item>
                          </div>
                        </ListGroup>
                      </Slider>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="company-container-wrapper">
                  <div className="company-container ">
                    <div className="company-image-div">
                      <div className="inside-image-div">
                        <img
                          src="/images/yalantis.jpg"
                          alt="blog-img"
                          className="company-image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="company-right cus-com-info">
                    <h3 className="text-center mt-3">3. Yalantis</h3>
                    <span>Details</span>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Founded:</td>
                          <td>
                            <b>2015</b>
                          </td>
                          <td>Employees:</td>
                          <td>
                            <b>50</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Hourly Rates:</td>
                          <td>
                            <b>&lt; $50</b>
                          </td>
                          <td>Clutch Rating:</td>
                          <td>
                            <b>5</b>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-between">
                      <Button variant="success">
                        <span className="icon">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span className="text"> +91-9876543210 </span>
                      </Button>
                      <Button variant="primary">
                        <span className="icon">
                          {' '}
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="text"> official@techindustan.com</span>
                      </Button>
                    </div>
                    <div className="service mt-1">
                      <span className="text">Service Line</span>
                      <Slider>
                        <ListGroup horizontal>
                          <div className="d-flex text-center  justify-content-between">
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/color/48/000000/web-design.png"
                                  title="Web-design"
                                  alt="web-design"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dusk/50/000000/web.png"
                                  title="Web Development"
                                  alt="web development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/ios-development.png"
                                  title="IOS Development"
                                  alt="IOS development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/web-advertising.png"
                                  title="Web-advertising"
                                  alt="web-advertising"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                          </div>
                        </ListGroup>
                        <ListGroup horizontal>
                          <div className="d-flex justify-content-between">
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/color/48/000000/web-design.png"
                                  title="Web-design"
                                  alt="web-design"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dusk/50/000000/web.png"
                                  title="Web Development"
                                  alt="web development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/cotton/64/000000/cloud-development.png"
                                  title="Cloud-development"
                                  alt="cloud-development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/ios-development.png"
                                  title="IOS Development"
                                  alt="IOS development"
                                />
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="service-item">
                                <img
                                  src="https://img.icons8.com/dotty/80/000000/web-advertising.png"
                                  title="Web-advertising"
                                  alt="web-advertising"
                                />
                              </div>
                            </ListGroup.Item>
                          </div>
                        </ListGroup>
                      </Slider>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}
export default CompanyList;
