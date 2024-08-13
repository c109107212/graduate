import React, { useContext } from 'react';
import './BrowsePage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

const BrowsePage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);
  const data = [
    {
      id: 'AC_001',
      image: 'path/to/image1.png',
      structuralFold: '479',
      pfamDomain: 'Multiple',
      cath: 'Mainly Alpha',
      scop: 'Coiled coil proteins'
    },
    {
      id: 'AC_002',
      image: 'path/to/image2.png',
      structuralFold: '323',
      pfamDomain: 'Multiple',
      cath: 'Alpha Beta',
      scop: 'Small proteins'
    },
    // 添加更多数据...
  ];

  return (
    <>
      <div style={{ padding: '3%' }}>
        <div>
          <h1>Fold Clusters (structure-sequence) Infomation:</h1>
          <table className='table_BrowsePage'>
            <thead>
              <tr>
                <th className='th_BrowsePage'>Cluster ID</th>
                <th className='th_BrowsePage'>Structural Fold</th>
                <th className='th_BrowsePage'>#SEQ</th>
                <th className='th_BrowsePage'>Pfam Domain</th>
                <th className='th_BrowsePage'>CATH (Representative)</th>
                <th className='th_BrowsePage'>SCOP (Representative)</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>

                  <td className='td_BrowsePage'><img src={item.image} />{item.id}</td>
                  <td className='td_BrowsePage'><img src={item.image} /></td>
                  <td className='td_BrowsePage'>{item.structuralFold}</td>
                  <td className='td_BrowsePage'>{item.pfamDomain}</td>
                  <td className='td_BrowsePage'>{item.cath}</td>
                  <td className='td_BrowsePage'>{item.scop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </>

  )

}

export default BrowsePage;
