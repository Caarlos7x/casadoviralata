import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import './Store.css';

interface Item {
  id: number;
  name: string;
  description: string;
  price?: number;
  url?: string;
}

function Store() {
  const itemsPatreon: Item[] = [
    {
      id: 1,
      name: "Mercado Pago",
      description: "Assinatura mensal do Mercado Pago",
      url: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848dc7c6e8018de5c56be114ce"
    },
    {
      id: 2,
      name: "Apoia-se",
      description: "Assinatura mensal do Apoia-se",
      url: "https://apoia.se/casadoviralata"
    },
    {
      id: 3,
      name: "PICPAY",
      description: "Assinatura mensal do PICPAY anuidade",
      price: 12,
      url: "https://app.picpay.com/user/assinaturacasadoviralata"
    },
  ];

  const itemsStore: Item[] = [
    {
      id: 1,
      name: "Camiseta Jão ♥︎ Let it Miau",
      description: "Camiseta Jão ♥︎ Let it Miau",
      price: 90,
      url: "https://merch.com.br/jao_/camiseta-jao-let-it-miau/?fbclid=PAZXh0bgNhZW0CMTEAAaYOo4Bzwr2ltBcMtCKB1jvlnBV-xsuiUcZDkH_GTFbJWI47dRi52ewNw00_aem_dueBStSeQmSBinefoYlSgQ"
    },
    {
      id: 2,
      name: "Rifa",
      description: "Rifa Casa do Vira-Lata",
      price: 10,
      url: "https://rd.app/s/ckazDzWsdpc?fbclid=PAZXh0bgNhZW0CMTEAAaZVO65PaTGxwFa7St5vmEGYaTNoeRGiUXoyyGjBxbsTHlQieX8BOlXfHJo_aem_9JCsl2XGsGtgJqmLPsx_Ag",
    },
    {
      id: 3,
      name: "Adesivo Let it Miau",
      description: "Adesivo personalizado",
      price: 5,
    },
  ];

  const formatCurrencyBRL = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formattedItemsPatreon = itemsPatreon.map(item => ({
    ...item,
    price: item.price ? formatCurrencyBRL(item.price) : undefined,
  }));

  const formattedItemsStore = itemsStore.map(item => ({
    ...item,
    price: item.price ? formatCurrencyBRL(item.price) : undefined,
  }));

  return (
    <>
      <div className="store-patreon">
        <h2>Seja nosso apoiador</h2>
        <div className="store-container">
          {formattedItemsPatreon.map(item => (
            <IonCard key={item.id} className="card">
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <IonCardHeader>
                  <IonCardTitle className="card-title">{item.name}</IonCardTitle>
                  <IonCardSubtitle className="card-description">{item.description}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  {item.price && <p>Preço: {item.price}</p>}
                </IonCardContent>
              </a>
            </IonCard>
          ))}
        </div>
      </div>

      <div className="store-store">
        <h2>Lojinha</h2>
        <div className="store-container">
          {formattedItemsStore.map(item => (
            <IonCard key={item.id} className="card">
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <IonCardHeader>
                  <IonCardTitle className="card-title">{item.name}</IonCardTitle>
                  <IonCardSubtitle className="card-description">{item.description}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  {item.price && <p>Preço: {item.price}</p>}
                </IonCardContent>
              </a>
            </IonCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;