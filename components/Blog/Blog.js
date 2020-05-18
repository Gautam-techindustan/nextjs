import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Blog() {
    return (
        <Container>
            <div className="blog-container-title top-space">
                <h2>Latest Blogs</h2>
            </div>
            <Row className="mb-4">
                <Col sm={6}>
                    <div className="blog-container-wrapper">
                        <div className="blog-container p-0">
                            <img src="/images/5_creative_web_design_tips_and_trends_in_2020.jpg" alt="blog-img" className="image" />
                        </div>
                        <div className="blog-container-desc">
                            <div className="desc-title">
                                <h3 className="h3">
                                    Implementation Of Test Automation In DevOps
                                   
                  </h3>
                            </div>
                            <div className="title-desc">
                                <p>
                                    Technology | 13-04-2020
                  </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="blog-container-wrapper">
                        <div className="blog-container p-0">
                            <img src="/images/how_to_monetize_your_mobile_app_in_2020.jpg" alt="blog-img" className="image" />
                        </div>
                        <div className="blog-container-desc">
                            <div className="desc-title">
                                <h3 className="h3">
                                    The Epic Guide to Increasing Sales Through Content Marketing
                                </h3>
                            </div>
                            <div className="title-desc">
                                <p>
                                    Digital Marketing | 09-04-2020
                  </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
             <Row className="mb-4">
                <Col sm={6}>
                    <div className="blog-container-wrapper">
                        <div className="blog-container p-0">
                            <img src="/images/improving_web_design_with_seo.jpg" alt="blog-img" className="image" />
                        </div>
                        <div className="blog-container-desc">
                            <div className="desc-title">
                                <h3 className="h3">
                                    Improving Web Design With SEO
                                     
                  </h3>
                            </div>
                            <div className="title-desc">
                                <p>
                                    SEO | 24-04-2020
                  </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="blog-container-wrapper">
                        <div className="blog-container p-0">
                            <img src="/images/implementation_of_test_automation_in_devops.jpg" alt="blog-img" className="image" />
                        </div>
                        <div className="blog-container-desc">
                            <div className="desc-title">
                                <h3 className="h3">
                                    Implementation Of Test Automation In DevOps
                                </h3>
                            </div>
                            <div className="title-desc">
                                <p>
                                    Technology | 13-04-2020
                  </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

