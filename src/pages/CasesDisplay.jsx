import React, { useState, useEffect } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  
} from "@ionic/react";
import { fetchGlobalCases } from "../components/FetchData";
import GlobalCard from "../components/GlobalCard";
import GlobalCountryList from "../components/AllCountries";

const GlobalData = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  const [showLoading, setShowLoading] = useState(true);

  const casesApi = async (countryName) => {
    const response = await fetchGlobalCases(countryName);
    setData(response);
    setShowLoading(false)
  };

  useEffect(() => {
    casesApi(country);
  }, [country]);

  const handleCountryChange = (receivedCountry) => {
    setCountry(receivedCountry);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle color="success">Global Cases</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <GlobalCountryList handleCountryChange={handleCountryChange} />
        <GlobalCard data={data} country={country} showLoading={showLoading} />
      </IonContent>
    </IonPage>
  );
};

export default GlobalData;
