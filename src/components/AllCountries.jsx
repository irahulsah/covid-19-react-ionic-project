import React, { useEffect, useState } from "react";
import { fetchCountries } from "../components/FetchData";
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const GlobalCountryList = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const countriesFetch = async () => {
      setFetchedCountries(await fetchCountries());
    };
    countriesFetch();
  }, []);

  const onSelectionChange = (selectedValue) => {
    if (selectedValue) {
      handleCountryChange(selectedValue);
    }
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem class="ion-padding">
            <IonLabel>Global Countries List</IonLabel>
            <IonSelect
              value=""
              placeholder="select your country"
              onIonChange={(e) => onSelectionChange(e.detail.value)}
            >
              {fetchedCountries.map((country, i) => (
                <IonSelectOption key={i} value={country}>
                  {country}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default GlobalCountryList;
