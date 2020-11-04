import React from 'react'
import { Card ,Row, Col } from "antd"

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const { Meta } = Card;

function index() {
    return (
        <div id="feature" className="block featureBlock bgGray " >
            <div className="container-fluid" >
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, porro.</p>
                </div>
                <Row gutter={[16,16]} >
                    <Col md={{span:8}} sm={{span:12}} xs={{span:24}} >
                         <Card
                            hoverable
                            cover={<img alt="Modern Design" src={image1} />}
                        >
                            <Meta title="Modern Design"  />
                        </Card>
                    </Col>
                    <Col md={{span:8}} sm={{span:12}} >
                         <Card
                            hoverable
                            cover={<img alt="Clean and Elegent" src={image2} />}
                        >
                            <Meta title="Clean and Elegent"  />
                        </Card>
                    </Col>
                    <Col md={{span:8}} sm={{span:12}} xs={{span:24}} >
                         <Card
                            hoverable
                            cover={<img alt="Great Support" src={image3} />}
                        >
                            <Meta title="Great Support"  />
                        </Card>
                    </Col>
                    <Col md={{span:8}} sm={{span:12}} xs={{span:24}} >
                         <Card
                            hoverable
                            cover={<img alt="Easy To Customise" src={image4} />}
                        >
                            <Meta title="Easy To Customise"  />
                        </Card>
                    </Col>
                    <Col md={{span:8}} sm={{span:12}} xs={{span:24}} >
                         <Card
                            hoverable
                            cover={<img alt="Unlimited Features" src={image5} />}
                        >
                            <Meta title="Unlimited Features"  />
                        </Card>
                    </Col>
                    <Col md={{span:8}} sm={{span:12}} xs={{span:24}} >
                         <Card
                            hoverable
                            cover={<img alt="Advanced Features" src={image6} />}
                        >
                            <Meta title="Advanced Features"  />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default index
