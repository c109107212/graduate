import React, { useContext } from 'react';
import './PredictionPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const Prediction = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      Prediction

      
    </>

  )
}

export default Prediction;
