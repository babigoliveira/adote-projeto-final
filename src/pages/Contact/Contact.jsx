import { FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";
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
              Ficou com dúvidas, quer dar feedback ou contar um pouco da sua
              expêriencia quanto a adoção nos envie uma mensagem!
            </p>
            <div className="my-contact">
              <div className="linkedin">
                <FiLinkedin size={24} color="#91ca41" />
                <a
                  className="text-contact"
                  href="www.linkedin.com/in/barbaragdeoliveira"
                >
                  barbaragdeoliveira
                </a>
              </div>
              <div className="github">
                <FiGithub size={24} color="#91ca41" />
                <a
                  className="text-contact"
                  href="https://github.com/babigoliveira"
                >
                  babigoliveira
                </a>
              </div>
              <div className="instagram">
                <FiInstagram size={24} color="#91ca41" />
                <a
                  className="text-contact"
                  href="https://www.instagram.com/babigoliveira/"
                >
                  babigoliveira
                </a>
              </div>
            </div>
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
                Enviar
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
