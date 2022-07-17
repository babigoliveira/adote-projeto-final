import logo from "../../assets/logo-test.jpg";
import Footer from "../../components/Footer/Footer";
import "./About-style.css";

function About() {
  return (
    <>
      <div className="container">
        <section className="sec1">
          <img className="logo" src={logo} />
          <div className="text-sec1">
            <h1 className="title-sec1">Adote</h1>
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

        <section className="sec2">
          <h2 className="title-sec2"> Importância da adoção: </h2>
          <div className="video">
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
          <p className="text-sec2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reiciendis, modi amet quos veniam saepe nulla suscipit hic neque
            tempore esse laudantium, itaque, veritatis quasi soluta magni
            accusamus totam ullam! Lorem ipsum dolor sit amet consectetur
            adipisicing eleniti vitae eleniti vitae sit.
          </p>
          <img
            className="image-sec2"
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/05/adocao-brasil.jpg"
          />
          <p className="text-sec2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.In, sit.
            Impedit blanditiis repellendus tempore? Incidunt laborum mollitia
            eum repudiandae, deleniti vitae nam voluptates vel quam, ut voluptas
            minima unde odit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore
            asperiores deleniti vitae.
          </p>
          <img
            className="image-verse-sec2"
            src="https://pbs.twimg.com/media/CAjpIUoUcAAzGe1.png"
          />
          <p className="text-sec2">
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
          <p className="text-sec2">
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
      </div>

      <Footer />
    </>
  );
}

export default About;
