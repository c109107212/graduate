import React, { useContext } from 'react';
import './HomePage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const HomePage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      

      
    </>

  )
}

export default HomePage;
