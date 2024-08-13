import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import "./data_Infomation.css"
const DataInformation = () => {
  const { user } = useContext(MyContext);
  const { id } = useParams();

  return (
    <>
      <div className='div_style'>
        <h1>ADAM Database: ADAM_0001</h1>
        <div >
          <table className='DataInformation_table'>
            <tbody >
              <tr >
                <th colspan="2" style={{ backgroundColor: '#447dc7', color: 'black' }}>AMP Information</th>
              </tr>
              <tr>
                <th className='DataInformation_th_blue'>ADAM ID</th>
                <td className='DataInformation_td'>ADAM_0001</td>
              </tr>
              <tr>
                <th className='DataInformation_th_blue'>Sequence</th>
                <td className='DataInformation_td'>AAAAGSVWGAVNYTSDCNGECKRRGYKGGYCGSFANVNCWCET</td>
              </tr>
              <tr>
                <th className='DataInformation_th_blue'>Description</th>
                <td className='DataInformation_td'>galiomicin</td>
              </tr>
              <tr>
                <th className='DataInformation_th_blue'>Related Species</th>
                <td className='DataInformation_td'>Helicoverpa armigera</td>
              </tr>

              <tr >
                <th colspan="2" style={{ backgroundColor: '#e5caff', color: 'black' }}>Structural View</th>
              </tr>
              <tr>
                <th className='DataInformation_th_pink'>Cluster ID</th>
                <td className='DataInformation_td'><a href="./cluster_detail.php?f=2">AC_002</a></td>
              </tr>
              <tr>
                <th className='DataInformation_th_pink'>Representative Fold</th>
                <td className='DataInformation_td'>Jmol Visualization</td>
              </tr>

              <tr>
                <th className='DataInformation_th_pink'>CATH</th>
                <td className='DataInformation_td'>[C] Alpha Beta, [A] 2-Layer Sandwich, [T] Defensin A-like</td>
              </tr>
              <tr>
                <th className='DataInformation_th_pink'>SCOP</th>
                <td className='DataInformation_td'>[C] Small proteins, [F] Knottins (small inhibitors, toxins, lectins)</td>
              </tr>

              <tr>
                <th colspan="2" style={{ backgroundColor: '#d3ff93', color: 'black' }}>Physical Properties</th>
              </tr>
              <tr>
                <th className='DataInformation_th_green'>Length</th>
                <td className='DataInformation_td'>43</td>
              </tr>
              <tr>
                <th className='DataInformation_th_green'>Aliphatic Index</th>
                <td className='DataInformation_td'>34.19</td>
              </tr>
              <tr>
                <th className='DataInformation_th_green'>Instability Index</th>
                <td className='DataInformation_td'>29.09</td>
              </tr>
              <tr>
                <th className='DataInformation_th_green'>Net Charge</th>
                <td className='DataInformation_td'>+1</td>
              </tr>
              <tr>
                <th className='DataInformation_th_green'>Hydropathicity</th>
                <td className='DataInformation_td'>-0.347</td>
              </tr>

              <tr >
                <th colspan="2" style={{ backgroundColor: ' #f2cac9', color: 'black' }}>External Links</th>
              </tr>
              <tr>
                <th className='DataInformation_th_red'>Pfam Domain</th>
                <td className='DataInformation_td'><a href="http://pfam.sanger.ac.uk/family/PF00537">Toxin_3</a></td>
              </tr>
              <tr>
                <th className='DataInformation_th_red'>RCSB PDB</th>
                <td className='DataInformation_td'><a href="http://www.rcsb.org/pdb/explore.do?structureId=1I2U">1I2U</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div >
    </>
  );
};

export default DataInformation;
