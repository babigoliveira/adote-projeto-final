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

        <section className="about">
          <h2 className="title-about"> Importância da adoção: </h2>
          <div className="video-about">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/wcVVXUV0YUY"
              alt="video-test"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reiciendis, modi amet quos veniam saepe nulla suscipit hic neque
            tempore esse laudantium, itaque, veritatis quasi soluta magni
            accusamus totam ullam! Lorem ipsum dolor sit amet consectetur
            adipisicing eleniti vitae eleniti vitae sit.
          </p>
          <img
            className="image1-about"
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/05/adocao-brasil.jpg"
          />
          <p className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.In, sit.
            Impedit blanditiis repellendus tempore? Incidunt laborum mollitia
            eum repudiandae, deleniti vitae nam voluptates vel quam, ut voluptas
            minima unde odit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore
            asperiores deleniti vitae.
          </p>
          <img
            className="image2-about"
            src="https://pbs.twimg.com/media/CAjpIUoUcAAzGe1.png"
          />
          <p className="text-about">
            Iure animi provident in incidunt com modi labore dese runt quaerat
            quo neque, molestias eveniet distinctio illo saepe obcaecati sunt
            est placeat beatae sed! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Labore asperiores nam at veritatis assumenda nemo
            corporis, sint dolor necessitatibus cupiditate repellendus,
            quibusdam pariatur facilis sapiente minima, accusantium quisquam
            accusamus corrupti?Iure animi provident in incidunt com modi labore
            dese runt quaerat quo neque, molestias eveniet distinctio illo saepe
            obcaecati sunt est placeat beatae sed!
          </p>
          <p className="text-about">
            Iure animi provident in incidunt com modi labore dese runt quaerat
            quo neque, molestias eveniet distinctio illo saepe obcaecati sunt
            est placeat beatae sed! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Labore asperiores nam at veritatis assumenda nemo
            corporis, sint dolor necessitatibus cupiditate repellendus,
            quibusdam pariatur facilis sapiente minima, accusantium quisquam
            accusamus corrupti?Iure animi provident in incidunt com modi labore
            dese runt quaerat quo neque, molestias eveniet distinctio illo saepe
            obcaecati sunt est placeat beatae sed!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
