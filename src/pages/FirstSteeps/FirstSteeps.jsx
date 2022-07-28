import Card from "./Card/Card";
import Footer from "../../components/Footer/Footer";
import "./FirstSteeps-style.css";

function FirstSteeps() {
  return (
    <>
      <section className="container-steeps">
        <h1 className="title-container">Quero adotar, e agora?</h1>
        <div className="card-container">
          <Card title="Quem pode adotar?">
            Toda pessoa com mais de 18 anos de idade, seja ela casada, solteira
            ou em união estável, pode adotar uma criança ou um adolescente. O
            adotante deve ser pelo menos 16 anos mais velho que a criança ou o
            adolescente que pretende adotar.
          </Card>

          <Card title="Quem pode ser adotato?">
            Podem ser adotadas crianças e adolescentes com idade até 18 anos,
            cujos pais são falecidos ou concordaram com a adoção e que tiverem
            sido destituídos do poder familiar. Maiores de 18 anos também podem
            ser adotados. No entanto, a adoção de adultos é regida pelo Código
            Civil e julgada pelo Juízo Cível.
          </Card>

          <Card title="Quais requisitos tornam apto pra adotar?">
            Além de ter mais de 18 anos, deve possuir idoneidade moral e
            motivação idônea para a adoção. A lei também prevê a frequência a
            curso preparatório para adoção, onde serão prestados esclarecimentos
            e efetuadas as avaliações correspondentes, que definirão se a pessoa
            está apta ou inapta a adotar.
          </Card>

          <Card title="Quais os documentos necessários?">
            Os documentos necessários deve ser obtida na Vara da Infância e da
            Juventude da comarca onde o pedido de habilitação para adoção será
            formalizado, pois pode haver pequenas variações em cada comarca.
          </Card>

          <Card title="O processo de adoção custa caro?">
            Não custa nada. Tanto o processo de habilitação à adoção quanto a
            adoção propriamente dita são isentos de custas judiciais. Além
            disso, não é preciso contratar advogado e os requerimentos podem ser
            formulados diretamente em cartório pelos interessados.
          </Card>

          <Card title="Há uma idade limite para habilitar-se à adoção?">
            Não. Embora a lei tenha fixado uma idade mínima, não estabeleceu
            qualquer idade máxima para que uma pessoa possa adotar. A capacidade
            do pretendente à adoção em assumir as consequências presentes e
            futuras da medida, no entanto, é analisada caso a caso, por ocasião
            do processo de habilitação.
          </Card>

          <Card title="Há exigência de renda mínima para adoção?">
            Não. A adoção pode ocorrer independentemente da renda das pessoas
            interessadas em adotar uma criança e/ou um adolescente. Também não
            há qualquer “preferência” na adoção por pessoas com maior renda.
          </Card>

          <Card title="É possível adotar parentes?">
            Sim. Desde que seja demonstrado que a medida efetivamente atende aos
            interesses da criança/adolescente, não há qualquer óbice à adoção
            deste. As únicas exceções são a adoção por ascendentes e por irmãos,
            que não são permitidas por lei, podendo estes solicitar a guarda
            e/ou tutela da criança/adolescente. No caso da adoção de enteado,
            esta não apenas é possível.
          </Card>

          <Card title="Quanto tempo leva o processo de adoção?">
            Dependo do “perfil” eventualmente indicado para a criança e/ou o
            adolescente que se pretende adotar, o processo pode ser extremamente
            rápido. Os processos mais ágeis são aqueles em que não há restrições
            quanto à idade, o sexo e a cor da pele da criança e/ou do
            adolescente. Também são encaminhados com maior celeridade os
            processos cujos pretendentes à adoção aceitam grupos de irmãos.
          </Card>

          <Card title="Como saber a posição do pretendente na fila de adoção?">
            É possível requerer tal informação diretamente à Vara da Infância e
            da Juventude da comarca onde o requerimento foi realizado.
          </Card>

          <Card title="Há um período mínimo de convívio antes da adoção?">
            Para a adoção nacional a lei não prevê um período mínimo de convívio
            anterior entre adotante e adotando. O período do chamado “estágio de
            convivência” varia em cada caso e pode durar o tempo que a Justiça
            da Infância e da Juventude entender necessário. Já na adoção
            internacional, há previsão legal para um estágio de convivência de,
            no mínimo, 30 (trinta) dias, a ser cumprido em território nacional.
          </Card>

          <Card title="Se eu já tiver adotado uma criança, posso me arrepender?">
            A adoção é irrevogável e a “devolução” de uma criança adotada não
            apenas é juridicamente impossível, como também pode dar causa a uma
            série de sanções de natureza civil e administrativa. Em casos
            extremos, como se houver eventual “abandono”, pode também gerar
            sanções de natureza penal.
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default FirstSteeps;
