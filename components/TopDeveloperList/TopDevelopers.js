import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function TopDevelopers() {
    return (
      <Container>
        <div className="top-developer-title">
          <h2>Explore The Best Web Developers Near You!</h2>
        </div>
        <Row className="mb-4">
          <Col sm={6}>
            <div className="top-developer-wrapper">
              <div className="top-developer p-0">
                <img src="/images/india.jpg" alt="india" className="image" />
                <div className="overlay">
                  <img src="/images/in.png" />
                </div>
              </div>
              <div className="top-developer-desc">
                <div className="desc-title">
                  <h3 className="h3">
                    Top 10+ Web Development Companies in India April 2020
                  </h3>
                </div>
                <div className="title-desc">
                  <p>
                    Last Updated 20th April 2020 | Category: Top Web Development
                    Firms
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="top-developer-wrapper">
              <div className="top-developer p-0">
                <img src="/images/australia.jpg" alt="australia" className="image" />
                <div className="overlay">
                  <img src="/images/us.png" />
                </div>
              </div>
              <div className="top-developer-desc">
                <div className="desc-title">
                  <h3 className="h3">
                    Top 10+ Web Development Companies in Aus April 2020{' '}
                  </h3>
                </div>
                <div className="title-desc">
                  <p>
                    Last Updated 20th April 2020 | Category: Top Web Development
                    Firms
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}
