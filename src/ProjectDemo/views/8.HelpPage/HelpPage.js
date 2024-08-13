import React, { useContext } from 'react';
import './HelpPage.css'
import { MyContext } from '../../../Context/MyContext';  // 导入 MyContext

import { Button, Col, Row } from 'antd';
const HelpPage = ({

}) => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  return (
    <>
      <div style={{ padding: '3%' }}>
        <Row className='background_blue'>
          <Col className='Col_style' span={24}><b>How ADAM works:</b></Col>
        </Row>

        <Row className='backgrounda_lightblue' >
          <Col className='Col_style' span={24}>
            <img src={`${process.env.PUBLIC_URL}/imge/fig_1.jpg`} alt="" height="320" width="350" /></Col>
        </Row>

        <Row className='background_blue'>
          <Col className='Col_style' span={24}><b>DB Statistics</b></Col>
        </Row>

        <Row className='backgrounda_lightblue'>
          <Col className='Col_style' span={24}>
            <table className='table_top'>
              <tbody>
                <tr style={{ backgroundColor: '#FFED97' }}>
                  <td colSpan="5"><b>Related Species</b></td>
                </tr>
                <tr>
                  <td colSpan="5">
                    {/* 複製網頁上的 不知道嵌入甚麼圖表*/}
                    <object className="flash-content" type="application/x-shockwave-flash" data="open-flash-chart.swf?data=data2.php%3Ftype%3Dpie" width="730" height="300">
                      <param name="allowScriptAccess" value="sameDomain" />
                      <param name="movie" value="open-flash-chart.swf?width=730&height=300&data=data2.php%3Ftype%3Dpie" />
                    </object>
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#FFED97', textAlign: 'center' }}>
                  <td colSpan="5"><b>Average Composition</b></td>
                </tr>
                <tr>
                  <td colSpan="5">
                    {/* 複製網頁上的 不知道嵌入甚麼圖表*/}
                    <object className="flash-content" type="application/x-shockwave-flash" data="open-flash-chart.swf?data=data4.php%3Ftype%3Dpie" width="730" height="250">
                      <param name="allowScriptAccess" value="sameDomain" />
                      <param name="movie" value="open-flash-chart.swf?width=730&height=250&data=data4.php%3Ftype%3Dpie" />
                    </object>
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#D3FF93', textAlign: 'center' }}>
                  <td colSpan="5"><b>Average Physical Properties</b></td>
                </tr>
                <tr style={{ backgroundColor: '#EFFFD7', textAlign: 'center' }}>
                  <td><b>Length</b></td>
                  <td><b>Aliphatic Index</b></td>
                  <td><b>Instability Index</b></td>
                  <td><b>Net Charge</b></td>
                  <td><b>Hydropathicity</b></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <td>39.56</td>
                  <td>89.95</td>
                  <td>34.30</td>
                  <td>+3.02</td>
                  <td>-0.06</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}><b>Amino Acid Composition (AAC):</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            Amino acid composition is the ratio of each amino acid in a peptide. The ratio of an amino acid with type T in a peptide X is calculated as follows:
          </Col>
        </Row>
        <Row className='backgrounda_lightblue' >
          <Col className='Col_style_left' span={24}>
            <img src={`${process.env.PUBLIC_URL}/imge/ACC.jpg`} alt="" height="80" width="200" />
            <br />
            where NT is the number of the amino acid with type T and L is the length of peptide X.
          </Col>
        </Row>

        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}><b>Aliphatic Index:</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            The aliphatic index, the relative volume of aliphatic residues in a peptide, is calculated as follows:
          </Col>
        </Row>
        <Row className='backgrounda_lightblue' >
          <Col className='Col_style_left' span={24}>
            <img src={`${process.env.PUBLIC_URL}/imge/AI.jpg`} alt="" height="80" width="400" />
            <br />
            where a and b are the constants, which represent the relative volume of valine and leucine or isoleucine to alanine.
          </Col>
        </Row>

        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}><b>Instability Index:</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            The instability index, an estimate of peptide stability, is calculated as follows:
          </Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            <img src={`${process.env.PUBLIC_URL}/imge/II.jpg`} alt="" height="80" width="400" />
            <br />
            where L is the length of peptide and DIWV from the study by Guruprasad et al. is an instability weight value of a dipeptide starting at position i.
          </Col>
        </Row>

        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}><b>Hydropathicity:</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            Grand average of hydropathicity index (GRAVY) is used to represent the hydrophobicity value of a peptide, which calculates the sum of the hydropathy values of all the amino acids divided by the sequence length.
          </Col>
        </Row>

        <Row className='background_blue'>
          <Col className='Col_style' span={24}><b>Search</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            ADAM offers multiple search capabilities, which can be classified into two basic categories: sequence search and structural search. One can search what kind of information an AMP sequence belongs to (sequence search) or which related sequences are in a unique AMP structure or structural fold cluster (structural search).
          </Col>
        </Row>
        <div style={{ padding: '1px 5%' }} className='backgrounda_lightblue'>
          <Row className='backgrounda_lightblue'>
            <Col className='Col_style_left' span={24}><b>Sequence search:</b></Col>
          </Row>

          <Row className='backgrounda_lightblue' >
            <Col className='Col_style_left' span={24}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Search Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ADAM ID</td>
                    <td>To search AMP sequences by ADAM ID</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>To search AMP sequences by protein name</td>
                  </tr>
                  <tr>
                    <td>Sequence</td>
                    <td>To search AMP sequences by peptide segments</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>To search AMP sequences by the chosen range of sequence length</td>
                  </tr>
                  <tr>
                    <td>Taxonomy</td>
                    <td>To search AMP sequences by selecting one of the seven species types</td>
                  </tr>
                  <tr>
                    <td>Other DB</td>
                    <td>To search AMP sequences which are also in other AMP database</td>
                  </tr>
                  <tr>
                    <td>Pfam Domain</td>
                    <td>To search ADAM sequences by Pfam domain name</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>

          <Row className='backgrounda_lightblue set_margin_top' >
            <Col className='Col_style_left'  span={24}><b>Structural search:</b></Col>
          </Row>
          <Row className='backgrounda_lightblue'>
            <Col className='Col_style_left' span={24}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Search Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fold Cluster ID</td>
                    <td>To search related AMP structural clusters by ADAM fold ID</td>
                  </tr>
                  <tr>
                    <td>PDB ID</td>
                    <td>To search AMP structural cluster by PDB ID</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>

        </div>

        <Row className='background_blue'>
          <Col className='Col_style_left' span={24}><b>Browse clusters</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            To examine AMP sequence-structure relationships, ADAM allows users to browse through the fold clusters built using TM-score. Each fold cluster gathers together the AMP structures with the same structural fold defined by TM-score.
          </Col>
        </Row>

        <Row className='background_blue'>
          <Col className='Col_style_left' span={24}><b>Prediction</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            In the ADAM database, we provide two different tools to examine whether the peptides or proteins are antimicrobial. Users can upload protein sequences with FASTA format to ADAM to make predictions.
          </Col>``
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left'><b>SVM:</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            Support vector machines are used to analyze AMP data and recognize patterns. Users are allowed to paste sequences in FASTA format to run our SVM models.
          </Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' ><b>HMM:</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            HMMER is used to search any AMP homologs in the given protein sequence. It implements a probabilistic model called profile hidden Markov models (profile HMMs) to make predictions.
          </Col>
        </Row>

        <Row className='background_blue'>
          <Col className='Col_style_left' span={24}><b>Links</b></Col>
        </Row>
        <Row className='backgrounda_lightblue'>
          <Col className='Col_style_left' span={24}>
            <a href="./links.html">Other database links</a>
          </Col>
        </Row>
      </div>

    </>

  )
}

export default HelpPage;
