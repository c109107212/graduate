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
          <h1>Fold Clusters (structure-sequence) Information:</h1>
          
          <div style={{ padding: '1% 10%', margin: '0 5%' }}>
            <Row>
              <Col>
                <label>
                  ADAM provides two computational tools built to predict whether the target peptides/proteins are antimicrobial. To make prediction, users can upload the protein sequences with FASTA format to ADAM.
                </label>
              </Col>
            </Row>
            <Row className='svm-style'>
              <Col span={4}>
                <button className='PredictionPage_button' onClick={SvmClick}>SVM</button>
              </Col>
              <Col span={20}>
                <label>
                  ADAM provides two computational tools built to predict whether the target peptides/proteins are antimicrobial. To make prediction, users can upload the protein sequences with FASTA format to ADAM.
                </label>
              </Col>
            </Row>
            <Row className='hmm-style'>
              <Col span={4}>
              <button className='PredictionPage_button' onClick={HMMClick}>HMM</button>
              </Col>
              <Col span={20}>
                <label>
                  ADAM provides two computational tools built to predict whether the target peptides/proteins are antimicrobial. To make prediction, users can upload the protein sequences with FASTA format to ADAM.
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
