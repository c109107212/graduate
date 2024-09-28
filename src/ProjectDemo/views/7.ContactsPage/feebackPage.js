import React, { useContext } from 'react';
import './ContactsPage.css'
import { MyContext } from '../../../Context/MyContext';
import { Col, Row } from 'antd';



const FeebackPage = ({

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

          
            
          

          </div>

        </div>

      </div>

    </>

  )
}

export default FeebackPage;
