import { IonRow, IonCol } from '@ionic/react';
import './Hero.css'
import CustomButton from '../common/Buttons';



function Hero() {
  return (
    <>
      <IonRow className="hero-row">
        <IonCol size="12" size-sm="6" size-md="6" size-lg="6" class='hero-col1'>
          <h1>ABRIGO</h1>
          <h2>Casa do Vira-Lata</h2>
          <p>Não existe animais de rua, existem animais nas ruas e eles precisam de nós.</p>
          <div className="btn-adotar-hero">
            <CustomButton
              type="adopt"
              onClick={() => {
                console.log('Botão clicado');
              }}
            >
              Adote um amiguinho
            </CustomButton>
          </div>



        </IonCol>
        <IonCol size="12" size-sm="6" size-md="6" size-lg="6" class='hero-col2'>
          <div className="bullet-hero"></div>
          <div className="dog-hero"></div>
        </IonCol>
      </IonRow>
      <IonRow>
        <div className="line-hero"></div>
      </IonRow>
    </>
  );
}
export default Hero;