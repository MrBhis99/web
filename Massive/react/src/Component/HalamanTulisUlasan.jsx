import React, { useState, useEffect } from 'react';
import './Index.css';


function App() {
  const [rectangleClicked, setRectangleClicked] = useState(false);

  useEffect(() => {
    const rectangle = document.getElementById("rectangle");
    if (rectangle) {
      rectangle.addEventListener("click", () => {
        setRectangleClicked(true);
        // Add your code here
      });
    }
  }, []);

  return (
    <div className="halaman-tulis-ulasan">
      <div className="halaman-tulis-ulasan-child" id="rectangle">
      </div>
      <div className="star-parent">
        <img className="group-child" alt="" src="Star 3.svg" />
        <img className="group-item" alt="" src="Star 4.svg" />
        <img className="group-inner" alt="" src="Star 5.svg" />
        <img className="star-icon" alt="" src="Star 6.svg" />
        <img className="group-child1" alt="" src="Star 7.svg" />
      </div>
      <img className="icon-share" alt="" src="🦆 iconsharepng" />
      <div className="ketik-disini">Ketik disini.........</div>
      <div className="halaman-tulis-ulasan-item">
      </div>
      <div className="simpan-ulasan">Simpan ulasan</div>
      <div className="halaman-utama-parent">
        <b className="halaman-utama">Halaman Utama</b>
        <b className="profil">Profil</b>
        <b className="masukdaftar">Masuk/Daftar</b>
        <b className="rekomendasi">Rekomendasi</b>
        <b className="tentang-kami">Tentang Kami</b>
      </div>
      <b className="ulasan-bika-ambon">Ulasan Bika Ambon Rian</b>
      <img className="vector-icon" alt="" src="Vector.svg" />
    </div>
  );
}

export default App;