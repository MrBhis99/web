import React from 'react';
import './Index.css';


const SignUp2 = () => {
  const buttonContainer = document.getElementById('buttonContainer');

  return (
    <>
    <div className="sign-up-2">
      <img className="image-75-icon" alt="" src="Image75Icon"/>
      <div className="sign-up-2-child"></div>
      <img className="savor-flavor-putih" alt="" src="SavorFlavorPutih"/>
      <img className="sign-up-2-item" alt="" src="Rectangle11"/>
      <b className="masukdaftar">Masuk/Daftar</b>
      <div className="sign-up">
        <b className="email">Email </b>
        <b className="masukkan-kata-sandi">Masukkan kata sandi</b>
        <b className="masukkan-kembali-kata">Masukkan Kembali Kata Sandi</b>
        <div className="punya-akun-masuk-container">
          Punya Akun?
          <span className="masuk-di-sini">Masuk Di sini!</span>
        </div>
        <div className="button" id="buttonContainer">
          <img className="button-child" alt="" src="Rectangle9" />
          <b className="buat-akun">Buat Akun</b>
        </div>
        <div className="form-email-register">
          <div className="form-email-register-child"></div>
          <a className="galleofrancogmailcom" href="mailto:Galleofranco@gmail.com" target="_blank">
            Galleofranco@gmail.com
          </a>
        </div>
        <div className="form-password-register">
          <div className="form-email-register-child"></div>
          <div className="div">*********************</div>
        </div>
        <div className="form-password-register1">
          <div className="form-email-register-child"></div>
          <div className="div">*********************</div>
        </div>
        <div className="form-re-enter-password-registe">
          <div className="form-email-register-child"></div>
          <div className="div">*********************</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp2;