import Family1 from "../../assets/family1.png";
import Family2 from "../../assets/family2.png";
import Family3 from "../../assets/family3.png";
import Family4 from "../../assets/family4.png";
import Footer from "../../components/Footer/Footer";
import "./Reports-style.css";

function Report() {
  return (
    <>
      <section className="container-education">
        <h2 className="title-container">Relatos: </h2>
        <img className="image-about" src={Family1} />
        <img className="image-about" src={Family2} />
        <img className="image-about" src={Family3} />
        <img className="image-about" src={Family4} />
      </section>
      <Footer />
    </>
  );
}

export default Report;
