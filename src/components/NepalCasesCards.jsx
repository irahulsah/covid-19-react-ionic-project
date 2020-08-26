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
  IonList,
  IonLabel,
  IonItem,
} from "@ionic/react";
const Cards = ({
  data: {
    tested_positive,
    tested_negative,
    tested_total,
    quarantined,
    tested_rdt,
    pending_result,
    recovered,
    deaths,
    updated_at,
  },
  showLoading,
}) => {
  return (
    
      <IonGrid>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => showLoading}
        message={"Loading..."}
      />
        <IonRow>
          <IonCol>
            <IonCard color="warning">
              <IonCardHeader>
                <IonCardTitle>Total Cases</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{tested_positive}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="danger">
              <IonCardHeader>
                <IonCardTitle>Total Deaths</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{deaths}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>Total Recovered</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{recovered}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>Total PCR Tests</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{tested_total}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Total RDT Test</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{tested_rdt}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="light">
              <IonCardHeader>
                <IonCardTitle>Tested Negative</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{tested_negative}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Total Quarantined</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{quarantined}</b>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Pending Result</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <b>{pending_result}</b>
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
                  Last Updated At: <b>{new Date(updated_at).toDateString()}</b>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonGrid>
    
  );
};

export default Cards;
