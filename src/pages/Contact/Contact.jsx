import { FiSend } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import "./Contact-style.css";

function Contact() {
  return (
    <>
      <section className="container-contact">
        <h2 className="title-container">Ficou com dúvida?</h2>
        <div className="about-form">
          <div className="about-contact">
            <h3 className="subtitle-contact">Entre em contato:</h3>
            <p className="text-contact">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aperiam molestiae at fuga, alias assumenda nostrum
              illum eaque, voluptatum ad iste unde qui laboriosam perferendis!
              Facere possimus odio libero totam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia delectus earum, molestiae
              facere, incidunt dignissimos minus corrupti aut laborum dicta
              expedita soluta inventore provident labore excepturi impedit
              aliquam. Corrupti, quos?
            </p>
          </div>

          <div className="form-contact">
            <h3 className="subtitle-contact">Mensagem:</h3>
            <form className="form">
              <input
                className="inputs-form"
                type="text"
                placeholder="Nome"
                required
              />
              <input
                className="inputs-form"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="inputs-form"
                type="text"
                placeholder="Assunto"
                required
              />

              <input
                className="textarea"
                placeholder="Sua mensagem..."
                required
              />

              <button className="submit">
                <FiSend size={20} color="#fff" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
