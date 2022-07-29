import { useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import "./Contact-style.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function formatWhatsappUrl({ name, email, subject, message }) {
    const formattedMessage = `
      *Nome*: ${name.trim()}
      *Email*: ${email.trim()}
      *Assunto*: ${subject.trim()}
      *Mensagem*: ${message.trim()}
    `.replaceAll(/\n +/g, "\n");

    const url =
      "https://api.whatsapp.com/send?phone=+5531985972616&text=" +
      encodeURIComponent(formattedMessage);

    return url;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = formatWhatsappUrl({ name, email, subject, message });
    window.open(url, "_blank");
  };

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
                  href="https://www.linkedin.com/in/barbaragdeoliveira"
                  target="_blank"
                >
                  barbaragdeoliveira
                </a>
              </div>
              <div className="github">
                <FiGithub size={24} color="#91ca41" />
                <a
                  className="text-contact"
                  href="https://github.com/babigoliveira"
                  target="_blank"
                >
                  babigoliveira
                </a>
              </div>
              <div className="instagram">
                <FiInstagram size={24} color="#91ca41" />
                <a
                  className="text-contact"
                  href="https://www.instagram.com/babigoliveira/"
                  target="_blank"
                >
                  babigoliveira
                </a>
              </div>
            </div>
          </div>

          <div className="form-contact">
            <h3 className="subtitle-contact">Mensagem:</h3>
            <form onSubmit={handleSubmit} className="form">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="inputs-form"
                type="text"
                placeholder="Nome"
                required
              />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="inputs-form"
                type="email"
                placeholder="Email"
                required
              />
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="inputs-form"
                type="text"
                placeholder="Assunto"
                required
              />

              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
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
