import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";

// core components

function AboutUsElements() {
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h2 className="title">About Us</h2>
            <img
                alt="..."
                className="about-logo"
                src={require("assets/img/logo-panin-masinda-raya.png")}
              ></img>
            <div className="space-70"></div>
            <h3 className="text-logo-about">PT. Panin Masinda Raya</h3>
                <h4>PT Panin Masinda Raya adalah perusahaan yang bergerak dibidang
                perdagangan besar pangan dan jasa lainnya.
                Tujuan dibentuknya perusahaan ini atas dasar ikut berperan serta
                dalam peningkatan ekonomi kerakyatan (micro) dan berperan serta
                dalam kegiatan perekonomian Indonesia secara global (macro), menuju
                masyarakat Indonesia seutuhnya. Kegiatan yang kami lakukan adalah
                usaha dibidang pendistribusian produk-produk pangan.</h4>
            <div className="space-70"></div>
            {/* <h3 className="text-logo-about">Visi & Misi</h3> */}
                <h3>Visi</h3>
                <ul>
                  <li>
                      <h4>Menjadi salah satu perusahaan yang terbaik dalam bidang
                      pendistribusian pangan dan menjadi pilihan setiap kebutuhan
                      masyarakat.</h4>
                  </li>
                </ul>
                <h3>Misi</h3>
                <ul>
                  <li><h4>Menjalankan bisnis secara komersial dengan prinsip tata kelola yang baik dan manajemen resiko yang efektif.</h4></li>
                  <li><h4>Menyediakan produk dan jasa yang berdaya saing tinggi</h4></li>
                  <li><h4>Mengembangkan bisnis inti dan turunan serta portofolio bisnis yang saling bersinergi</h4></li>
                  <li><h4>Memberikan manfaat dan nilai tambah yang maksimal kepada perusahaan dan pemangku kepentingan</h4></li>
                </ul>
            <div className="space-70"></div>
            <h3 className="text-logo-about">Who we are</h3>
                <h4>PT Panin Masinda Raya telah berkomitmen untuk memberikan
                pelayanan yang terbaik, kompetitif dan saling menguntungkan. Serta
                menyelaraskan pertumbuhan usaha yang terus meningkat untuk
                menjamin kesinambungan usaha dengan menempatkan sumber daya
                manusia sebagai aset perusahaan.</h4>
        </Container>
      </div>
    </>
  );
}

export default AboutUsElements;
