import React from 'react';
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components'
import './MainLayout.css'
const { Title, Text, Paragraph } = Typography
const { Content, Footer } = Layout;




const paths = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Search",
        url: '/Search'
    },
    {
        name: "Browse Clusters",
        url: '/Browse'
    },
    {
        name: "Prediction",
        url: '/Prediction'
    },

    {
        name: "Contacts",
        url: '/Contacts'
    },
    {
        name: "Help",
        url: '/Help'
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
                        <img src={'/imge/logo.png'} alt="Logo" style={{ padding: '5px' }} />
                    </Link>
                </Col>
                <Col span={18} className='px-4' style={{ paddingLeft: '10%' }}>
                    <br/>
                    <Title level={4} className='settest_down_left'>ADAM: A Database of Anti-Microbial peptides</Title>
                    <Paragraph className='settest_down_left'>A comprehensive antimicrobial peptide database with sequence-structure relationships</Paragraph>
                </Col>
            </Row>

            <Row className=' mt-8 mb-4 '>
                <Col span={1}></Col>
                {paths.map((data, index) => (
                    <NavLink
                        to={`${data?.url}`}
                        className={({ isActive }) => isActive ? "custom-link link-color-active" : "custom-link"}
                    >
                        {data?.name}
                    </NavLink>
                ))}
            </Row>
            <Row>
                <div style={{ position: "relative" }}>
                    <img src={`/imge/front.jpg`} alt='' style={{ width: '100vw' }} ></img>
                    <Paragraph className=' text-white text-base' style={{ position: "absolute", top: '30%', left: '2%', width: '50%', lineHeight: "2rem", fontSize: "90%" }}>
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
            <Footer>Copyright ©2024 National Taiwan Ocean University. All rights reserved.</Footer>
        </Layout>
    );
};

export default MainLayout;
