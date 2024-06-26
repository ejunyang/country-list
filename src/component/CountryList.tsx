import CountryCard from "./CountryCard";
import { Country } from "../types/CountryType";
import { useEffect, useState } from "react";
import { getCountry } from "../api/countries";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [seletedCountries, setSeletedCountries] = useState<Country[]>([]);

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

  const handleSeleted = (country: Country): void => {
    if (
      !seletedCountries.find(
        (seletedCountry: Country) =>
          seletedCountry.name.common === country.name.common
      )
    ) {
      setSeletedCountries([...seletedCountries, country]);
    } else {
      setSeletedCountries(
        seletedCountries.filter(
          (seletedCountry: Country) =>
            seletedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <>
      <h1 className="block text-center text-2xl m-5 font-bold">
        Favorite Countries
      </h1>
      <div className="flex justify-center w-[1080px] mx-auto">
        {countries ? (
          <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-5 p-0 m-0 list-none">
            {seletedCountries?.map((country: Country, index: number) => (
              <CountryCard
                key={index}
                country={country}
                handleSeleted={handleSeleted}
              />
            ))}
          </ul>
        ) : (
          <div>⏳ 로딩중입니다</div>
        )}
      </div>

      <h1 className="block text-center text-2xl m-5 font-bold">Countries</h1>
      <div className="flex justify-center w-[1080px] mx-auto">
        {countries ? (
          <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-5 p-0 m-0 list-none">
            {sortedCounries?.map((country: Country, index: number) => (
              <CountryCard
                key={index}
                country={country}
                handleSeleted={handleSeleted}
              />
            ))}
          </ul>
        ) : (
          <div>⏳ 로딩중입니다</div>
        )}
      </div>
    </>
  );
};

export default CountryList;
