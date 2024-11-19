import { IonCol, IonRow } from '@ionic/react';
import './Adopt.css';

function Adopt() {
  const imagePaths = [
    '/images/cat-01.png',
    '/images/dog-01.png',
    '/images/cat-02.png',
    '/images/dog-02.png',
    '/images/cat-03.png',
    '/images/dog-03.png',
    '/images/dog-04.jpg',
    '/images/dog-05.jpg',
    '/images/cat-04.jpg',
  ];



  return (
    <>
      <div className="adopt-title">
        <h2>Adoção</h2>
      </div>
      <IonRow>
        <IonCol>
          <div className="aboutUs-mosaic">
            {imagePaths.map((imagePaths, index) => (
              <div key={index} className="aboutUs-mosaic-item">
                <img src={imagePaths} alt={`Mosaic item ${index + 1}`} />
              </div>
            ))}
          </div>
        </IonCol>

        <IonCol>
          <div className="adopt-forms">
            <iframe
              className='form-iframe'
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