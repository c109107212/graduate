import React, { useContext } from 'react';
import './BrowsePage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const BrowsePage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      BrowsePage

      
    </>

  )
}

export default BrowsePage;
