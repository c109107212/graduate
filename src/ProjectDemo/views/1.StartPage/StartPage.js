import React from 'react';
import './StartPage.css'
import { Layout, Row, Col, Typography, Button,Space, Divider} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography
const { Header, Content, Footer } = Layout;
const StartPage = () => {

  const navigate = useNavigate();
  const GoToHome = () => {
    navigate('/');
  };

  return (
    <Layout className="layout-background">

      <Content>
        <div style={{ position: "relative" }}>

          <img src={`/imge/startPage-3.jpg`} alt='' style={{ width: '100vw' }} ></img>
          
          <Paragraph className=' text-white text-base Paragraph-style' >
            
            <Row align={'middle'} style={{ marginBottom: '5%' }} >
              <Col span={24}>
                <Link to="/" style={{ color: 'white' }}>
                  <img src={'/imge/logo.png'} alt="Logo" style={{ padding: '5px', height: '90px' }} />
                </Link>
              </Col>
            </Row>
            <Row justify="start" align="top" style={{ marginLeft: '3%', marginBottom: '5%' }}>
              <Col span={24}>
                <Title level={4} style={{ color: 'white' }}>A Database of Anti-Microbial peptides</Title>
                <Paragraph style={{ color: 'white' }}>A comprehensive antimicrobial peptide database with sequence-structure relationships</Paragraph>
              </Col>
            </Row>


            <div className="button-container">
              <Button className="button-primary" type="dashed" onClick={GoToHome}>
                More
              </Button>
            </div>
          </Paragraph>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>

        Copyright ©2024 National Taiwan Ocean University. All rights reserved.
      </Footer>
    </Layout >
  );
};

export default StartPage;
