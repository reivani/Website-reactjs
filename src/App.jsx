import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav>
        <h2>Website Pribadiku</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">Tentang Saya</a>
          <a href="#hobby">Hobi</a>
        </div>
      </nav>


      {/* Beranda */}
      <section id="home" className="home">

        <div>
          <p>HELLO, I'M</p>

          <h1>Reivani Vellika Kurnia Putri</h1>

          <h3>Mahasiswa Pendidikan Ilmu Komputer</h3>

          <p>
            Universitas Pendidikan Indonesia
          </p>
        </div>

        <img
          src="/fotoku.jpeg"
        />

      </section>


      {/* Tentang Saya */}
      <section id="about" className="card">

        <h2>Tentang Saya</h2>

        <p>
          Halo! Saya Reivani, mahasiswa Pendidikan Ilmu Komputer
          di Universitas Pendidikan Indonesia. Saya memiliki ketertarikan
          terhadap dunia teknologi, pemrograman, dan pengembangan website.
        </p>

      </section>


      {/* Biodata */}
      <section className="card">

        <h2>Biodata</h2>

        <p><b>Nama:</b> Reivani Vellika Kurnia Putri</p>
        <p><b>NIM:</b> 2503883</p>
        <p><b>Tempat, Tanggal Lahir:</b> Jakarta, 26 Mei 2007</p>
        <p><b>Program Studi:</b> Pendidikan Ilmu Komputer</p>
        <p><b>Fakultas:</b> FPMIPA</p>
        <p><b>Universitas:</b> Universitas Pendidikan Indonesia</p>

      </section>


      {/* Hobi */}
      <section id="hobby" className="card">

        <h2>Hobi Saya</h2>

        <div className="hobby">

          <div>
            <span>🍳</span>
            <h3>Memasak</h3>
            <p>Saya suka memasak berbagai macam makanan.</p>
          </div>

          <div>
            <span>🍰</span>
            <h3>Baking</h3>
            <p>Saya suka membuat dan mencoba resep kue.</p>
          </div>

          <div>
            <span>🎧</span>
            <h3>K-Pop</h3>
            <p>Saya juga suka mendengarkan lagu K-Pop.</p>
          </div>

        </div>

      </section>


      {/* Cita-cita */}
      <section className="card">

        <h2>Cita-cita</h2>

        <p>
          Menjadi orang kaya dan sukses dunia akhirat.
        </p>

      </section>


      {/* Kontak */}
      <section id="contact" className="card">

        <h2>Kontak</h2>

        <div className="kontak">

          <p>
            📷 <b>Instagram:</b> @reivkp
          </p>
          <p>
            💻 <b>GitHub:</b> github.com/reivani
          </p>
          <p>
            📧 <b>Email:</b> reivanivellika07@gmail.com
          </p>

        </div>

      </section>



      {/* Footer */}
      <footer>
        <p>© 2026 REIVANI VELLIKA KURNIA PUTRI</p>
        <p>Pendidikan Ilmu Komputer - UPI</p>
      </footer>

    </div>
  );
}

export default App;