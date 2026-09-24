function Section() {
  return (
    <>
      {/* Beranda */}
      <section id="home" className="home">
        <div>
          <span className="greeting">HELLO, I'M</span>
          <h1>Reivani Vellika Kurnia Putri</h1>
          <h3>Mahasiswa Pendidikan Ilmu Komputer</h3>
          <p className="campus">Universitas Pendidikan Indonesia</p>
        </div>

        <img src="/fotoku.jpeg" alt="Reivani Vellika Kurnia Putri" />
      </section>


      {/* Tentang Saya */}
      <section id="about" className="card">
        <h2>Tentang Saya</h2>
        <p>
          Saya merupakan mahasiswa Pendidikan Ilmu Komputer di Universitas Pendidikan Indonesia. 
          Saya tertarik dengan dunia teknologi, terutama pemrograman dan pengembangan website. 
          Sebagai mahasiswa rantau, saya suka sekali saat libur karena bisa jalan-jalan, 
          mencari suasana baru, dan bermain bersama teman-teman.
        </p>
      </section>


      {/* Biodata */}
      <section className="card">
        <h2>Biodata</h2>

        <div className="biodata-grid">
          <div className="biodata-item">
            <span>Nama</span>
            <strong>Reivani Vellika Kurnia Putri</strong>
          </div>

          <div className="biodata-item">
            <span>NIM</span>
            <strong>2503883</strong>
          </div>

          <div className="biodata-item">
            <span>Tempat, Tanggal Lahir</span>
            <strong>Jakarta, 26 Mei 2007</strong>
          </div>

          <div className="biodata-item">
            <span>Program Studi</span>
            <strong>Pendidikan Ilmu Komputer</strong>
          </div>

          <div className="biodata-item">
            <span>Fakultas</span>
            <strong>FPMIPA</strong>
          </div>

          <div className="biodata-item">
            <span>Universitas</span>
            <strong>Universitas Pendidikan Indonesia</strong>
          </div>
        </div>
      </section>


      {/* Hobi */}
      <section id="hobby" className="card">
        <h2>Hobi Saya</h2>

        <div className="hobby">
          <div className="hobby-card">
            <span>🍳</span>
            <h3>Memasak</h3>
            <p>Berawal dari bantu ibu saat masak, saya jadi sangat suka memasak, apalagi semenjak saya ngekos saya jadi lebih sering bereksperimen membuat beberapa hidangan.</p>
          </div>

          <div className="hobby-card">
            <span>🍰</span>
            <h3>Baking</h3>
            <p>Saya juga suka membuat kue, hidangan yang pernah saya buat yaitu klapetart, macaroni schootel, mile crapes, dan masih banyak lagi.</p>
          </div>

          <div className="hobby-card">
            <span>🎧</span>
            <h3>Music</h3>
            <p>Tipe musik saya yaitu pop dan saya sangat suka mendengarkan lagu K-Pop ataupun pop barat, bebrapa grup yang saya ikuti diantaranya Cortis, Enhypen, Boynextdoor.</p>
          </div>
        </div>
      </section>


      {/* Cita-cita */}
      <section className="card">
        <h2>Cita-cita</h2>
        <p>
          Saya ingin menjadi orang yang sukses, mandiri, dan bisa membanggakan
          orang-orang di sekitar saya. Yang pasti ingin sukses di dunia
          dan akhirat, Aaminn....
        </p>
      </section>


      {/* Galeri */}
      <section id="gallery" className="card">
        <h2>Galeri</h2>

        <div className="gallery">

          {/* Kegiatan Kampus */}
          <div className="gallery-card">
            <img src="/kampus.jpeg" alt="Kegiatan Kampus" />
            <h3>Kegiatan Kampus</h3>
            <p>
              Dokumentasi kegiatan dan aktivitas selama berada di kampus.
            </p>
          </div>

          {/* Kegiatan Organisasi */}
          <div className="gallery-card">
            <img src="/organisasi.jpeg" alt="Kegiatan Organisasi" />
            <h3>Kegiatan Organisasi</h3>
            <p>
              Dokumentasi kegiatan dan pengalaman organisasi BLM dan kepanitian.
            </p>
          </div>

          {/* Kegiatan Akademik */}
          <div className="gallery-card">
            <img src="/akademik.jpeg" alt="Kegiatan Akademik" />
            <h3>Kegiatan Akademik</h3>
            <p>
              Dokumentasi kegiatan belajar, project perkuliahan serta asisten dosen.
            </p>
          </div>

        </div>
      </section>


      {/* Kontak */}
      <section id="contact" className="card">
        <h2>Kontak</h2>

        <div className="kontak">
          <div className="kontak-item">
            <span>📷</span>
            <div>
              <strong>Instagram</strong>
              <p>@reivkp</p>
            </div>
          </div>

          <div className="kontak-item">
            <span>💻</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/reivani</p>
            </div>
          </div>

          <div className="kontak-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>reivanivellika07@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;