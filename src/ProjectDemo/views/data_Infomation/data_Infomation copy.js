import React, { useContext, useEffect, useState, useRef } from 'react';
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
  const [adamDataComposition, setAdamDataComposition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('001');
  const chartRef = useRef(null);

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

  const getComposition = async () => {
    try {
      const response = await fetch(`http://localhost/api/getComposition?adam_id=${id}`);
      const data = await response.json();
      if (data.status === 'success') {
        setAdamDataComposition(data.data[0]);
      } else {
        message.error(data.message || 'Failed to fetch data');
      }
    } catch (error) {
      message.error('An error occurred while fetching data');
    }
  };

  useEffect(() => {
    getDatainfo();
    getComposition();
  }, [id]);

  useEffect(() => {
    if (adamData) {
      get3d();
      get3d_Corresponding();
    }
  }, [adamData]);

  useEffect(() => {
    if (adamData) {
      get3d();
      console.log(`alphafold2pdb/1to2_5/${id}_${selectedValue}.pdb`);
    }
  }, [selectedValue]);

  const get3d_Corresponding = () => {
    const script = document.createElement("script");
    if (adamData.cluster_pdb_id != null) {
      script.src = "/JSmol.min.js"; // 指向 public 目錄下的 JSmol.min.js
      const ClusterPdbId = adamData.cluster_pdb_id.slice(0, 4).toUpperCase();
      script.src = "/JSmol.min.js"; // 指向 public 目錄下的 JSmol.min.js
      script.onload = () => {
      if (window.Jmol) {
        console.log("Jmol 加載成功");
        setTimeout(() => {
          var Info = {
            width: 300,
            height: 300,
            j2sPath: "/j2s",  // 指向 j2s 文件夾
            script: `load /jmol/adam_models/${ClusterPdbId}.pdb; cpk off; wireframe off; ribbons; color ribbons structure; spin on;`,
            use: "HTML5",
            serverURL: "/j2s/php/jsmol.php"
          };

            const container = document.getElementById("jsmolContainer_Corresponding");
            const controls = document.getElementById("jsmolControls_Corresponding");

            if (container && controls) {
              // 加载 JSmol 小部件
              container.innerHTML = window.Jmol.getAppletHtml("jsmolApplet_Corresponding", Info);

              // 设置控制面板 HTML
              controls.innerHTML = `
                <div style="text-align: left;">
                  <div>Ribbons Color</div>
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet_Corresponding, 'color ribbons none')" />None
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet_Corresponding, 'color ribbons structure')" checked/>Structure
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet_Corresponding, 'color ribbons amino')" />Amino
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet_Corresponding, 'color ribbons skyblue')" />Skyblue
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet_Corresponding, 'color ribbons yellow')" />Yellow
                  <br />
                  <input type="checkbox" onclick="Jmol.script(jsmolApplet_Corresponding, this.checked ? 'wireframe on' : 'wireframe off')" />Wireframe on/off
                  <input type="checkbox" onclick="Jmol.script(jsmolApplet_Corresponding, this.checked ? 'spin on' : 'spin off')" checked/>Spin on/off
                  <br />
                  <div>Spacefill</div>
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet_Corresponding, 'spacefill off')" checked />Off
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet_Corresponding, 'spacefill 25%')" />25%
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet_Corresponding, 'spacefill on')" />100%
                  <br />
                  <button onclick="Jmol.script(jsmolApplet_Corresponding, 'zoom 300')">Zoom 300</button>
                  <button onclick="Jmol.script(jsmolApplet_Corresponding, 'zoom 100')">Zoom 100</button>
                </div>
              `;
            } else {
              console.error("jsmolContainer_Corresponding 或 jsmolControls_Corresponding 元素未找到");
            }
          }, 1000); // 延遲 1 秒檢查 DOM
        }
      };
      document.body.appendChild(script);
    }
  };

  const get3d = () => {
    const script = document.createElement("script");
    if (adamData.cluster_pdb_id != null) {
      script.src = "/JSmol.min.js"; // 指向 public 目錄下的 JSmol.min.js
      script.onload = () => {
        if (window.Jmol) {
          console.log("Jmol 加載成功");
          setTimeout(() => {
            var Info = {
              width: 300,
              height: 300,
              j2sPath: "/j2s", // 指向 j2s 文件夾
              script: `load /alphafold2pdb/1to2_5/${id}_${selectedValue}.pdb; cpk off; wireframe off; ribbons; color ribbons structure; spin on;`,
              use: "HTML5",
              serverURL: "/j2s/php/jsmol.php"
            };

            const container = document.getElementById("jsmolContainer");
            const controls = document.getElementById("jsmolControls");

            if (container && controls) {
              // 加载 JSmol 小部件
              container.innerHTML = window.Jmol.getAppletHtml("jsmolApplet", Info);

              // 设置控制面板 HTML
              controls.innerHTML = `
                <div style="text-align: left;">
                  <div>Ribbons Color</div>
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons none')" />None
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons structure')" checked/>Structure
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons amino')" />Amino
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons skyblue')" />Skyblue
                  <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons yellow')" />Yellow
                  <br />
                  <input type="checkbox" onclick="Jmol.script(jsmolApplet, this.checked ? 'wireframe on' : 'wireframe off')" />Wireframe on/off
                  <input type="checkbox" onclick="Jmol.script(jsmolApplet, this.checked ? 'spin on' : 'spin off')" checked/>Spin on/off
                  <br />
                  <div>Spacefill</div>
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill off')" checked />Off
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill 25%')" />25%
                  <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill on')" />100%
                  <br />
                  <button onclick="Jmol.script(jsmolApplet, 'zoom 300')">Zoom 300</button>
                  <button onclick="Jmol.script(jsmolApplet, 'zoom 100')">Zoom 100</button>
                </div>
              `;
            } else {
              console.error("jsmolContainer 或 jsmolControls 元素未找到");
            }
          }, 1000); // 延遲 1 秒檢查 DOM
        }
      };
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    if (adamDataComposition) {
      // 等待畫布完全渲染
      const timer = setTimeout(() => {
        CreateChart();
      }, 300); // 延遲 300ms 確保畫布已渲染到 DOM

      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        clearTimeout(timer);
      };
    }
  }, [adamDataComposition]);

  const CreateChart = () => {
    if (window.Chart) {
      drawChart();
    } else {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.onload = () => {
        drawChart();
      };
      document.body.appendChild(script);
    }
  };

  const drawChart = () => {
    const canvas = document.getElementById('myChart');
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labels = Object.keys(adamDataComposition).filter(key => key !== 'id' && key !== 'adam_id');
    const values = labels.map(key => adamDataComposition[key] || 0);

    const ctx = canvas.getContext('2d');
    chartRef.current = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Amino Acid %',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false, // 禁用響應式，防止根據窗口大小縮放
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              align: 'center',
              padding: 10,
              font: {
                size: 14
              }
            },
            grid: {
              offset: true
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          }
        }
      }
    });
  };

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
                  <td className='DataInformation_td'>{adamData.sequence}</td>
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

                {adamData.cluster_pdb_id ? (
                  <tr>
                    <th className='DataInformation_th_pink'>Representative Fold</th>
                    <td>
                      <div style={{ display: "flex", alignItems: 'flex-start', height: '350px' }}>
                        <div id="jsmolContainer"></div>
                        <div className='jsmolbuttomshow'>
                          <div id="jsmolControls"></div>
                        </div>
                      </div>
                      <div id="jsmolbuttom">
                        <button
                          className={`pdb-button ${selectedValue === '001' ? 'selected' : ''}`}
                          onClick={() => setSelectedValue('001')}>Model 1 (Best)</button>
                        <button
                          className={`pdb-button ${selectedValue === '002' ? 'selected' : ''}`}
                          onClick={() => setSelectedValue('002')}>Model 2</button>
                        <button
                          className={`pdb-button ${selectedValue === '003' ? 'selected' : ''}`}
                          onClick={() => setSelectedValue('003')}>Model 3</button>
                        <button
                          className={`pdb-button ${selectedValue === '004' ? 'selected' : ''}`}
                          onClick={() => setSelectedValue('004')}>Model 4</button>
                        <button
                          className={`pdb-button ${selectedValue === '005' ? 'selected' : ''}`}
                          onClick={() => setSelectedValue('005')}>Model 5</button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <th className='DataInformation_th_pink'>Representative Fold</th>
                    <td className='DataInformation_td'>null</td>
                  </tr>
                )}

                <tr>
                  <th className='DataInformation_th_pink'>Corresponding PDB</th>
                  <td>
                    <div style={{ display: "flex", alignItems: 'flex-start', height: '350px' }}>
                      <div id="jsmolContainer_Corresponding"></div>
                      <div className='jsmolbuttomshow_Corresponding'>
                        <div id="jsmolControls_Corresponding"></div>
                      </div>
                    </div>
                  </td>
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
                  <th colSpan="2" style={{ backgroundColor: '#ffef85', color: 'black' }}>Composition</th>
                </tr>
                <tr style={{ height: '200px' }}>
                  <td colSpan="2" className='DataInformation_td' style={{ height: '200px', width: '400px' }}><canvas id="myChart" width="600" height="300"></canvas></td>
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
