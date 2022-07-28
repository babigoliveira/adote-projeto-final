import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Post from "./Post/Post";
import family1 from "../../../assets/family1.png";
import family2 from "../../../assets/family2.png";
import family3 from "../../../assets/family3.png";
import "./Slider-style.css";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Post image={family1}>
            "É sempre muito difícil falar de nossa história sem me emocionar,
            lembro que não ficamos na fila nem um dia, ela chegou a nós por
            busca ativa aos 4 anos tinha um laudo de PC e Hidrocefalia,
            cadeirante e pronunciava algumas palavras a maioria incompreensível,
            no exato momento que eu vi minha filha pela primeira vez eu tive
            muito medo, medo de não dar conta, medo de não superar as
            expectativas, isso tudo passou em um segundo quando eu segurei ela
            no meu colo pela primeira vez. O medo simplesmente foi embora. E foi
            melhor do que eu podia esperar os últimos dois anos foram uns dos
            melhores da minha vida. Com toda a rotina e correria eu vi minha
            filha aprender a andar, aprender a falar, dançar, encarar desafios,
            vi ela receber nosso sobrenome, vi ela me ensinar o que é amor
            incondicional, me ensinar a ser mais tolerante e não levar a vida
            tão a sério, eu agradeço a Deus todos os dias por ela nos adotar
            como pais.”
          </Post>
        </SwiperSlide>

        <SwiperSlide>
          <Post image={family2}>
            "Embora possa ter filhos biologicamente, sempre tive o desejo de
            adotar. Meu marido e eu decidimos dar entrada no processo de
            habilitação para adoção de uma menina...nossa filha! Enquanto
            aguardava finalizar o processo de habilitação, participava de grupos
            de apoio à adoção virtuais. Foi um período de rica troca de
            experiências, onde pude me aprofundar mais sobre o tema adoção.
            Conheci a minha filha através de BUSCA ATIVA, onde pessoas queridas,
            conhecidas como "cegonhas", trabalham voluntariamente na divulgação
            de crianças que não conseguem pretendentes na sua região. Em abril
            de 2014 o processo de adoção finalizou e recebemos a nova certidão
            de nossa filha. Sempre que possível, participamos de reportagens,
            programas, palestras, enfim, tudo que seja pró-adoção. Hoje ela está
            feliz, se sente segura e amada. Nossa família está completa!"
          </Post>
        </SwiperSlide>

        <SwiperSlide>
          <Post image={family3}>
            "Adotar uma criança maior é ter essa emoção elevada à nona potência,
            pois uma criança que já se reconhece como indivíduo você precisa
            conquistar, ao mesmo tempo em que se permite ser por ela
            conquistado. Nessa dança afetiva, vamos aos poucos acertando o ritmo
            e o passo, em um aprendizado intenso, contínuo, revigorante.”
          </Post>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
