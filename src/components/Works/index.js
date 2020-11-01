import React, {useState} from 'react'
import {Button, Modal} from "antd"


function Works() {
    const [visible, setVisible] = useState(false)

const showModal = () => {
    setVisible(true)
  };


 const  handleCancel = e => {
    console.log(e);
    setVisible(false)

  };

    return (
        <div className="block worksBlock" >
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How It Works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem.</p>
                </div>
                <div className="contentHolder">
                    <Button type="primary" onClick={()=>showModal()}>
                        <i className="fas fa-play" ></i>
                    </Button>
                </div>
        <Modal
          title="Imran Khan - Imaginary"
          visible={visible}
          onCancel={()=>handleCancel()}
          footer={null}
        >
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y9IEV9Ko0jQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen" title="Imran Khan - Imaginary" ></iframe>
        </Modal>
            </div>
        </div>
    )
}

export default Works
