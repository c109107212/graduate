import React, { useContext } from 'react';
import './SearchPage.css';
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext
import { Input, Select, Form, Button, Space, Typography, Col, Row, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const SearchPage = () => {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Form values:", values);
    fetchData(values);
  };

  const fetchData = (params) => {
    console.log("Sending data:", params);
    const bodyData = JSON.stringify(params);
    fetch(`http://localhost/api/postSearchData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:bodyData

    })
      .then(response => response.json())
      .then(data => {
        console.log("Response data:", data.data.original);

        setUser(data.data);
        navigate('/Search/SearchAns', { state: { data:data.data.original, formParams: params }});
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
        message.error('Error retrieving data!');
        navigate('/Search/SearchAns', { state: { message:"null", formParams: params }});
      });
  };


  const AllClick = () => {
    const params={
      message:'Show All'
    }
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
        navigate('/Search/SearchAns', { state:  { data:data.data.original, formParams: params }});
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
        message.error('Error retrieving data!');
      });

  };
  
  return (
    <>
      <img src={`/imge/search_background_2.jpg`} alt='' style={{ width: '100vw' }} ></img>
      <Paragraph className='Paragraph-style-search' >

        <Row>
          <Col>
            <Button style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: "3px 8px 0 0", marginRight: "1px", padding: '10% 20%', fontSize: '16px' }}>
              search
            </Button>
         
          </Col>
        </Row>
        <div style={{ padding: '1%', backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '100%' }}>

          <div style={{ padding: '20px 10px 20px 20px', maxWidth: '960px', margin: '0 auto' }}>

            <Form layout="vertical" onFinish={onFinish}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>

                <Row justify="space-between">
                  <Col span={2}><div className='title_lable'>Basic Type</div></Col>
                  <Col span={21}>
                    <Space wrap size="large">
                      <Form.Item label="ADAM ID" name="adam_id">
                        <Input placeholder="ADAM_0343" />
                      </Form.Item>
                      <Form.Item label="Name" name="description">
                        <Input placeholder="Lactoferrin" />
                      </Form.Item>
                      <Form.Item label="Sequence" name="sequence">
                        <Input placeholder="APRKVFN" />
                      </Form.Item>
                      <Form.Item label="Length" name="length">
                        <Select style={{ width: '100%' }}>
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
                      <Form.Item label="Taxonomy" name="sp_id">
                        <Select style={{ width: '100%' }}>
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
                      <Form.Item label="Other DB" name="other_db">
                        <Select style={{ width: '100%' }}>
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
                      <Form.Item label="Pfam Domain" name="pfam_domain">
                        <Input placeholder="Transferin" />
                      </Form.Item>
                    </Space>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={2}><div className='title_lable'>Structure	</div></Col>
                  <Col span={1}></Col>
                  <Col span={14}>
                    <Space wrap size="large">
                      <Form.Item label="Fold ID" name="fold_id">
                        <Input placeholder="AC_019" />
                      </Form.Item>
                      <Form.Item label="PDB ID" name="pdb_id">
                        <Input placeholder="1HIWA" />
                      </Form.Item>
                    </Space>
                  </Col>
                  <Col span={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div>
                      <Button  type="primary" htmlType="submit" className='Search_button'>Submit</Button>
                      <Button htmlType="reset" className='Search_button'>Reset</Button>
                    </div>
                  </Col>
                  <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <button className='Search_button' type="button" onClick={AllClick}>Show All</button>
                  </Col>
                </Row>
              </Space>
            </Form>
          </div>
        </div>
      </Paragraph>


    </>

  )
}

export default SearchPage;
