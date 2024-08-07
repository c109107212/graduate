import React, { useContext } from 'react';
import './ClustersPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const ClustersPage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      
      ClustersPage
      
    </>

  )
}

export default ClustersPage;
