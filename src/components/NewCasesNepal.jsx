import React from "react";

import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonLoading
} from "@ionic/react";

const NewCasesNepal = ({ fetchedNewCases, showLoading }) => {
  const newCase = fetchedNewCases.filter((name) => {
    if (name.country === "Nepal") {
      return name;
    }

  });

  return (
    

    <IonGrid>
       <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => showLoading}
        message={"Loading..."}
      />
      <IonRow>
        <IonCol>
          <IonCard color="danger">
            <IonCardHeader>
              <IonCardTitle>New Cases</IonCardTitle>
            </IonCardHeader>
            {newCase.map((newCase) => (
              <IonCardContent key={newCase.country}>
                {newCase.newCases}
              </IonCardContent>
            ))}
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
    

  );
};

export default NewCasesNepal;
