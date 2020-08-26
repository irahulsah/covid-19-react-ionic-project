import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import { fetchData } from "../components/FetchData";
import Cards from "../components/NepalCasesCards";
import NewCasesNepal from "../components/NewCasesNepal";
import { fetchNewCasesDetails } from "../components/FetchData";

const Home = () => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [fetchedNewCases, setFetchedNewCases] = useState([]);


  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      setData(data);
      setShowLoading(false);
    };

    fetchApi();
  }, []);


  useEffect(() => {
    const newsFetch = async () => {
      const newCases = await fetchNewCasesDetails()
      setFetchedNewCases(newCases)
      setShowLoading(false)
    };
     newsFetch(setFetchedNewCases) 
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle color="success">Current Cases In Nepal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <NewCasesNepal fetchedNewCases={fetchedNewCases} showLoading={showLoading} />
        <Cards data={data} showLoading={showLoading} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
