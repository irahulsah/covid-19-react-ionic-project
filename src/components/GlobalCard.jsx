import React from "react";
import {
  IonCard,
  IonLoading,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonList,
  IonItem,
  IonContent,
} from "@ionic/react";

const GlobalCard = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  showLoading,
  country,
}) => {



  return (
    <IonContent>
      {showLoading && <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => showLoading}
        message={"Loading..."}
      /> }
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonLabel color="warning">
                  {country ? (
                    <h1>Cases in {country}</h1>
                  ) : (
                    <h1>Global Cases</h1>
                  )}
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard color="warning">
              <IonCardHeader>
                <IonCardTitle>Total Confirmed</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{confirmed.value}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>Total recovered</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{recovered.value}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard color="danger">
              <IonCardHeader>
                <IonCardTitle>Total Deaths</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{deaths.value}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonLabel>
                  {" "}
                  Last Updated At: <b>{new Date(lastUpdate).toDateString()}</b>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default GlobalCard;
