import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import "./data_Infomation.css";
import { message } from 'antd';

const DataInformation = () => {
  const { user } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);
  const [adamData, setAdamData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDatainfo = async () => {
    try {
      const response = await fetch(`http://localhost/api/getDatainfo?adam_id=${id}`);
      const data = await response.json();
      if (data.status === 'success') {
        setAdamData(data.data[0]);

        setLoading(false);
        console.log(data.data[0]);
      } else {
        message.error(data.message || 'Failed to fetch data');
      }
    } catch (error) {
      message.error('An error occurred while fetching data');

    }
  };
  useEffect(() => {

    getDatainfo();
  }, [id]);



  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {adamData ? (
        <div className='div_style'>
          <h1>ADAM Database: {id}</h1>
          <div>
            <table className='DataInformation_table'>
              <tbody>
                <tr>
                  <th colSpan="2" style={{ backgroundColor: '#447dc7', color: 'black' }}>AMP Information</th>
                </tr>
                <tr>
                  <th className='DataInformation_th_blue'>ADAM ID</th>
                  <td className='DataInformation_td'>{id}</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_blue'>Sequence</th>
                  <td className='DataInformation_td'>{adamData.sp}</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_blue'>Description</th>
                  <td className='DataInformation_td'>{adamData.description}</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_blue'>Related Species</th>
                  <td className='DataInformation_td'>{adamData.related_species}</td>
                </tr>

                <tr>
                  <th colSpan="2" style={{ backgroundColor: '#e5caff', color: 'black' }}>Structural View</th>
                </tr>
                <tr>
                  <th className='DataInformation_th_pink'>Cluster ID</th>
                  <td className='DataInformation_td'><a href="./cluster_detail.php?f=2">AC-11</a></td>
                </tr>
                <tr>

                  {adamData.cluster_pdb_id ? (
                    <>
                    <th className='DataInformation_th_pink'>Representative Fold</th>
                    <td className='DataInformation_td' >
                      <button style={{backgroundColor:'#ffe0ee',padding:'2px 20px 2px 20px', borderRadius:'5px'}} onClick={() => navigate(`/Search/SearchAns/${adamData.adam_id}/${adamData.cluster_pdb_id.slice(0, 4)}`)}>SHOW</button>
                    </td>
                    </>
                    
                  ) : (
                    <>
                      <th className='DataInformation_th_pink'>Representative Fold</th>
                      <td>null</td>
                    </>
                  )}
                </tr>


                <tr>
                  <th className='DataInformation_th_pink'>CATH</th>
                  {adamData.cath_c && adamData.cath_a && adamData.cath_t ? (

                    <td className='DataInformation_td'>

                      {adamData.cath_c || 'null'}, {adamData.cath_a || 'N/A'}, {adamData.cath_t || 'N/A'}
                    </td>
                  ) : (
                    <td className='DataInformation_td'>
                      null
                    </td>
                  )}
                </tr>
                <tr>
                  <th className='DataInformation_th_pink'>SCOP</th>
                  {adamData.scop_c && adamData.scop_f1 && adamData.scop_f2 ? (
                    <td className='DataInformation_td'>
                      {adamData.scop_c || 'N/A'}, {adamData.scop_f1 || 'N/A'}, {adamData.scop_f2 || 'N/A'}
                    </td>) : (
                    <td className='DataInformation_td'>
                      null
                    </td>
                  )}
                </tr>

                <tr>
                  <th colSpan="2" style={{ backgroundColor: '#d3ff93', color: 'black' }}>Physical Properties</th>
                </tr>
                <tr>
                  <th className='DataInformation_th_green'>Length</th>
                  <td className='DataInformation_td'>Length</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_green'>Aliphatic Index</th>
                  <td className='DataInformation_td'>{adamData.aliphatic}</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_green'>Net Charge</th>
                  <td className='DataInformation_td'>{adamData.charge}</td>
                </tr>
                <tr>
                  <th className='DataInformation_th_green'>Hydropathicity</th>
                  <td className='DataInformation_td'>{adamData.hydropathicity}</td>
                </tr>


                <tr>
                  <th colSpan="2" style={{ backgroundColor: '#f2cac9', color: 'black' }}>External Links</th>
                </tr>
                <tr>
                  <th className='DataInformation_th_red'>Pfam Domain</th>
                  <td className='DataInformation_td'>
                    <a href={`http://pfam.sanger.ac.uk/family/${adamData.hmm_id}`}>{adamData.hmm_id || 'N/A'}</a>
                  </td>
                </tr>
                <tr>
                  <th className='DataInformation_th_red'>RCSB PDB</th>
                  <td className='DataInformation_td'>
                    <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${adamData.pdb_id}`}>{adamData.pdb_id || 'N/A'}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DataInformation;