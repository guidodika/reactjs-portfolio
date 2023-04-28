import React, { useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <section className="section">
      <h1 className="title">Tentang Saya</h1>
      <p style={{ marginBottom: "20px" }}>
        Perkenalkan nama saya Guido Dika Firguston, biasa dipanggil Guido. Saya
        merupakan lulusan S1 Informatika dari Universitas Sanata Dharma
        Yogyakarta. Pengalaman kerja saya adalah kurang lebih 1 tahun menjadi
        Frontend Android Developer. Dari pengalaman selama saya bekerja
        sebelumnya, saya memiliki pemahaman tentang pengembangan aplikasi mobile
        dengan bahasa pemograman Kotlin. Saat ini, saya sedang mempelajari
        pengembangan website. Saya mempelajari tentang dasar-dasar HTML, CSS,
        Javascript, beberapa library dan framework yang saat ini sedang
        dibutuhkan di dunia kerja. Saya merupakan pribadi yang disiplin, mau
        belajar tentang hal baru dan tidak pantang menyerah.
      </p>
      <h2>Pengalaman Kerja</h2>
      <div className="about-item">
        <div>
          <b>Frontend Android Developer</b>
          <p>PT. Infosys Solusi Terpadu Yogyakarta</p>
        </div>
        <button onClick={() => setShow(!show)}>More Info</button>
      </div>
      {show ? (
        <p className="detail-work">
          Saya terlibat bersama dengan tim di perusahaan mengembangkan sebuah
          aplikasi m-banking yaitu BTN Mobile Banking ini. Saya disitu berperan
          sebagai Frontend Developer yang menggunakan bahasa pemograman Kotlin
          dalam proses developing aplikasi. Saya mendapatkan banyak pembelajaran
          berharga, terutama dalam pengembangan aplikasi android.
        </p>
      ) : null}

      <h2>Sertifikat Kursus</h2>
      <div className="about-item">
        <div>
          <b>Responsive Web Design</b>
          <p>FreeCode Camp (2021)</p>
        </div>
        <a
          href="https://www.freecodecamp.org/certification/guidodika14/responsive-web-design"
          target="_blank"
          rel="noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>

      <div className="about-item">
        <div>
          <b>Fundamental Front-end Web Development</b>
          <p>Coding Studio (2023)</p>
        </div>
        <a
          href="https://codingstudio.id/certificate/75BB6B4DA0-75AF8DE448-75AF7FFF49/"
          target="_blank"
          rel="noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>

      <div className="about-item">
        <div>
          <b>Fundamental Cyber Security</b>
          <p>Coding Studio (2023)</p>
        </div>
        <a
          href="https://codingstudio.id/certificate/75BB6B4DA0-75BB5BBBB7-75AF7FFF49/"
          target="_blank"
          rel="noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>
    </section>
  );
}
