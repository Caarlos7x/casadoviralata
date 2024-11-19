
import { Link } from "react-scroll";
import { IonToolbar, IonButtons } from '@ionic/react';
import "./TopToolBar.css";

function TopToolBar() {
  const menuTopItems = [
    { label: "Home", link: "home" },
    { label: "Sobre", link: "about" },
    { label: "Loja", link: "store" },
    { label: "Adote", link: "adopt" },
    { label: "Contato", link: "contact" },
  ];

  return (
    <IonToolbar className="top-toolbar">
      <IonButtons className="btn-topToolBar" slot="end">
        {menuTopItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.link} 
            smooth={true} 
            duration={500} 
            className="menu-link"
          >
            {item.label}
          </Link>
        ))}
      </IonButtons>
    </IonToolbar>
  );
}

export default TopToolBar;
