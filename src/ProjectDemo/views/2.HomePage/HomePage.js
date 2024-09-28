import React, { useContext } from 'react';
import './HomePage.css';
import { MyContext } from '../../../Context/MyContext';

import { Row, Col, Typography, Flex } from 'antd';
const HomePage = () => {
  const { user, setUser, language, setLanguage } = useContext(MyContext);

  const { Title, Text, Paragraph } = Typography
  return (
    <>

      <div style={{ position: "relative",marginBottom:'1%' }}>
        <img src={`/imge/front.jpg`} alt='' style={{ width: '100vw' }} ></img>
        <Paragraph className=' text-white text-base' style={{ position: "absolute", top: '30%', left: '2%', width: '50%', lineHeight: "2rem", fontSize: "90%" }}>
          ADAM is a comprehensive antimicrobial peptide (AMP) database, containing 7,811 unique experimentally-validated sequences and 492 structures. It provides researchers a rapid AMP search tool and allows them to browse through AMP sequence-structure relationships. For detailed information about ADAM, please refer to the HELP page.
        </Paragraph>
      </div>
      <div style={{display:'flex',  flexDirection: 'row'}}>

        <div className="text-section">
          <h1>ADAM</h1>
          <p>
            AMPs are potent drug candidates against microbial organisms such as bacteria, fungi, parasites, and viruses.
            Several AMP databases were released in the past few years. Some databases are species-specific such as
            BACTIBASE, BAGEL2, DADP, and PhytAMP; some are derived from a broad spectrum of species such as APD2, CAMP,
            and DAMPD. Among all of these databases, none contains all the AMP sequences and little is done for
            AMP sequence-structure relationships in a large scale.
          </p>
          <p>
            Lack of an easy access to link AMP sequences to structures and vice versa is a problem although AMPs are
            known to have various structures. Additionally sequence-structure relationships are important, particularly
            for antimicrobial drug design. To our knowledge, ADAM is the first AMP database to compile the AMP folds
            comprehensively and establish associations between AMP sequences and structures systematically.
          </p>
          <p>
            The size and sequence-structure analysis are two distinct features of ADAM. ADAM comes from multiple sources.
            In the current release, ADAM is the largest AMP database, which contains 7,811 unique
            experimentally-validated AMP sequences. To view the relationships between the AMP sequences and structures,
            we develop a clustering procedure for accessing the unique AMP folds based on 492 unique AMP structures.
            The 225 AMP fold clusters annotated by CATH (Class, Architecture, Topology, and Homologous Superfamily),
            SCOP (Class, Fold, Superfamily, Family), and Pfam (protein sequence conserved domain) would list the
            associated AMP sequences or vice versa.
          </p>
        </div>
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/imge/cluster333.jpg`} alt="Cluster Image" />
        </div>
      </div>

    </>
  );
};

export default HomePage;
