import React from 'react';
import './Index.css';


const LupaSandi = () => {
  const formReEnterPasswordRegiste = document.getElementById('formReEnterPasswordRegiste');

  return (
    <div className="lupa-sandi">
      <img className="image-75-icon" alt="" src="Image75Icon"/>
      <div className="lupa-sandi-child"></div>
      <img className="savor-flavor-putih" alt="" src="SavorFlavorPutih"/>
      <img className="lupa-sandi-item" alt="" src="Rectangle11"/>
      <b className="masukdaftar">Masuk/Daftar</b>
      <div className="reset-password">
        <b className="email">Email </b>
        <div className="button">
          <img className="button-child" alt="" src="Rectangle9"/>
          <b className="kirim">Kirim</b>
        </div>
        <div className="form-re-enter-password-registe" id="formReEnterPasswordRegiste">
          <div className="form-re-enter-password-registe-child"></div>
        </div>
      </div>
    </div>
  );
};

export default LupaSandi;