import React, { useContext } from 'react';
import './HelpPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const HelpPage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      HelpPage

      
    </>

  )
}

export default HelpPage;
