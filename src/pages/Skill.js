import logoHtml from "../images/html.png";
import logoCss from "../images/css.png";
import logoJs from "../images/js.png";
import logoReact from "../images/react.png";
import logoKotlin from "../images/kotlin.png";

export default function Skil() {
  return (
    <section className="section">
      <h1 className="title">Skill</h1>
      <div className="section-skill">
        <div className="skill-item">
          <img src={logoHtml} alt="gambar" className="image-skill" />
          <h2 className="text-skill">HTML</h2>
          <p className="level-skill">Intermediate</p>
        </div>
        <div className="skill-item">
          <img src={logoCss} alt="gambar" className="image-skill" />
          <h2 className="text-skill">CSS</h2>
          <p className="level-skill">Intermediate</p>
        </div>
        <div className="skill-item">
          <img src={logoJs} alt="gambar" className="image-skill" />
          <h2 className="text-skill">Javascript</h2>
          <p className="level-skill">Intermediate</p>
        </div>
        <div className="skill-item">
          <img src={logoReact} alt="gambar" className="image-skill" />
          <h2 className="text-skill">React JS</h2>
          <p className="level-skill">Intermediate</p>
        </div>
        <div className="skill-item">
          <img src={logoKotlin} alt="gambar" className="image-skill" />
          <h2 className="text-skill">Kotlin</h2>
          <p>Experience 1 Year</p>
        </div>
      </div>
    </section>
  );
}
