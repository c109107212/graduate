import React, { useContext } from 'react';
import './SearchPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext
import { Button, Col, Flex, Row } from 'antd';
import { useNavigate } from 'react-router-dom';


const SearchPage = () => {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Show all');
    setUser([
      { id: 'ADAM_0001', description: 'galiomicin', sequence_sane: 'AAAAGSWVGNAA' },
      { id: 'ADAM_0002', description: 'gag protein', sequence_sane: 'AAANPGLLTSENGCRCQITL' },
      { id: 'ADAM_0003', description: 'HIV SAVINE 3', sequence_sane: 'AAAAPALIEEMMTACQGV' },
      { id: 'ADAM_0001', description: 'galiomicin', sequence_sane: 'AAAAGSWVGNAA' },
      { id: 'ADAM_0002', description: 'gag protein', sequence_sane: 'AAANPGLLTSENGCRCQITL' },
      { id: 'ADAM_0003', description: 'HIV SAVINE 3', sequence_sane: 'AAAAPALIEEMMTACQGV' }
    ]);
    navigate('/Search/SearchAns');
  };
return (
  <>
    <div style={{ padding: '3%' }}>
      <h1>Search</h1>
      {/* <div className='setdisplay-column-SearchPage' > */}
      <form action="/search_results" method="post">
        <table className='table_Search'>
          <tr>
            <th className='th_Search'>Basic Type</th>
            <th className='th_Search'>Search section</th>
            <th className='th_Search'>Example</th>
          </tr>
          <tr>
            <td className='td_Search'>ADAM ID</td>
            <td className='td_Search'><input type="text" name="adam_id" /></td>
            <td className='td_Search'>ADAM_0343</td>
          </tr>
          <tr>
            <td className='td_Search'>Name</td>
            <td className='td_Search'><input type="text" name="name" /></td>
            <td className='td_Search'>Lactoferrin</td>
          </tr>
          <tr>
            <td className='td_Search'>Sequence</td>
            <td className='td_Search'><input type="text" name="sequence" style={{ textAlign: 'center', height: '50px', lineHeight: '40px', padding: '0 10px' }} /></td>
            <td className='td_Search'>APRKVFN</td>
          </tr>
          <tr>
            <td className='td_Search'>Length</td>
            <td className='td_Search'>
              <select name="length">
                <option>2-10</option>
                <option>11-20</option>
                <option>21-30</option>
                <option>31-40</option>
                <option>41-50</option>
                <option>51-60</option>
                <option>61-70</option>
                <option>71-80</option>
                <option>81-90</option>
                <option>91-100</option>
              </select>
            </td>
            <td className='td_Search'>2-10</td>
          </tr>
          <tr>
            <td className='td_Search'>Taxonomy</td>
            <td className='td_Search'>
              <select name="taxonomy">
                <option value="archaea">Archaea</option>
                <option value="bacteria">Bacteria</option>
                <option value="algae">Algae</option>
                <option value="fungi">Fungi</option>
                <option value="plants">Plants</option>
                <option value="vertebrates">Vertebrates</option>
                <option value="insects">Insects</option>
                <option value="molluscs">Molluscs</option>
                <option value="other_invertebrates">Other invertebrates</option>
                <option value="other_eukaryotes">Other eukaryotes</option>
                <option value="viruses">Viruses</option>
                <option value="artificial">Artificial</option>
              </select>
            </td>
            <td className='td_Search'>Vertebrate</td>
          </tr>
          <tr>
            <td className='td_Search'>Other DB</td>
            <td className='td_Search'>
              <select name="other_db">
                <option value="apd">APD</option>
                <option value="camp">CAMP</option>
                <option value="dampd">DAMPD</option>
                <option value="dadp">DADP</option>
                <option value="yadamp">YADAMP</option>
                <option value="bactibase">BACTIBASE</option>
                <option value="penbase">Penbase</option>
                <option value="phytamp">PhytAMP</option>
                <option value="rapd">RAPD</option>
                <option value="avppred">AVPpred</option>
                <option value="hipdb">HIPdb</option>
              </select>
            </td>
            <td className='td_Search'>DADP</td>
          </tr>
          <tr>
            <td className='td_Search'>Pfam Domain</td>
            <td className='td_Search'><input type="text" name="pfam_domain" /></td>
            <td className='td_Search'>Transferin</td>
          </tr>
          <tr>
            <th className='th_Search'>Structure</th>
            <th className='th_Search'>Search section</th>
            <th className='th_Search'>Example</th>
          </tr>
          <tr>
            <td className='td_Search'>Fold ID</td>
            <td className='td_Search'><input type="text" name="fold_id" /></td>
            <td className='td_Search'>AC_019</td>
          </tr>
          <tr>
            <td className='td_Search'>PDB ID</td>
            <td className='td_Search'><input type="text" name="pdb_id" /></td>
            <td className='td_Search'>1B1Y</td>
          </tr>
        </table>
        <Row style={{ padding: '3% 10% 3% 20%' }}>
          <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <button className='Search_button' type="submit">Submit</button>
              <button className='Search_button' type="reset">Reset</button>
            </div>
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='Search_button' type="button" onClick={handleClick}>Show All</button>
          </Col>
        </Row>

      </form>
      {/* </div> */}
    </div>



  </>

)
}

export default SearchPage;
