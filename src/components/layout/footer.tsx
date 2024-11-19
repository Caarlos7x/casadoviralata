import { IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import './footer.css';

function Footer() {
  return (
    <IonFooter className="full-width-footer">
      <IonGrid>
        <IonRow class='full-width-footer'>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <a href="home">
                <div className="img-footer"></div>
              </a>
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <h3>Redes Sociais</h3>
              <ul>
                <li><a href="https://www.facebook.com/viralataabrigo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/casadoviralata" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@casadoviralata" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <h3>Contato</h3>
              <p>
                <a href="mailto:contato@casadoviralata.com.br?subject=Assunto%20do%20E-mail&body=Mensagem%20Olá, gostaria de adotar um animalzinho">
                  contato@casadoviralata.com.br
                </a>
              </p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}

export default Footer;
