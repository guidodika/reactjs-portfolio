import image from "../images/potrait.jpg";
import resume from "../assets/cv-guidodika.pdf";

export default function Home() {
  return (
    <section className="section">
      <div className="section-home">
        <div className="home-text">
          <h2 style={{ fontSize: "48px" }}>Hai Semuanya Perkenalkan Saya</h2>
          <h1 style={{ fontSize: "72px" }}>Guido Dika Firguston</h1>
          <p>Ini merupakan website portfolio saya</p>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 20px 0 0" }}
          >
            <button>View My Resume</button>
          </a>
          <a href={resume} download>
            <button>Download My Resume</button>
          </a>
        </div>
        <div>
          <img src={image} alt="Gambar" className="image-home" />
        </div>
      </div>
    </section>
  );
}
