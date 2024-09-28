import React, { useContext } from 'react';
import './ContactsPage.css'
import { MyContext } from '../../../Context/MyContext';
import { Col, Row } from 'antd';



const ContactsPage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      <div style={{ padding: '3%' }}>
        <h1>ADAM</h1>
        <div className='setdisplay-column-contacts'>
          <div style={{ width: "80%" }}>
          <Row className='contacts-title' style={{ textAlign: 'center' }}>
              <Col span={24} className='col-style'>feeback</Col>
            </Row>
          <Row className='contacts-text' style={{ textAlign: 'center' }}>
              <Col span={24} className='col-style'>
                <form action="/submit-your-feedback" method="post">
                  <label for="name">*Name</label>
                  <input type="text" id="name" name="name" required />

                  <label for="email">*Email</label>
                  <input type="email" id="email" name="email" required />

                  <label for="comments">*Comments</label>
                  <textarea id="comments" name="comments" required></textarea>
                  
                  <button className='ContactsPage_button' type="reset">Clear</button>
                  <button className='ContactsPage_button' type="submit">Submit</button>
                </form>

              </Col>


            </Row>

            <Row className='contacts-title' >
              <Col span={12} className='col-style'>Professor</Col>
              <Col span={12} className='col-style'>mail</Col>
            </Row>
            <Row className='contacts-text'>
              <Col span={12} className='col-style-bold'>
                <a href="https://sites.google.com/view/kchang">Kuan Y. Chang</a>
              </Col>
              <Col span={12} className='col-style'>kchang@ntou.edu.tw</Col>
            </Row>

            <Row className='contacts-title' >
              <Col span={12} className='col-style'>Team Members</Col>
              <Col span={12} className='col-style'>E-mail</Col>
            </Row>
            <Row className='contacts-text'>
              <Col span={12} className='col-style-bold'>Ai-Ke Chang</Col>
              <Col span={12} className='col-style'>s350197@gmail.com</Col>
            </Row>
            <Row className='contacts-text'>
              <Col span={12} className='col-style-bold'>Yen Guang Chen</Col>
              <Col span={12} className='col-style'>s621002640225880624@gmail.com</Col>
            </Row>
            <Row className='contacts-text'>
              <Col span={12} className='col-style-bold'>PO-YU TSAI</Col>
              <Col span={12} className='col-style'>tsaiball0331@gmail.com</Col>
            </Row>
            <Row className='contacts-title' style={{ textAlign: 'center' }}>
              <Col span={12} className='col-style'>Location</Col>
              <Col span={12} className='col-style'>Map</Col>
            </Row>
            <Row className='contacts-text'  >
              <Col span={14} >
                <img src={`${process.env.PUBLIC_URL}/imge/ntou.jpg`} />
                <p >Department of Computer Science and Engineering, National Taiwan Ocean University</p>
              </Col>
              <Col span={10} style={{ padding: "4%" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.3770786605182!2d121.77211182813686!3d25.150993616441696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4f063c44f073%3A0x58da11f75dcc14d!2z5ZyL56uL6Ie654Gj5rW35rSL5aSn5a24!5e0!3m2!1szh-TW!2sde!4v1723012183418!5m2!1szh-TW!2sde" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Col>

            </Row>
            
          

          </div>

        </div>

      </div>

    </>

  )
}

export default ContactsPage;
