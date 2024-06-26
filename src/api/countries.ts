import axios from "axios";
import { Country } from "../types/CountryType";

const COUNTRY_URL = "https://restcountries.com/v3.1/all";

export const getCountry = async (): Promise<Country[] | undefined> => {
  try {
    const response = await axios.get(`${COUNTRY_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
