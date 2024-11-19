import { IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import './footer.css';

function Footer() {
  return (
    <IonFooter className="full-width-footer">
      <IonGrid>
        <IonRow class='full-width-footer'>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <a href="#home">
                <div className="img-footer"></div>
              </a>
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <h3>Redes Sociais</h3>
              <ul>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <h3>Contato</h3>
              <p>contato@casadoviralata.com.br</p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}

export default Footer;
