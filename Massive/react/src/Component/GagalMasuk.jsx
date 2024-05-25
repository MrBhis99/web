import React from 'react';
import './Index.css';


const GagalMasuk = () => {
  const tidakPunyaAkun = document.getElementById('tidakPunyaAkun');
  const lupaKataSandi = document.getElementById('lupaKataSandi');

  return (
    <>
    <div className="gagal-masuk">
      <img className="image-75-icon" alt="" src="Image75Icon}"/>
      <div className="gagal-masuk-child"></div>
      <img className="savor-flavor-putih" alt="" src="SavorFlavorPutih"/>
      <div className="login">
        <b className="email">Email</b>
        <b className="kata-sandi">Kata Sandi</b>
        <div className="tidak-punya-akun-container" id="tidakPunyaAkun">
          Tidak punya akun?
          <span className="daftar-di-sini">Daftar Di sini!</span>
        </div>
        <div className="form-email-login">
          <div className="form-email-login-child"></div>
        </div>
        <div className="form-password-login">
          <div className="form-password-login-child"></div>
        </div>
        <div className="button">
          <img className="button-child" alt="" src="Rectangle9"/>
          <b className="masuk">Masuk</b>
        </div>
      </div>
      <img className="gagal-masuk-item" alt="" src="Rectangle11"/>
      <b className="masukdaftar">Masuk/Daftar</b>
      <div className="rectangle-parent">
        <div className="group-child"></div>
        <b className="gagal-masuk1">Gagal Masuk</b>
        <img className="icon-close-circle" alt="" src="IconCloseCircle"/>
      </div>
      <div className="lupa-kata-sandi" id="lupaKataSandi">Lupa Kata Sandi</div>
    </div>
    </>
  );
};

export default GagalMasuk;