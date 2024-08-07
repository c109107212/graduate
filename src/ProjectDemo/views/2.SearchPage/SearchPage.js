import React, { useContext } from 'react';
import './SearchPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const SearchPage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      

      SearchPage
    </>

  )
}

export default SearchPage;
