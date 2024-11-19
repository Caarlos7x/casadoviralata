import { IonCol, IonRow } from "@ionic/react";
import './AboutUs.css'


function AboutUs() {
  const imagePaths = [
    '/src/assets/images/adopt-1.png',
    '/src/assets/images/adopt-2.png',
    '/src/assets/images/adopt-3.png',
    '/src/assets/images/adopt-4.png',
    '/src/assets/images/adopt-5.png',
    '/src/assets/images/adopt-6.png',
    '/src/assets/images/adopt-7.png',
    '/src/assets/images/adopt-8.png',
    '/src/assets/images/adopt-9.png',
    '/src/assets/images/adopt-10.png',
    '/src/assets/images/adopt-11.png',
    '/src/assets/images/adopt-12.png',
    '/src/assets/images/adopt-13.png',
    '/src/assets/images/adopt-14.png',
    '/src/assets/images/adopt-15.png',
  ];

  return (
    <>
      <IonRow>
        <div className="aboutUs-title">
          <h2>Sobre nós</h2>
        </div>
      </IonRow>

      <IonRow style={{ marginBottom: '100px' }}>
        <IonCol size="12" size-sm="6" size-md="6" size-lg="6" class='aboutUs-col1'>
          <p>
            <strong>Somos apaixonados por transformar vidas!</strong> Nosso trabalho
            é dedicado a resgatar cachorros e gatos que precisam de amor
            e cuidado, oferecendo a eles uma nova chance de encontrar um
            lar cheio de carinho. Acreditamos que cada animal merece respeito
            e dignidade, e nossa missão é conectar essas histórias de
            esperança com pessoas dispostas a acolher um novo membro na família.
            Juntos, podemos fazer a diferença e espalhar felicidade, uma
            adoção por vez. Seja parte dessa jornada! ❤️

            <br /><br />
            Nossa dedicação vai além do simples resgate. Acompanhamos cada animal 
            durante sua jornada de adaptação, oferecendo cuidados médicos, alimentação 
            adequada e, principalmente, muito carinho. Sabemos que cada bichinho tem 
            uma história única e, por isso, nos empenhamos para que se sintam seguros
            e amados enquanto esperam por um lar. Nosso compromisso não é apenas com 
            a adoção, mas com a saúde e bem-estar de cada um deles, garantindo que 
            estejam prontos para dar e receber amor.
            <br /><br /> <br /><br /> <br /><br />
            Estamos criando uma rede de apoio onde todos têm a oportunidade de 
            contribuir de alguma forma. Seja adotando, fazendo voluntariado ou mesmo 
            compartilhando as histórias de nossos animais, cada gesto conta. 
            Acreditamos que quando nos unimos por um propósito maior, conseguimos 
            transformar não apenas a vida dos animais, mas também a de suas futuras 
            famílias. Juntos, podemos construir um mundo mais justo e cheio de 
            afeto para todos.
          </p>
        </IonCol>
        <IonCol size="12" size-sm="6" size-md="6" size-lg="6" class='aboutUs-col2'>
          <div className="aboutUs-mosaic">
            {imagePaths.map((imagePaths, index) => (
              <div key={index} className="aboutUs-mosaic-item">
                <img src={imagePaths} alt={`Mosaic item ${index +1}`} />
              </div>
            ))}
          </div>
          
          {/* <div className="aboutUs-cat-img"></div> */}
        </IonCol>
      </IonRow>

      {/* <IonRow>
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
      </IonRow> */}

    </>

  );
}

export default AboutUs;