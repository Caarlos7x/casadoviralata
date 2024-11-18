import { IonCol, IonRow } from "@ionic/react";
import './AboutUs.css'


function AboutUs() {


  return (
    <>
      <IonRow>
        <div className="aboutUs-title">
          <h2>Sobre nós</h2>
        </div>
      </IonRow>

      <IonRow style={{ marginBottom: '100px' }}>
        <IonCol size='6' class='aboutUs-col1'>
          <p>
          <strong>Somos apaixonados por transformar vidas!</strong> Nosso trabalho 
          é dedicado a resgatar cachorros e gatos que precisam de amor 
          e cuidado, oferecendo a eles uma nova chance de encontrar um 
          lar cheio de carinho. Acreditamos que cada animal merece respeito 
          e dignidade, e nossa missão é conectar essas histórias de 
          esperança com pessoas dispostas a acolher um novo membro na família. 
          Juntos, podemos fazer a diferença e espalhar felicidade, uma 
          adoção por vez. Seja parte dessa jornada! ❤️
          </p>
        </IonCol>
        <IonCol size='6' class='aboutUs-col2'>
          <div className="aboutUs-cat-img"></div>
        </IonCol>
      </IonRow>

      <IonRow>
          <div className="aboutUs-circle"></div>
          <div className="aboutUs-img"></div>
          <div className="aboutUs-display">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Soluta optio voluptate sit tenetur sunt fugit incidunt,
              quos iusto non at accusamus ducimus enim similique aliquid
              esse beatae dolore consequatur ullam.
            </p>
          </div>
      </IonRow>

      



    </>

  );
}

export default AboutUs;