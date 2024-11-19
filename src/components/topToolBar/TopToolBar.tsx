import React from "react";
import { IonToolbar, IonButtons } from '@ionic/react';
import "./TopToolBar.css";

function TopToolBar() {
  const menuTopItems = [
    { label: "Home", link: "/" },
    { label: "Sobre", link: "/about" },
    { label: "Adote", link: "/adopt" },
    { label: "Contato", link: "/contact" },
  ];

  return (
    <IonToolbar className="top-toolbar">
      <IonButtons className="btn-topToolBar" slot="end">
        {menuTopItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="menu-link"
          >
            {item.label}
          </a>
        ))}
      </IonButtons>
    </IonToolbar>
  );
}

export default TopToolBar;
