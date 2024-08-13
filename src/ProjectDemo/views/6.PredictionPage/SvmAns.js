import React from 'react';
import './PredictionPage.css';
import { Table, Row, Col } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SvmAns = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const predictionData = location.state?.predictionData || '';

    const parseInputData = (data) => {
        const lines = data.split('\n');
        const results = [];

        for (let i = 0; i < lines.length; i += 2) {
            if (lines[i] && lines[i + 1]) {
                const name = lines[i].replace('>', '').trim();
                const sequence = lines[i + 1].trim();
                const value = (Math.random() * 10 - 5).toFixed(2); //暫時先用隨機數字
                const label = value > 0 ? 'AMP' : 'Non AMP';
                results.push({
                    key: i / 2 + 1,
                    name,
                    sequence,
                    value,
                    label,
                });
            }
        }

        return results;
    };

    const svmResults = parseInputData(predictionData);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Sequence',
            dataIndex: 'sequence',
            key: 'sequence',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Label',
            dataIndex: 'label',
            key: 'label',
        },
    ];
    const backClick = () => {
        navigate(-1);
    };
    return (
        <>
            <div style={{ padding: '3%' }}>
                <div className="table-container">
                    <h1>SVM Predict:</h1>
                    <Row>
                        <Col>
                            <Link onClick={backClick}>Back</Link>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Col span={24}>
                            <Table
                                dataSource={svmResults}
                                columns={columns}
                                pagination={false}
                                bordered
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default SvmAns;
