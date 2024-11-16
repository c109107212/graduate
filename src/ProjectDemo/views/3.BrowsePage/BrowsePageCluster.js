import React, { useContext, useEffect, useState } from 'react';
import './BrowsePage.css';  // 引入樣式文件
import { MyContext } from '../../../Context/MyContext';
import { Table, message, Pagination } from 'antd';

import { useParams,useNavigate } from 'react-router-dom';
const BrowsePageCluster = () => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25); // 預設每頁顯示25條記錄
  const { cluster_pdb_id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(cluster_pdb_id)
    
  const fetchData = (cluster_pdb_id) => {
    console.log(cluster_pdb_id)
    fetch(`http://localhost/api/getClusterOneData?cluster_id=${cluster_pdb_id}`)
    .then(response => response.json())
    .then(data => {
      setData(data.data)
      
      console.log(data)
    })
    .catch(error => {
      console.error('獲取數據總數失敗:', error);
      message.error('獲取數據總數失敗');
    });
  };
  useEffect(() => {
    message.success('Loading data...');
    fetchData(cluster_pdb_id);

  }, []);



  // CATH數據
  const CATHData = ({ item }) => {
    const { cath_c, cath_a, cath_t, cath_h } = item;
    const isAllZero = [cath_c, cath_a, cath_t, cath_h].every(val => val === "");

    if (isAllZero) {
      return <div>NA</div>;
    }

    return (
      <>
        {cath_c !== "" && cath_c !== "0" && <div>[C] {cath_c}</div>}
        {cath_a !== "" && cath_a !== "0" && <div>[A] {cath_a}</div>}
        {cath_t !== "" && cath_t !== "0" && <div>[T] {cath_t}</div>}
        {cath_h !== "" && cath_h !== "0" && <div>[H] {cath_h}</div>}
      </>
    );
  };

  // SCOP數據
  const SCOPData = ({ item }) => {
    const { scop_c, scop_f1, scop_s, scop_f2 } = item;
    const isAllZero = [scop_c, scop_f1, scop_s, scop_f2].every(val => val === "");

    if (isAllZero) {
      return <div>NA</div>;
    }

    return (
      <>
        {scop_c !== "" && scop_c !== "0" && <div>[C] {scop_c}</div>}
        {scop_f1 !== "" && scop_f1 !== "0" && <div>[F] {scop_f1}</div>}
        {scop_s !== "" && scop_s !== "0" && <div>[S] {scop_s}</div>}
        {scop_f2 !== "" && scop_f2 !== "0" && <div>[F] {scop_f2}</div>}
      </>
    );
  };


  const columns = [
    {
      title: 'Cluster ID',
      dataIndex: 'cluster_id',
      key: 'cluster_id',
      width: '10%',
      render: (text, record) => (
        <div className='td_BrowsePage' style={{ cursor: 'pointer' }}>
          {`AC_${text.padStart(3, '0')}`}
          {/* <img src={`/60cluster_net_jpg/${text}.jpg`} style={{ height: '80px', width: 'auto' }} alt="" /> */}
        </div>
      )
    },
    {
      title: 'PDB ID',
      dataIndex: 'pdb_id',
      key: 'pdb_id',
      width: '10%',

      render: pdb_id => (
        <div className='td_BrowsePage'   style={{ cursor: 'pointer' ,textTransform:'uppercase' }}>
         <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${pdb_id.substring(0, 4)}`}>
         {pdb_id.substring(0, 4)}
        </a>
        </div>
        
      )
    },
    {
      title: 'PDB Chain ID',
      dataIndex: 'pdb_id',
      key: 'pdb_id',
      width: '10%',

      render: pdb_id => (
        <div className='td_BrowsePage'  style={{ cursor: 'pointer' ,textTransform:'uppercase' }}>
         {pdb_id.substring(4,5)}
        </div>
        
      )
    },
    {
      title: '#SEQ',
      dataIndex: 'seq_num',
      key: 'seq_num',
      width: '10%',
      align: 'center',

    },
    {
      title: 'Pfam Domain',
      dataIndex: 'domain',
      key: 'domain',
      render: (domain, record) => {
        if (record.hmm_id) {
          return (
            <a href={`http://pfam.sanger.ac.uk/family/${record.hmm_id}`} target="_blank" rel="noopener noreferrer">
              {domain ? domain : 'NA'}
            </a>
          );
        } else {
          return <span>NA</span>;
        }
      },
    },
    
    {
      title: 'CATH',
      dataIndex: '',
      key: 'cath_c',
      render: (_, record) => <CATHData item={record} />
    },
    {
      title: 'SCOP',
      dataIndex: '',
      key: 'scop_c',
      render: (_, record) => <SCOPData item={record} />
    }
  ];

  return (
    <>
      <div style={{ padding: '0 3% 3% 3%' }}>
        <div >

          <p className='titlebackground'>Fold Clusters (structure-sequence) Information:  </p>

        </div>
        <div style={{alignItems:'center',justifyItems:'center'}}>
          <img src={`/60cluster_net_jpg/${cluster_pdb_id}.jpg`} style={{ height: '300px', width: 'auto' }} alt="" />
        </div>
        <div style={{ marginTop: '2%', marginBottom: '2%' }}>

          <Table
            className="table_BrowsePage"
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={false}
          />
        </div>
        {/* <table className='table_BrowsePage'>
          <thead>
            <tr>
              <th className='th_BrowsePage'>Cluster ID</th>
              <th className='th_BrowsePage'>Structural Fold (PDB ID)</th>
              <th className='th_BrowsePage'>#SEQ</th>
              <th className='th_BrowsePage'>Pfam Domain</th>
              <th className='th_BrowsePage'>CATH</th>
              <th className='th_BrowsePage'>SCOP</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table> */}

       </div>

     </>
  );
}

export default BrowsePageCluster;
