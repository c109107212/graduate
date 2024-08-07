import React from 'react';
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components'
const { Title, Text, Paragraph } = Typography
const { Content, Footer } = Layout;






const paths = [
    {
        name: "Search",
        url: '/'
    },
    {
        name: "Browse",
        url: '/'
    },
    {
        name: "Clusters",
        url: '/'
    },
    {
        name: "Prediction",
        url: '/'
    },

    {
        name: "Contacts",
        url: '/'
    },
    {
        name: "Help",
        url: '/'
    },
];


const Header = () => {
    const navigate = useNavigate()

    const NavItem = styled.div`
        background-color:lightgray;
        margin-right:5px;
        padding-left:25px;
        padding-right:25px;
        font-size:15px;
        border-radius:0 10px 0 10px;
        cursor:pointer;
        &:hover {
            background-color:brown;
            color:white;
        }
    `;

    return (
        <>
            <Row align={'middle'}>
                <Col span={6}>
                    <Link to="/" style={{ color: 'white' }}>
                        <img src={'/ADAM_logo.jpg'} alt="Logo" style={{ padding: '5px' }} />
                    </Link>
                </Col>
                <Col span={18} className='px-4'>
                    <Title level={4} >ADAM: A Database of Anti-Microbial peptides</Title>
                    <Paragraph style={{ 'margin': '0', 'paddingLeft': '7%' }} >A comprehensive antimicrobial peptide database with sequence-structure relationships</Paragraph>
                </Col>
            </Row>

            <Row className=' mt-8 mb-4 '>
                <Col span={1}></Col>
                {paths?.map((data, i) => (
                    <NavItem onClick={() => { navigate(`${data?.url}`) }}>
                        {data?.name}
                    </NavItem>
                ))}
            </Row>
            <Row>
                <div style={{ position: "relative" }}>
                    <img src={`/imge/front.jpg`} alt='' style={{ width: '100vw' }} ></img>
                    <Paragraph  className=' text-white text-base' style={{ position: "absolute", top: '30%', left: '1.5%'  ,width:'50%' ,lineHeight:"2rem"}}>
                        ADAM is a comprehensive antimicrobial peptide (AMP) database, containing 7,811 unique experimentally-validated sequences and 492 structures. It provides researchers a rapid AMP search tool and allows them to browse through AMP sequence-structure relationships. For detailed information about ADAM, please refer to the HELP page.
                    </Paragraph>
                </div>
            </Row>
        </>
    )
}
const MainLayout = () => {
    return (
        <Layout style={{ backgroundColor: 'white', padding: "3%" }}>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer>Copyright c 2023 National Taiwan Ocean University. All rights reserved.</Footer>
        </Layout>
    );
};

export default MainLayout;
