import axios from "axios";

const url = "https://nepalcorona.info/api/v1/data/nepal";
const newsUrl = "https://nepalcorona.info/api/v1/news";
const GlobalUrl = "https://covid19.mathdro.id/api";
const newCasesUrl = 'https://nepalcorona.info/api/v1/data/world';

export const fetchData = async () => {
  try {
    const {
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
    } = await axios.get(url);
    return {
      tested_positive,
      tested_negative,
      tested_total,
      quarantined,
      tested_rdt,
      pending_result,
      recovered,
      deaths,
      updated_at,
    };
  } catch (error) {}
};

export const fetchNews = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(newsUrl);
    return data;
  } catch (error) {
      return error;
  }
};

export const fetchGlobalCases = async (country) => {
  let changeableUrl = GlobalUrl;
  if (country) {
    changeableUrl = `${GlobalUrl}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
      return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${GlobalUrl}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
      return error;
  }
};
export const fetchNewCasesDetails = async () => {
  try {
    const {data} = await axios.get(newCasesUrl);
    return data
  } catch (error) {
      console.log(error)
  }
};
