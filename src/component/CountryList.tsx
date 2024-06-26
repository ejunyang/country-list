import CountryCard from "./CountryCard";
import { Country } from "../types/CountryType";

interface Props {
  title: string;
  countries: Country[] | undefined;
  onToggle(area: number): void;
}

const CountryList = ({ title, countries, onToggle }: Props) => {
  const sortedCounries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  return (
    <>
      <h1 className="block text-center text-2xl m-5 font-bold">{title}</h1>
      <div className="flex justify-center w-[1080px] mx-auto">
        {countries ? (
          <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-5 p-0 m-0 list-none">
            {sortedCounries?.map((country: Country, index: number) => (
              <CountryCard key={index} country={country} onToggle={onToggle} />
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
