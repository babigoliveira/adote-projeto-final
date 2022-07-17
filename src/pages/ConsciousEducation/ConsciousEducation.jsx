import Footer from "../../components/Footer/Footer";
import "./ConsciousEducation-style.css";

function ConsciousEducation() {
  return (
    <>
      <section className="container-education">
        <h2 className="title-container">Educação Consciente:</h2>
        <div className="container-education-cards">
          <div className="no-violence-consequences">
            <div className="no-violence">
              <h3 className="subtitle-education">Não à violência:</h3>
              <img
                className="image-no-violence"
                src="https://st2.depositphotos.com/1008768/6616/i/600/depositphotos_66167447-stock-photo-no-violence-or-aggression-stop.jpg"
              />
              <p className="text-no-violence">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                impedit repudiandae corrupti, cupiditate illo maiores optio.
                Repellendus esse dicta consectetur explicabo quas neque rerum
                error tenetur alias ipsum. Earum, molestias? Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem, cum. Alias ipsa
                aspernatur minima ipsum corrupti vitae sapiente nostrum esse at,
                corporis nam maiores voluptas minus accusantium, consequuntur
                labore error!
              </p>
            </div>
            <div className="consequences">
              <h3 className="subtitle-education">Consequências:</h3>
              <img
                className="image-consequences"
                src="https://t2.pb.ltmcdn.com/pt/posts/3/1/0/violencia_infantil_tipos_causas_consequencias_e_prevencao_13_orig.jpg"
              />
              <p className="text-consequences">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                est odit laudantium commodi sunt asperiores id accusamus
                deleniti laboriosam nobis officiis dignissimos animi obcaecati
                voluptatem a ad aliquam nam quis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, ab neque perferendis nemo
                dolore delectus quasi odio labore! Eveniet quod dicta pariatur
                beatae error obcaecati, aliquam rem vitae qui veritatis!
              </p>
            </div>
          </div>
          <a className="anchor" href="">
            Saiba mais
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConsciousEducation;
