import React from "react";
import {
  IonContent,
  IonItem,
  IonTitle,
  IonList,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { homeOutline, newspaperOutline, globeOutline } from "ionicons/icons";
const Menu = ({ menu }) => {
  return (
    <IonMenu side="start" contentId="main-content">
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle color="success">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={homeOutline} slot="start"></IonIcon>
            <IonButton fill="outline" color="warning" routerLink="/">
              Home
            </IonButton>
          </IonItem>
          <IonItem>
            <IonIcon icon={newspaperOutline} slot="start"></IonIcon>
            <IonButton fill="outline" color="warning" routerLink="/news">
              News
            </IonButton>
          </IonItem>
          <IonItem>
            <IonIcon icon={globeOutline} slot="start"></IonIcon>
            <IonButton fill="outline" color="warning" routerLink="/globalcases">
              Global Cases
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
