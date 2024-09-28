import React, { useContext } from 'react';
import './PredictionPage.css';
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext
import { Button, Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Prediction = () => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);
  const navigate = useNavigate();

  const SvmClick = () => {
    console.log("SvmClick")
    navigate('/Prediction/svm');
  };
  const HMMClick = () => {
    console.log("HMMClick")
    navigate('/Prediction/HMM');
  };
  return (
    <>
      <div style={{ padding: '3%' }}>
        <div className="table-container">
          <h1>AMP Prediction Tools:</h1>
          
          <div style={{ padding: '1% 10%', margin: '0 5%' }}>
            <Row>
              <Col>
                <label>
                  ADAM provides two computational tools built to predict whether the target peptides/proteins are antimicrobial. To make prediction, users can upload the protein sequences with FASTA format to ADAM.
                </label>
              </Col>
            </Row>
            <Row className='svm-style'>
              <Col span={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='PredictionPage_button' onClick={SvmClick}>SVM</button>
              </Col>
              <Col span={17}>
                <label style={{width:'60%'}}>
                   Support Vector Machines are used to recognize the AMP patterns using amino acid composition.
                </label>
              </Col>
            </Row>
            <Row className='hmm-style'>
              <Col span={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className='PredictionPage_button' onClick={HMMClick}>HMM</button>
              </Col>
              <Col span={17}>
                <label style={{width:'60%'}}>
                Profile hidden Markov models are used to search the AMP homologs.
                </label>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prediction;
