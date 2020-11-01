import React from 'react'
import {Row, Col} from "antd"

const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]
  
function About() {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, beatae.</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam vitae facere placeat illo dignissimos ullam, exercitationem iusto illum voluptatibus corporis quia qui ratione quae velit, adipisci aliquid quisquam non deserunt soluta ipsa. Nihil, itaque quaerat. Nisi neque quaerat blanditiis cupiditate maxime doloribus dolore molestiae sequi quas, eius ratione animi beatae voluptate nostrum? Qui deleniti placeat cum deserunt illum repellat? Optio odit vitae pariatur impedit inventore quae doloremque numquam, autem quis! Consequuntur libero, nemo quisquam animi et doloribus voluptatum porro aspernatur labore, natus quae temporibus sit fuga hic excepturi ad provident culpa reprehenderit fugit dolore accusantium dolor! A, vero dolor.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item=> (
                        <Col span={8} key={item.key} >
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    )
}

export default About
