import React, { useEffect, useState } from "react";
import { fetchNews } from "../components/FetchData";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  IonHeader,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonCardTitle,
  IonTitle,
  IonContent,
  IonLoading,
  IonToolbar,
} from "@ionic/react";

const News = () => {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const newsFetch = async () => {
      setFetchedNews(await fetchNews());
      setShowLoading(false);
    };
    newsFetch();
  }, [setFetchedNews]);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle color="success">Latest News Nepal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => showLoading}
          message={"Loading..."}
        />
        <IonGrid>
          {fetchedNews.map((news) => (
            <IonRow key={news._id}>
              <IonCol>
                <IonCard class="ion-padding ion-margin" color="medium">
                  <IonImg class="ion-padding ion-margin" src={news.image_url} />

                  <IonCardHeader>
                    <IonCardTitle>
                      <h1>{news.title}</h1>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h2>{news.summary}</h2>
                    <IonButton
                      class="ion-padding"
                      href={news.url}
                      target="_blank"
                    >
                      More
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default News;
