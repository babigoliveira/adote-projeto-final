import logoPicture from "../../assets/logo-picture.png";
import Footer from "../../components/Footer/Footer";
import "./About-style.css";

function About() {
  return (
    <>
      <section className="home">
        <img className="logo" src={logoPicture} />
        <div className="text-home">
          <h1 className="title-home">Um pouco sobre nós</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            fugiat nobis dolores magni nulla. Obcaecati accusamus ipsum natus
            laudantium recusandae. Alias magni, sequi fuga cupiditate saepe
            ullam illum ab! Esse?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus libero molestias beatae dignissimos
            dolorum non porro sequi soluta iste deleniti? Inventore, nihil
            nesciunt! Cupiditate consectetur nam quasi soluta, voluptatem
            sapiente similique alias, ea quam ipsam amet aliquid nemo, quibusdam
            tempore atque voluptatum dolor.
          </p>
        </div>
      </section>

      <section className="adoption">
        <h3 className="subtitle-adoption"> Adotar é </h3>
        <div className="list-adoption">
          <ul>
            <li className="text-adoption">um ato de amor</li>
            <li className="text-adoption">um ressignificar a vida</li>
            <li className="text-adoption">
              não ver a barriga crescer, mas sentir que o coração não tem
              tamanho
            </li>
            <li className="text-adoption">
              apenas outra maneira de soletrar familia
            </li>
            <li className="text-adoption">
              amar e assumir como filho alguém que não nasceu de nós, mas nasceu
              pra nós!
            </li>
          </ul>
        </div>
        <div className="video-adoption">
          <iframe
            width="260"
            height="200"
            src="https://www.youtube.com/embed/tsGVHkpqIgI"
            title="Leis de adoção no Brasil: como simplificar o processo? | Quebrando o Tabu"
            alt="Leis de adoção no Brasil: como simplificar o processo? | Quebrando o Tabu"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
