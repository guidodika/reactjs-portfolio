import logoGmail from "../images/gmail.svg";
import logoWhatsapp from "../images/whatsapp.svg";
import logoLinkedin from "../images/linkedin.svg";
import logoGithub from "../images/github.svg";

export default function Contact() {
  return (
    <section className="section">
      <h1 className="title">Kontak</h1>
      <div className="section-contact">
        <div style={{ margin: "auto" }}>
          <p className="text-contact">
            Jika ingin menghubungi saya, dapat menghubungi kontak saya dengan
            cara klik icon sosial media saya dibawah ini. Saya dapat dihubungi
            via email, whatsapp atau dapat mengunjungi GitHub saya untuk melihat
            hasil project saya yang lain.
          </p>
          <div className="images-contact">
            <div id="img1-contact" className="image-item-contact">
              <a href="mailto:guidodikafirguston.mail@gmail.com">
                <img src={logoGmail} alt="gambar" className="image-contact" />
              </a>
              <p>guidodikafirguston.mail@gmail.com</p>
            </div>
            <div id="img2-contact" className="image-item-contact">
              <a
                href="https://api.whatsapp.com/send?phone=6289603915525"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoWhatsapp}
                  alt="gambar"
                  className="image-contact"
                />
              </a>

              <p>089603915525</p>
            </div>
            <div id="img3-contact" className="image-item-contact">
              <a
                href="https://www.linkedin.com/in/guidodika/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoLinkedin}
                  alt="gambar"
                  className="image-contact"
                />
              </a>

              <p>guidodika</p>
            </div>
            <div id="img4-contact" className="image-item-contact">
              <a
                href="https://github.com/guidodika?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoGithub} alt="gambar" className="image-contact" />
              </a>

              <p>guidodika</p>
            </div>
          </div>
        </div>

        <form className="form-contact">
          <label className="form-label">Alamat Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="form-input"
          />
          <label className="form-label">Subject</label>
          <input
            type="text"
            placeholder="subject anda"
            className="form-input"
          />
          <label className="form-label">Pesan</label>
          <input
            type="text"
            placeholder="masukkan pesan"
            className="form-input"
          />
          <button
            onClick={() =>
              console.log(
                alert("Terimakasih Pesan Anda Sudah Dikirim (dummy message)")
              )
            }
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}
