import { useEffect, useState } from "react";
import "./App.css";
import CountryList from "./component/CountryList";
import { Country } from "./types/CountryType";
import { getCountry } from "./api/countries";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

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

  const sortedCounries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const handelSelected = (area: number): void => {
    setCountries(
      countries.map((country: Country) =>
        country.area === area
          ? { ...country, isFavorite: !country.isFavorite }
          : country
      )
    );
  };

  return (
    <>
      <h1 className="block text-center text-2xl m-5 font-bold">
        Favorite Countries
      </h1>
      <div className="flex justify-center w-[1080px] mx-auto">
        <CountryList
          countries={countries.filter((country: Country) => country.isFavorite)}
          handelSelected={handelSelected}
        />
      </div>

      <h1 className="block text-center text-2xl m-5 font-bold">Countries</h1>
      <div className="flex justify-center w-[1080px] mx-auto">
        <CountryList
          countries={sortedCounries.filter(
            (country: Country) => !country.isFavorite
          )}
          handelSelected={handelSelected}
        />
      </div>
    </>
  );
}

export default App;
