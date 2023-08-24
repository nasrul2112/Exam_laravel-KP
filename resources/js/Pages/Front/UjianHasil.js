import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';


import Layout from './../../Shared/FrontLayout';
import { InertiaLink } from '@inertiajs/inertia-react';


export default (props) => {
  
  return (
    <Layout>
      <Helmet>
        <title>Hasil Ujian</title>
      </Helmet>
      <div className="row">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    Hasil Ujian
                </div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                        <tr><td><b>No.Ujian</b></td><td>: {props.siswa.no_ujian}</td></tr>
                        <tr><td><b>Nama</b></td><td>: {props.siswa.nama_peserta}</td></tr>
                        <tr><td><b>Nama Sekolah</b></td><td>: {props.siswa.nama_Sekolah}</td></tr>
                        <tr><td><b>Kelas</b></td><td>: {props.siswa.kelas}</td></tr>
                        <tr><td><b>Nama Ujian</b></td><td>: {props.kategori.nama_kategori}</td></tr>
                        <tr><td><b>Nama Mapel</b></td><td>: {props.kategori.nama_mapel}</td></tr>
                        <tr><td><b>Mulai Mengerjakan</b></td><td>: {props.nilai.mulai}</td></tr>
                        <tr><td><b>Selesai Mengerjakan</b></td><td>: {props.nilai.selesai}</td></tr> 
                        {props.ujian.tampilkan_hasil == 'Y' && (
                          <>
                        <tr><td><b>Jml. Benar</b></td><td>: {props.nilai.jml_benar}</td></tr>
                        <tr><td><b>Nilai</b></td><td>: {props.nilai.nilai}</td></tr> 

                          </>
                        
                        )}
                       
                        <tr><td></td><td></td></tr>
                        </tbody>
                    </table>   
                </div>
                <div className="card-footer">                    
                  <InertiaLink href={route('home')} className="btn float-right btn-success">
                    Daftar Ujian
                  </InertiaLink>                    
                </div>
            </div>
        </div>
    </div>  
    </Layout>
  );
}