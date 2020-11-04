import React from 'react'
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;
function FAQ() {
    return (
        <div id="faq" className="block faqBlock" >
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veniam.</p>
                </div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="How to setup the  theme?" key="1" >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore aut dicta quos ipsum porro ea, aperiam dolorum incidunt maiores quisquam at minima neque aliquam quo facere deserunt dolores! Dolor ipsa amet expedita mollitia facilis quos fugit harum accusantium minus voluptatem praesentium nostrum optio sequi, temporibus ipsum tempore blanditiis qui omnis reprehenderit pariatur commodi. Repudiandae, quo aspernatur nostrum blanditiis voluptatum laboriosam corporis illum, vero impedit voluptatem totam? Atque mollitia quaerat fugit officia, sunt nostrum alias asperiores pariatur rerum, odit optio soluta itaque temporibus ea adipisci corporis qui doloremque ab ut placeat ad ex? Eum nisi rerum, maiores quis sunt distinctio.</p>
                </Panel>
                <Panel header="How to change plan ?" key="2" >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore aut dicta quos ipsum porro ea, aperiam dolorum incidunt maiores quisquam at minima neque aliquam quo facere deserunt dolores! Dolor ipsa amet expedita mollitia facilis quos fugit harum accusantium minus voluptatem praesentium nostrum optio sequi, temporibus ipsum tempore blanditiis qui omnis reprehenderit pariatur commodi. Repudiandae, quo aspernatur nostrum blanditiis voluptatum laboriosam corporis illum, vero impedit voluptatem totam? Atque mollitia quaerat fugit officia, sunt nostrum alias asperiores pariatur rerum, odit optio soluta itaque temporibus ea adipisci corporis qui doloremque ab ut placeat ad ex? Eum nisi rerum, maiores quis sunt distinctio.</p>
                </Panel>
                <Panel header="How to Update Email?" key="3" >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore aut dicta quos ipsum porro ea, aperiam dolorum incidunt maiores quisquam at minima neque aliquam quo facere deserunt dolores! Dolor ipsa amet expedita mollitia facilis quos fugit harum accusantium minus voluptatem praesentium nostrum optio sequi, temporibus ipsum tempore blanditiis qui omnis reprehenderit pariatur commodi. Repudiandae, quo aspernatur nostrum blanditiis voluptatum laboriosam corporis illum, vero impedit voluptatem totam? Atque mollitia quaerat fugit officia, sunt nostrum alias asperiores pariatur rerum, odit optio soluta itaque temporibus ea adipisci corporis qui doloremque ab ut placeat ad ex? Eum nisi rerum, maiores quis sunt distinctio.</p>
                </Panel>
                <Panel header="How to Change Password?" key="4" >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore aut dicta quos ipsum porro ea, aperiam dolorum incidunt maiores quisquam at minima neque aliquam quo facere deserunt dolores! Dolor ipsa amet expedita mollitia facilis quos fugit harum accusantium minus voluptatem praesentium nostrum optio sequi, temporibus ipsum tempore blanditiis qui omnis reprehenderit pariatur commodi. Repudiandae, quo aspernatur nostrum blanditiis voluptatum laboriosam corporis illum, vero impedit voluptatem totam? Atque mollitia quaerat fugit officia, sunt nostrum alias asperiores pariatur rerum, odit optio soluta itaque temporibus ea adipisci corporis qui doloremque ab ut placeat ad ex? Eum nisi rerum, maiores quis sunt distinctio.</p>
                </Panel>
            </Collapse>
            <div className="quickSupport">
                <h3>Want Quick Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, mollitia!</p>
                <Button type="primary"  size="large"> <i className="fas fa-envelope" ></i> Email your Question</Button>
            </div>
            </div>
        </div>
    )
}

export default FAQ
