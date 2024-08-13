import React, { useContext } from 'react';
import './SearchPage.css';
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

import { Link} from 'react-router-dom';
const SearchAns = () => {
  const { user } = useContext(MyContext);  // 使用 useContext 获取用户数据
  
  return (
    <>
      <div>
        <h1>ADAM Database:</h1>
        
        <table className='table_Search'>
          <thead>
            <tr>
              <th className='th_Search'>ID</th>
              <th className='th_Search'>Description</th>
              <th className='th_Search'>Sequence</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (  // 使用从 SearchPage 设置的 user 数据动态生成表格
              <tr key={item.id}>
                <td className='td_Search'>
                  <Link to={`/Search/SearchAns/${item.id}`}>
                    {item.id}
                  </Link>
                  </td>
                <td className='td_Search'>{item.description}</td>
                <td className='td_Search'>{item.sequence_sane}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SearchAns;
