import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonLabel,
  IonTabBar,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  newspaperOutline,
  globeOutline,
  logoFacebook,
  logoTwitter,
  logoGithub,
  shareOutline,
  caretBackCircleOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Home from "./pages/Home";
import News from "./pages/News";

import GlobalData from "./pages/CasesDisplay";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/news" component={News} exact={true} />

            <Route path="/globalcases" component={GlobalData} exact={true} />
            <Route path="/home" component={Home} exact={true} />

            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel color="success">Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="news" href="/news">
              <IonIcon icon={newspaperOutline} />
              <IonLabel color="success">Latest News</IonLabel>
            </IonTabButton>

            <IonTabButton tab="global" href="/globalcases">
              <IonIcon icon={globeOutline} />
              <IonLabel color="success">Global Cases</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <IonFab horizontal="end" vertical="top" slot="fixed">
          <IonFabButton color="warning">
            <IonIcon md={shareOutline} ios={caretBackCircleOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton
              color="light"
              href="https://www.facebook.com/sharer/sharer.php?u=https://nepalcovid-19.netlify.app"
              target="_blank"
            >
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
            <IonFabButton
              color="light"
              href="https://twitter.com/intent/tweet?text=https://nepalcovid-19.netlify.app"
              target="_blank"
            >
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
            <IonFabButton
              color="light"
              href="https://github.com/irahulsah"
              target="_blank"
            >
              <IonIcon icon={logoGithub}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
