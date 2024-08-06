import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import './MainLayout.css';
const { Header, Content, Footer } = Layout;
const paths = ["Search", "Browse", "Clusters", "Prediction", "Contacts", "Help"];

const MainLayout = () => {
    return (
        <Layout style={{ backgroundColor: 'white', padding: "3%" }}>
            <Header>
            <div className='setdisplay-row' style={{ alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <Link to="/" style={{ color: 'white' }}>
                        <img src={`${process.env.PUBLIC_URL}/ADAM_logo.jpg`} alt="Logo" style={{ padding: '5px' }} />
                    </Link>
                </div>
                <div className="settest_center_left" style={{ flex: 3, padding: '1%', marginLeft: '10px' }}>
                    <br></br>
                    <b style={{ fontsize: '1%' }}>ADAM: A Database of Anti-Microbial peptides</b>
                    <p style={{ fontsize: '1%' }}>A comprehensive antimicrobial peptide database with sequence-structure relationships</p>
                </div>
            </div>

            <div className="link-container">
                <Link to="/" className="custom-link">Home</Link>
                {paths.map((path, index) => (
                    <NavLink
                        key={index}
                        to={`/${path}`}
                        className="link-color"
                        activeClassName="link-color-active"
                    >
                        {path}
                    </NavLink>
                ))}
            </div>

            <div class="image-container setdisplay-row">
                <img src={`${process.env.PUBLIC_URL}/imge/front.jpg`} ></img>
                <div class="test_mid">ADAM is a comprehensive antimicrobial peptide (AMP) database, containing 7,811 unique experimentally-validated sequences and 492 structures. It provides researchers a rapid AMP search tool and allows them to browse through AMP sequence-structure relationships. For detailed information about ADAM, please refer to the HELP page.</div>
            </div>
            </Header>
            

            <Content>
                <Outlet />
            </Content>
            <Footer>Footer content here</Footer>
        </Layout>
    );
};

export default MainLayout;
