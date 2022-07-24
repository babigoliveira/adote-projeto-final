import logoPicture from "../../assets/logo-picture.png";
import Footer from "../../components/Footer/Footer";
import "./About-style.css";

function About() {
  return (
    <>
      <main className="container-about">
        <section className="home">
          <img className="logo" src={logoPicture} />
          <div className="text-home">
            <h1 className="title-home">Um pouco sobre nós</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores fugiat nobis dolores magni nulla. Obcaecati accusamus
              ipsum natus laudantium recusandae. Alias magni, sequi fuga
              cupiditate saepe ullam illum ab! Esse?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus libero molestias beatae
              dignissimos dolorum non porro sequi soluta iste deleniti?
              Inventore, nihil nesciunt! Cupiditate consectetur nam quasi
              soluta, voluptatem sapiente similique alias, ea quam ipsam amet
              aliquid nemo, quibusdam tempore atque voluptatum dolor.
            </p>
          </div>
        </section>

        <section>
          <h2 className="title-about"> Importância da adoção: </h2>
          <div className="video-about">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/tsGVHkpqIgI"
              title="Leis de adoção no Brasil: como simplificar o processo? | Quebrando o Tabu"
              alt="Leis de adoção no Brasil: como simplificar o processo? | Quebrando o Tabu"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="subtitle-about"> Adotar é </h3>
          <div className="list-about">
            <ul>
              <li className="text-about">um ato de amor</li>
              <li className="text-about">um ressignificar a vida</li>
              <li className="text-about">
                não ver a barriga crescer, mas sentir que o coração não tem
                tamanho
              </li>
              <li className="text-about">
                apenas outra maneira de soletrar familia
              </li>
              <li className="text-about">
                amar e assumir como filho alguém que não nasceu de nós, mas
                nasceu pra nós!
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
