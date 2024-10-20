import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import "./data_Infomation.css";
import { message } from 'antd';

const DataInformation_3D = () => {
  const { user } = useContext(MyContext);
  const { id, cluster_pdb_id } = useParams();
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);
  const [adamData, setAdamData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    const controls = document.getElementById("jsmolControls");
    const ClusterPdbId = cluster_pdb_id.toUpperCase();
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
          const container = document.getElementById("jsmolContainer");
          if (container  && controls) {
            container.innerHTML = window.Jmol.getAppletHtml("jsmolApplet", Info);
            controls.innerHTML = `
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
          `;
          } else {
            console.error("jsmolContainer 元素未找到");
          }
        }, 1000);  // 延遲 1 秒檢查 DOM
      }
    };
    document.body.appendChild(script);
  }, []);

  // useEffect(() => {
  //   console.log({ id, cluster_pdb_id });
  //   const container = document.getElementById("jsmolContainer");
  //   const controls = document.getElementById("jsmolControls");
  
  //   if (container && controls) {
  //     const script = document.createElement("script");
  //     script.src = "/jsmol/JSmol.min.js";
  //     script.onload = () => {
  //       console.log("Jmol 加載成功");
  //       if (window.Jmol) {
  //         const ClusterPdbId = cluster_pdb_id.toUpperCase();
  //         console.log(ClusterPdbId)
  //         var Info = {
  //           width: 500,
  //           height: 500,
  //           j2sPath: "/jsmol/j2s",  // j2s 路徑對應到 public 中的 j2s 文件夾
  //           script: `load /jmol/adam_models/${ClusterPdbId}.pdb; cpk off; wireframe off; ribbons; color ribbons structure; spin on;`,
  //           use: "HTML5",
  //           serverURL: "/j2s/php/jsmol.php",
  //           disableInitialConsole: true,
  //           disableJ2SKeys: true,
  //         };
          
  
  //         // 僅將 JSmol 加載到 jsmolContainer，不影響其他元素
  //         container.innerHTML = window.Jmol.getAppletHtml("jsmolApplet", Info);
  //         window.jsmolApplet = window.Jmol.getApplet("jsmolApplet", Info); // 初始化 jsmolApplet
  
  //         // 設置控制面板
  //         controls.innerHTML = `
  //           <div>Ribbons Color</div>
  //           <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons none')" />None
  //           <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons structure')" checked/>Structure
  //           <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons amino')" />Amino
  //           <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons skyblue')" />Skyblue
  //           <input type="radio" name="ribbonsColor" onclick="Jmol.script(jsmolApplet, 'color ribbons yellow')" />Yellow
  //           <br />
  //           <input type="checkbox" onclick="Jmol.script(jsmolApplet, this.checked ? 'wireframe on' : 'wireframe off')" />Wireframe on/off
  //           <input type="checkbox" onclick="Jmol.script(jsmolApplet, this.checked ? 'spin on' : 'spin off')" checked/>Spin on/off
  //           <br />
  //           <div>Spacefill</div>
  //           <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill off')" checked />Off
  //           <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill 25%')" />25%
  //           <input type="radio" name="spacefill" onclick="Jmol.script(jsmolApplet, 'spacefill on')" />100%
  //           <br />
  //           <button onclick="Jmol.script(jsmolApplet, 'zoom 300')">Zoom 300</button>
  //           <button onclick="Jmol.script(jsmolApplet, 'zoom 100')">Zoom 100</button>
  //         `;
  //       } else {
  //         console.error("Jmol 加載失敗");
  //       }
  //     };
  
  //     document.body.appendChild(script);
  //   } else {
  //     console.error("jsmolContainer 元素未找到");
  //   }
  // }, [id, cluster_pdb_id]);
  

  return (
    <>
        <div className='div_style'>
          <h1>ADAM Database: {id}</h1>
          <div>
            <div className='DataInformation'>
              <div style={{ backgroundColor: '#447dc7', color: 'black', padding: '10px', fontWeight: 'bold' }}>
                AMP Information
              </div>

              <div className='DataInformation_section'>
                <div className='DataInformation_label DataInformation_th_blue'>ADAM ID</div>
                <div className='DataInformation_value'>{id}</div>
              </div>

              <div className='DataInformation_section'>
                <div id="jsmolContainer"></div> 
                <div id="jsmolControls"></div>  
              </div>
            </div>

          </div>
        </div>
      
    </>
  );
};

export default DataInformation_3D;