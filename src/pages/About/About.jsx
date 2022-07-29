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
            O<span>ADOTE</span> é um site voltado para orientação e elucidação
            dos processos da adoção consciente. Quando estava mais nova uma tia
            adotou meu primo que estava em casa de apoio. A partir dai, admirada
            pela sua escolha, me voluntariei para auxiliar no ensino infantil e
            fundamental em momentos de oratória, música, dança, esportes e
            lazer. Assim, acompanhando todo o processo pude observar o quão
            lindo foi o seu ato e da rede de apoio que obteve em sua família.
            Quando me surgiu uma oportunidade, comecei a estudar pedagogia com
            intuito de entender mais os processos de aprendizagem e também somar
            na educação das crianças, incluindo meu filho. Neste site, você
            encontrará motivos para entender que o ato de supremo amor é também
            um ato social.
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
