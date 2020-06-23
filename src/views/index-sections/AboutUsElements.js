import React from "react";
import PropTypes from "prop-types";

import { MultiLang, Determinator } from "react-multi-language";
// reactstrap components
import {
  Container
} from "reactstrap";

// core components

const AboutUsElements = props => {
  const { idLang } = props;
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h2 className="title">
            <Determinator>
              {{ 
                en: 'About Us',
                id: 'Tentang Kami'
              }}
            </Determinator>
          </h2>
            <img
                alt="..."
                className="about-logo"
                src={require("assets/img/logo-panin-masinda-raya.png")}
              ></img>
            <div className="space-70"></div>
            <h3 className="text-logo-about">PT. Panin Masinda Raya</h3>
                <h4>
                  <Determinator>
                    {{ 
                      en: `PT. Panin Masinda Raya is a company engaged in Large trade in food and other services. The purpose of forming this company is on the basis of participating in improving people's economy (micro) and supporting as well global (macro), towards Indonesian society as a whole. The activity we do is business in the distribution of food products.`,
                      id: 'PT. Panin Masinda Raya adalah perusahaan yang bergerak dibidang perdagangan besar pangan dan jasa lainnya. Tujuan dibentuknya perusahaan ini atas dasar ikut berperan serta dalam peningkatan ekonomi kerakyatan (micro) dan berperan serta dalam kegiatan perekonomian Indonesia secara global (macro), menuju masyarakat Indonesia seutuhnya. Kegiatan yang kami lakukan adalah usaha dibidang pendistribusian produk-produk pangan.'
                    }}
                  </Determinator>
                </h4>
            <div className="space-70"></div>
            {/* <h3 className="text-logo-about">Visi & Misi</h3> */}
                <h3>
                  <Determinator>
                    {{ 
                      en: 'Vision',
                      id: 'Visi'
                    }}
                  </Determinator>
                </h3>
                <ul>
                  <li>
                      <h4>
                        <Determinator>
                          {{ 
                            en: `Being one of the best companies in the field of food distribution and being the choice of every community's needs.`,
                            id: 'Menjadi salah satu perusahaan yang terbaik dalam bidang pendistribusian pangan dan menjadi pilihan setiap kebutuhan masyarakat.'
                          }}
                        </Determinator>
                      </h4>
                  </li>
                </ul>
                <h3>
                  <Determinator>
                    {{ 
                      en: 'Mision',
                      id: 'Misi'
                    }}
                  </Determinator>
                </h3>
                <ul>
                  <li>
                    <h4>
                      <Determinator>
                        {{ 
                          en: 'Doing business commercially with the principles of good governance and effective risk management.',
                          id: 'Menjalankan bisnis secara komersial dengan prinsip tata kelola yang baik dan manajemen resiko yang efektif.'
                        }}
                      </Determinator>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Determinator>
                        {{ 
                          en: 'Providing products and services that are highly competitive.',
                          id: 'Menyediakan produk dan jasa yang berdaya saing tinggi.'
                        }}
                      </Determinator>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Determinator>
                        {{ 
                          en: 'Develop core business and its derivatives and business portfolio that synergize with each other.',
                          id: 'Mengembangkan bisnis inti dan turunan serta portofolio bisnis yang saling bersinergi.'
                        }}
                      </Determinator>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Determinator>
                        {{ 
                          en: 'Providing maximum benefits and added value to the company and stakeholders.',
                          id: 'Memberikan manfaat dan nilai tambah yang maksimal kepada perusahaan dan pemangku kepentingan.'
                        }}
                      </Determinator>
                    </h4>
                  </li>
                </ul>
            <div className="space-70"></div>
            <h3 className="text-logo-about">
              <Determinator>
                {{ 
                  en: 'Who we are',
                  id: 'Siapa kita'
                }}
              </Determinator>
            </h3>
                <h4>
                  <Determinator>
                    {{ 
                      en: 'PT. Panin Masinda Raya has committed to provide the best, competitive and mutually beneficial service. And align business growth that continues to increase to ensure business continuity by placing human resources as corporate assets.',
                      id: 'PT. Panin Masinda Raya telah berkomitmen untuk memberikan pelayanan yang terbaik, kompetitif dan saling menguntungkan. Serta menyelaraskan pertumbuhan usaha yang terus meningkat untuk menjamin kesinambungan usaha dengan menempatkan sumber daya manusia sebagai aset perusahaan.'
                    }}
                  </Determinator>
                </h4>
        </Container>
      </div>
      <MultiLang lang={idLang} />
    </>
  );
}

AboutUsElements.propTypes = {
  idLang: PropTypes.string.isRequired
}

export default AboutUsElements;
