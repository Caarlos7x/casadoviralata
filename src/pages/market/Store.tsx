import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import './Store.css'

function Store() {
  const itemsStore = [
    {
      id: 1,
      name: "Mercado Pago",
      description: "Assinatura mensal do Mercado Pago",
    },
    {
      id: 2,
      name: "Apoia-se",
      description: "Assinatura mensal do Apoia-se",
    },
    {
      id: 3,
      name: "PICPAY",
      description: "Assinatura mensal do PICPAY anuidade",
      price: 12,
    }
  ]

  return (
    <div className="store-container">
      {itemsStore.map(item => (
        <IonCard key={item.id} className="card">
          <IonCardHeader>
            <IonCardTitle className="card-title">{item.name}</IonCardTitle>
            <IonCardSubtitle className="card-description">{item.description}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="card-content">
            {item.price && <p>Price: ${item.price}</p>}
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
}

export default Store;