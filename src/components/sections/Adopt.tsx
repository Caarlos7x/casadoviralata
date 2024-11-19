import { IonCol, IonRow } from '@ionic/react';
import './Adopt.css';

function Adopt() {
  return (
    <>
      <div className="adopt-title">
        <h2>Adoção</h2>
      </div>
      <IonRow>
        <IonCol>
          <div className="adopt-video">
            <video autoPlay loop muted playsInline>
              <source src="/assets/video/CasaDoViraLata.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className="adopt-video-content">
              <h1>Adote um Pet!</h1>
              <p>Encontre um amigo especial.</p>
            </div>
          </div>
        </IonCol>

        <IonCol>
          <div className="adopt-forms">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeOTb99-qlbSya0KVOG2Yk091s2925yVYg5_KSwtFoTLn1WHw/viewform?embedded=true"
              width="640"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}>Carregando…
            </iframe>
          </div>
        </IonCol>
      </IonRow>
    </>
  );
}

export default Adopt;