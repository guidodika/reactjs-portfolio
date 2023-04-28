import image1 from "../images/web-1.png";
import image2 from "../images/web-2.png";
import image3 from "../images/web-3.png";

export default function Work() {
  return (
    <section className="section">
      <h1 className="title">Portfolio Website</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <p>
            Berikut ini merupakan hasil latihan saya selama mempelajari
            fundamental pembuatan Website. Dalam pembuatan website, saya
            menggunakan HTML, CSS, Javascript dengan library jQuery dan juga
            framework CSS yaitu Bootstrap
          </p>
        </div>
        <div className="images-work">
          <img
            src={image1}
            alt="gambar"
            className="image-item"
            id="img-1"
          ></img>
          <img
            src={image2}
            alt="gambar"
            className="image-item"
            id="img-2"
          ></img>
          <img
            src={image3}
            alt="gambar"
            className="image-item"
            id="img-3"
          ></img>
        </div>
      </div>
    </section>
  );
}
