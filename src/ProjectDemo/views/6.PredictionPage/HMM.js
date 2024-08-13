import React, { useContext, useState } from 'react';
import './PredictionPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext
import { Button, Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const HMMPage = ({

}) => {
    const { user, setUser, language, setLanguage } = useContext(MyContext);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleExampleClick = () => {
        const ExampleData =
         `>TEST1
AAAAGSVWGAVNYTSDCNGECKRRGYKGGYCGSFANVNCWCET
> TEST2
MLTALGQVNNIQKEFTIKKTKQADHNLVARIDEIQEEEEEEDD
`
        setInputValue(ExampleData);
    };

    const handlePredictClick = () => {

        navigate('/Prediction/HMM/HMMAns', { state: { predictionData: inputValue } });
    };
    const backClick = () => {
        navigate(-1);
    };
    return (
        <>
            <div style={{ padding: '3%' }}>
                <div className="table-container">
                    <h1>HMM Prediction:</h1>
                    <Row>
                        <Col>
                            <Link onClick={backClick}>Back</Link>
                        </Col>
                    </Row>
                    <div style={{ padding: ' 1% 10%', margin: '0 5  %' }}>
                        <Row>
                            <Col span={24}>
                                <label style={{ textAlign: 'center' }}>
                                    Input sequences in FASTA format {' '}
                                    <Link onClick={handleExampleClick}>(Example)</Link>
                                </label>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col span={24}>
                                <textarea
                                    style={{ width: '100%', height: '150px' }}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={handlePredictClick}>Predict</Button>
                            </Col>
                        </Row>

                    </div>


                </div>

            </div>

        </>

    )
}

export default HMMPage;
