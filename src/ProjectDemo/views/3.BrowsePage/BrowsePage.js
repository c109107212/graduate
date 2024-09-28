import React, { useContext, useEffect, useState } from 'react';
import './BrowsePage.css';  // 引入樣式文件
import { MyContext } from '../../../Context/MyContext';
import { Table, message, Pagination } from 'antd';

const BrowsePage = () => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25); // 預設每頁顯示25條記錄
  const [data, setData] = useState([]);

  const fetchTotal = (tableName) => {

    fetch(`http://localhost/api/getTotal?table=${tableName}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.total) {
          setTotalRecords(data.total);
        } else {
          throw new Error('Invalid response');
        }
      })
      .catch(error => {
        console.error('獲取數據總數失敗:', error);
        message.error('獲取數據總數失敗');
      });
  };


  const fetchData = (page, pageSize) => {

    fetch(`http://localhost/api/getClusterData?page=${page}&pageSize=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setData(data.data);
          message.success('Data loaded successfully!');
        } else {
          message.error('Failed to retrieve data: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
        message.error('Error retrieving data!');
      });
  };

  useEffect(() => {

    message.success('Loading data...');
    fetchTotal('251_cluster');

    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Pfam Domain數據
  const renderPfamDomain = (clusterId, domain, hmmId) => {
    if (['1', '2', '9', '15', '4', '6', '22'].includes(clusterId)) {
      return <td className='td_BrowsePage'><center>Multiple</center></td>;
    } else if (domain) {
      return (
        <td className='td_BrowsePage'>
          <center><a href={`https://pfam.xfam.org/family${hmmId}`}>{domain}</a></center>
        </td>
      );
    } else {
      return <td className='td_BrowsePage'><center>NA</center></td>;
    }
  };

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

  // 表格數據
  // const tableRows = data.map(item => (
  //   <tr key={item.id}>
  //     <td className='td_BrowsePage'>
  //       <div>{clusterId(item.cluster_id)}</div>
  //       <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${item.cluster_id}`}>
  //         <img src={`/60cluster_net_jpg/${item.cluster_id}.jpg`} height={'80%'} alt="" />
  //       </a>
  //     </td>
  //     <td className='td_BrowsePage'>
  //       <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${item.pdb_id.substring(0, 4)}`}>
  //         <img src={`/60cluster_pdb_jpg/${item.pdb_id.toLowerCase()}.png`} height="100%" width="100%" alt="" />
  //       </a>
  //     </td>
  //     <td className='td_BrowsePage'>{item.seq_num}</td>
  //     {renderPfamDomain(item.cluster_id, item.domain, item.hmm_id)}
  //     <td className='td_BrowsePage_left'>
  //       <CATHData item={item} />
  //     </td>
  //     <td className='td_BrowsePage_left'>
  //       <SCOPData item={item} />
  //     </td>
  //   </tr>
  // ));
  const columns = [
    {
      title: 'Cluster ID',
      dataIndex: 'cluster_id',
      key: 'cluster_id',
      width: '10%',
      render: (text, record) => (
        <div className='td_BrowsePage'>
          {`AC_${text.padStart(3, '0')}`}
          <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${text}`}>
            <img src={`/60cluster_net_jpg/${text}.jpg`} style={{ height: '80px', width: 'auto' }} alt="" />
          </a>
        </div>
      )
    },
    {
      title: 'Structural Fold (PDB ID)',
      dataIndex: 'pdb_id',
      key: 'pdb_id',
      width: '10%',

      render: pdb_id => (
        <a href={`http://www.rcsb.org/pdb/explore.do?structureId=${pdb_id.substring(0, 4)}`}>
          <img src={`/60cluster_pdb_jpg/${pdb_id.toLowerCase()}.png`} style={{ height: "100%", width: "auto" }} alt="" />
        </a>
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
      render: (domain, record) => renderPfamDomain(record.cluster_id, domain, record.hmm_id)
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

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    total: totalRecords,
    onChange: handlePageChange,
    showSizeChanger: true,
    onShowSizeChange: handlePageChange,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    pageSizeOptions: ['10', '25', '50', '100'],
    locale: {
      items_per_page: 'items per page'
    }
  };
  return (
    <>
      <div style={{ padding: '0 3% 3% 3%' }}>
        <div >

          <p  className='titlebackground'>Fold Clusters (structure-sequence) Information:  </p>

          <Pagination {...paginationConfig} className='divstyle_right' />
        </div>
        <div style={{marginTop:'2%',marginBottom:'2%'}}>
          
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
        <div className='divstyle'>

          <Pagination {...paginationConfig} />

        </div>
      </div>

    </>
  );
}

export default BrowsePage;
