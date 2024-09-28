import React from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { Layout, Row, Col, Typography, Space, Dropdown, Button } from 'antd';
import './MainLayout.css';

const { Content, Footer, Header } = Layout;

// 定義 Dropdown 的菜單項目
const contactItems = [
  {
    key: '1',
    label: (
      <NavLink to="/about-us" className="custom-link">
        About Us
      </NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink to="/FeebackPage" className="custom-link">
        Feedback
      </NavLink>
    ),
  },
];

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
    name: "Help",
    url: '/Help'
  },
];



// const Header = () => {
//     const navigate = useNavigate()

//     const NavItem = styled.div`
//         background-color:lightgray;
//         margin-right:5px;
//         padding-left:25px;
//         padding-right:25px;
//         font-size:15px;
//         border-radius:0 10px 0 10px;
//         cursor:pointer;
//         &:hover {
//             background-color:brown;
//             color:white;
//         }
//     `;

//     return (

//         <>
//             <Row align={'middle'}>
//                 <Col span={6}>
//                     <Link to="/" style={{ color: 'white' }}>
//                         <img src={'/imge/logo.png'} alt="Logo" style={{ padding: '5px' }} />
//                     </Link>
//                 </Col>
//                 <Col span={18} className='px-4' style={{ paddingLeft: '10%' }}>
//                 {paths.map((data, index) => (
//                     <NavLink
//                         to={`${data?.url}`}
//                         className={({ isActive }) => isActive ? "custom-link link-color-active" : "custom-link"}
//                     >
//                         {data?.name}
//                     </NavLink>
//                 ))}
//                 </Col>
//             </Row>

//             <Row className=' mt-8 mb-4 '>
//                 <Col span={1}></Col>
//                 {paths.map((data, index) => (
//                     <NavLink
//                         to={`${data?.url}`}
//                         className={({ isActive }) => isActive ? "custom-link link-color-active" : "custom-link"}
//                     >
//                         {data?.name}
//                     </NavLink>
//                 ))}
//             </Row>
//             <Row>
//                 <div style={{ position: "relative" }}>
//                     <img src={`/imge/front.jpg`} alt='' style={{ width: '100vw' }} ></img>
//                     <Paragraph className=' text-white text-base' style={{ position: "absolute", top: '30%', left: '2%', width: '50%', lineHeight: "2rem", fontSize: "90%" }}>
//                         ADAM is a comprehensive antimicrobial peptide (AMP) database, containing 7,811 unique experimentally-validated sequences and 492 structures. It provides researchers a rapid AMP search tool and allows them to browse through AMP sequence-structure relationships. For detailed information about ADAM, please refer to the HELP page.
//                     </Paragraph>
//                 </div>
//             </Row>
//         </>
//     )
// }
const MainLayout = () => {
    const location = useLocation();
  
    const isContactActive = location.pathname === '/about-us' || location.pathname === '/FeebackPage';
  
    return (
      <Layout style={{ backgroundColor: 'white', padding: "1% 0" }}>
        <Header style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingBottom: '5%', marginTop: '5%' }}>
          <Row align={'middle'}>
            <Col span={6}>
              <Link to="/" style={{ color: 'white' }}>
                <img src={'/imge/logo-3.png'} alt="Logo" style={{ padding: '5px' }} />
              </Link>
            </Col>
            <Col span={18} style={{ display: 'flex', justifyContent: 'end', paddingRight: '10%', paddingTop: '2%' }}>
              <Space size="large">
                {paths.map((data, index) => (
                  <NavLink
                    to={`${data?.url}`}
                    className={({ isActive }) => isActive ? "custom-link link-color-active" : "custom-link"} 
                    style={{ fontSize: '15px' }}
                    key={index}
                  >
                    {data?.name}
                  </NavLink>
                ))}
                <Dropdown menu={{ items: contactItems }} placement="bottomRight"  className={isContactActive ? "custom-link link-color-active" : "custom-link"}>
                  <Button
                    type="link"
                    className={isContactActive ? "custom-link link-color-active" : "custom-link"}
                    style={{ fontSize: '15px' }}
                  >
                    Contacts
                  </Button>
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Copyright ©2024 National Taiwan Ocean University. All rights reserved.</Footer>
      </Layout>
    );
  };
  
  export default MainLayout;
  