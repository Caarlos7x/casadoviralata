import { IonFooter } from '@ionic/react';
import './footer.css';

function Footer() {
  return (
    <IonFooter>
      <div className="footer-columns">
        <div className="footer-column">
          <a href="#home">
            <div className="img-footer"></div>
          </a>
        </div>

        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <p>Email: contato@casadoviralata.com.br</p>
        </div>
      </div>
    </IonFooter>
  );
}

export default Footer;