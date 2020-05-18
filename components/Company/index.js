
import { Container, Table, Button, Row, Col ,ListGroup } from 'react-bootstrap';
import Slider from '../Common/Slider'
import CompanyList from './CompanyList/CompanyList'

export default function Company() {
  return (
    <div className="cus-bg-sec">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="text-center">List of Web Development Companies in April 2020 | <br/ > Web Developers 2020 (iOS, iPhone & Android)</h2>
          </Col>
          <Col lg={12} className="cus-re-listing">
            <Row>
              <Col lg={5}>
                <div className="company-left cus-com-info">
                  <div className="text-center">
                    <div className="c-logo">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEX///8AAAAXiLQSEhLNzc3w8PANDQ2np6e1tbVPT0/19fUWg64GCQwWh7T6/P0JHCcYgKgGDhPh7/MHExsYeZ/r8/VInrympqa/v7+tra3Hx8dERETL5OwsjrIvkrTO5urK3+E2SlMIeqgnjK0KGCIJGiMLIy8ScpoMhLNDTFEahq8wk7lMob9Zpb87yZOqAAAB9UlEQVR4nO3de0+CUACGcc5RMhG8BmlpdjXS+v5fL5BRKpfGH269+Dwf4Mzf4J2t05bjEBERERERERERERERERFddu6i16Tb+fD0BK/RAb3ewjsL5M40677wMdyGJ/juWSDdq2Yfo1+EdJqd0AECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiQ/wtZrvJ7am3IchU8TFsAWe8Cm0uUIeuBTQoehuKQzGFtvN+JLiTZRwbJ3i5ZyPrHkZRIVCGPgwNHuhNRyNPz1h4WrDQhm7E9KXhRhIwKDmsHvh7ktciQhIzsthWQsvdKEVLhkIO8lTPkIKMqhxik6r1Sg9Q4pCCl3x+CkOp9aEHq3islyB8OGcimnqEDmZT9fKUIMZOblkDMrF6iA0nerqAdEOPX7UQJUrsTKUjdTrQgZmKrdiIGMX5Lnkj1TuQgVTvRg1R8nwhCyneiCCndiSTEzN5PHXGk+EtsYz7GxzsJIs1rBdMPjxcfqV709L1wF/8+j89Q9urNc6a7/JnEUSh8Geo44TZ3aF9Pp5Ig24cjDnHSnaT7kIckO9nvQx/iTL/a8WdOBwEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIkPNB3OtmdQv/JGI4b3hE4QQiIiIiIiIiIiIiIiIiogvrGz/vW0zaSSa7AAAAAElFTkSuQmCC"
                        alt="Techindustan"
                        width="250px"
                        height="250px"
                        className=" rounded"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
            <div className="company-right cus-com-info">
              <h3 className="text-center">1. Techindustan Pvt.</h3>
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
                    {" "}
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
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
          </Col>
            </Row>
          </Col>
        </Row>
        
    </Container>
      <CompanyList />
  </div>
  );
}
