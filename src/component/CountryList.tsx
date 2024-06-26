import CountryCard from "./CountryCard";
import { Country } from "../types/CountryType";

interface Props {
  countries: Country[];
  handelSelected: (area: number) => void;
}

const CountryList = ({ countries, handelSelected }: Props) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-5 p-0 m-0 list-none">
      {countries.map((country: Country, index) => {
        return (
          <CountryCard
            key={index}
            country={country}
            handelSelected={handelSelected}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
