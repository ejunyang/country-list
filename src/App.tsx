import { useEffect, useState } from "react";
import "./App.css";
import CountryList from "./component/CountryList";
import { Country } from "./types/CountryType";
import { getCountry } from "./api/countries";

function App() {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountry();
        setCountries(data);
      } catch (error) {
        console.error("데이터를 가지고오지 못했습니다.");
      }
    };

    fetchData();
  }, []);

  const onToggle = (area: number) => {
    setCountries(
      countries?.map((country) =>
        country.area === area
          ? { ...country, isFavorite: !country.isFavorite }
          : country
      )
    );
  };

  const defaultCountry = countries?.filter((country) => !country.isFavorite);
  const favoriteCountry = countries?.filter((country) => country.isFavorite);

  return (
    <>
      <CountryList
        title="Favorite Countries"
        countries={favoriteCountry}
        onToggle={onToggle}
      />
      <CountryList
        title="Countries"
        countries={defaultCountry}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
