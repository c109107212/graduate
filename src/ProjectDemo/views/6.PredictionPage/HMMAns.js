import React from 'react';
import './PredictionPage.css';
import { Table, Row, Col } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const HMMAns = () => {
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
                const target = Math.random() > 0.5 ? 'Toxin_3' : 'Null'; // 示例目标数据
                const evalue = target !== 'Null' ? (Math.random() * 1e-10).toExponential(1) : 'Null'; // 示例e-value
                const label = target !== 'Null' ? 'Antimicrobial Peptide' : 'NON-Antimicrobial Peptide';
    
                results.push({
                    key: i / 2 + 1,
                    name,
                    sequence,
                    target,
                    evalue,
                    label,
                });
            }
        }
    
        return results;
    };
    
    const HMMResults = parseInputData(predictionData);

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
            title: 'Target',
            dataIndex: 'target',
            key: 'target',
        },
        {
            title: 'e-value',
            dataIndex: 'evalue',
            key: 'evalue',
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
                    <h1>HMM Predict:</h1>
                    <Row>
                        <Col>
                            <Link onClick={backClick}>Back</Link>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Col span={24}>
                            <Table
                                dataSource={HMMResults}
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

export default HMMAns;
