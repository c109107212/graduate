import React, { useContext, useEffect, useState } from 'react';
import './SearchPage.css';
import { MyContext } from '../../../Context/MyContext';
import { useLocation, useNavigate } from 'react-router-dom';

import { Card, Pagination, Select, Col, Row, Typography, Form, Input, Button, Link, Table } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const SearchAns = () => {
  const [showPanel, setShowPanel] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const location = useLocation();
  const { data, formParams } = location.state || {};
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  // const [loading, setLoading] = useState(false);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex)

  // console.log("Received data:", currentData);
  const initialValues = {
    adam_id: formParams.adam_id || '',
    description: formParams.description || '',
    sequence: formParams.sequence || '',
    length: formParams.length || '',
    sp_id: formParams.sp_id || '',
    other_db: formParams.other_db || '',
    pfam_domain: formParams.pfam_domain || '',
    fold_id: formParams.fold_id || '',
    pdb_id: formParams.pdb_id || '',
  };

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [formParams]);

  const tabledata = currentData.map(item => ({
    id: item.id,
    adam_id: item.adam_id,
    description: item.description,
    sequence: item.sequence,
  }));
  const [table_data, settable_data] = useState(tabledata);


  const handlePageChange = (page) => {
    setCurrentPage(page);

  };





  const columns = [
    {
      title: 'ADAM ID',
      dataIndex: 'adam_id',
      key: 'adam_id',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Sequence',
      dataIndex: 'sequence',
      key: 'sequence',
      className: 'sequence-column'
    }
  ];

  useEffect(() => {
    const endIndex = startIndex + pageSize;
    const newCurrentData = data.slice(startIndex, endIndex);
    console.log('Current data:', newCurrentData);
    settable_data(newCurrentData);
  }, [currentPage, pageSize, data]);  



  const handleFormSubmit = (values) => {
    // setLoading(true); 
    fetchData(values).then(newData => {
      settable_data(newData);
      // setLoading(false); 
      setCurrentPage(1);
    });
  };


  const fetchData = (params) => {
    console.log("Sending data:", params);
    const bodyData = JSON.stringify(params);
    fetch(`http://localhost/api/postSearchData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response data:", data.data.original);
        setUser(data.data);
        settable_data(data.data.original);
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });
  };


  const AllClick = () => {

    fetch(`http://localhost/api/postSearchData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response data:", data.data.original);
        setUser(data.data);
        settable_data(data.data.original);
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });

  };

  return (
    <>
      <Row>
        <Col span={5}>
          <div style={{ padding: '20px' }}>
            <Form layout="vertical" initialValues={initialValues} form={form} onFinish={handleFormSubmit}>
              <Row>
                <Col span={24}>
                  <div className='title_lable_ans'>Structure</div>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="ADAM ID" name="adam_id">
                    <Input placeholder="ADAM_0343" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Name" name="description">
                    <Input placeholder="Lactoferrin" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Sequence" name="sequence">
                    <Input placeholder="APRKVFN" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Length" name="length">
                    <Select placeholder="Select length">

                      <Option value=""></Option>
                      <Option value="2-10">2-10</Option>
                      <Option value="11-20">11-20</Option>
                      <Option value="21-30">21-30</Option>
                      <Option value="31-40">31-40</Option>
                      <Option value="41-50">41-50</Option>
                      <Option value="51-60">51-60</Option>
                      <Option value="61-70">61-70</Option>
                      <Option value="71-80">71-80</Option>
                      <Option value="81-90">81-90</Option>
                      <Option value="91-100">91-100</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Taxonomy" name="sp_id">
                    <Select placeholder="Select taxonomy">

                      <Option value=""></Option>
                      <Option value="archaea">Archaea</Option>
                      <Option value="bacteria">Bacteria</Option>
                      <Option value="algae">Algae</Option>
                      <Option value="fungi">Fungi</Option>
                      <Option value="plants">Plants</Option>
                      <Option value="vertebrates">Vertebrates</Option>
                      <Option value="insects">Insects</Option>
                      <Option value="molluscs">Molluscs</Option>
                      <Option value="other_invertebrates">Other invertebrates</Option>
                      <Option value="other_eukaryotes">Other eukaryotes</Option>
                      <Option value="viruses">Viruses</Option>
                      <Option value="artificial">Artificial</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Other DB" name="other_db">
                    <Select placeholder="Select database">

                      <Option value=""></Option>
                      <Option value="apd">APD</Option>
                      <Option value="camp">CAMP</Option>
                      <Option value="dampd">DAMPD</Option>
                      <Option value="dadp">DADP</Option>
                      <Option value="yadamp">YADAMP</Option>
                      <Option value="bactibase">BACTIBASE</Option>
                      <Option value="penbase">Penbase</Option>
                      <Option value="phytamp">PhytAMP</Option>
                      <Option value="rapd">RAPD</Option>
                      <Option value="avppred">AVPpred</Option>
                      <Option value="hipdb">HIPdb</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Pfam Domain" name="pfam_domain">
                    <Input placeholder="Transferin" />
                  </Form.Item>
                </Col>

              </Row>
              <Row >
                <Col span={24}>
                  <div className='title_lable_ans'>Structure</div>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Fold ID" name="fold_id">
                    <Input placeholder="AC_019" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="PDB ID" name="pdb_id">
                    <Input placeholder="1HIWA" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={16}>
                    <Col>
                      <Button type="primary" htmlType="submit" >Submit</Button>
                    </Col>
                    <Col>
                      <Button htmlType="reset" className='Search_button' onClick={() => form.resetFields()}>Reset</Button>
                    </Col>
                    <Col><Button className='Search_button' type="button" onClick={AllClick}>Show All</Button></Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col span={19}>
          <div className="search-results-container">
            <div className='titlebackground'>
              <h1>ADAM Database:</h1>
            </div>
            <Row >
              <Col span={5}>
              </Col>
              <Col span={19}>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={data.length}
                  onChange={handlePageChange}
                  style={{ textAlign: 'end' }}
                />
              </Col>
            </Row>
            <Table
              className="table_BrowsePage"
              columns={columns}
              dataSource={table_data}
              rowKey="id"
              pagination={false}
              onRow={(record) => {
                return {
                  onClick: () => {
                    navigate(`/Search/SearchAns/${record.adam_id}`); 
                  },
                };
              }}
            />
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={data.length}
              onChange={handlePageChange}
              style={{ marginTop: 16, textAlign: 'center' }}
            />
          </div >


        </Col >
      </Row>
    </>
  );
}

export default SearchAns;
