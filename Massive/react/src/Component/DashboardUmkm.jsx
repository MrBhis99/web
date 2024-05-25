import React from 'react';
import './Index.css';
import bikarian from '../assets/img/bikarian.png'
const DashboardUmkm = () => {
  return (
	<>
    <div className="dashboard-umkm">
      <div className="dashboard-umkm-child"></div>
      <div className="dashboard-umkm-item"></div>
      <div className="dashboard-umkm-inner"></div>
      <div className="rectangle-div"></div>
      <div className="cari-produk">Cari Produk</div>
      <div className="dashboard-umkm-child1" id="rectangle4"></div>
      <div className="dashboard-umkm-child2"></div>
      <div className="dashboard-umkm-child3"></div>
      <div className="dashboard-umkm-child4"></div>
      <b className="produk">Produk</b>
      <b className="kategori">Kategori</b>
      <b className="harga-jual">Harga Jual</b>
      <div className="dashboard-umkm-child5" id="rectangle8"></div>
      <div className="simpan">Simpan</div>
      <div className="unggah-produk">Unggah Produk</div>
      <img className="image-51-icon" alt="" src={bikarian.png}/>
      <div className="bika-ambon-rian">Bika Ambon Rian</div>
      <div className="makanan-ringan">Makanan ringan</div>
      <div className="rp15000-rp50000">Rp.15.000-Rp.50.000</div>
      <div className="edit" id="editText">Edit</div>
      <b className="dasboard-umkm">Dasboard Umkm</b>
    </div>
	</>
  );
};

export default DashboardUmkm;