import { Country } from "../types/CountryType";

type Props = {
  country: Country;
  onToggle(area: number): void;
};

const CountryCard = ({ country, onToggle }: Props) => {
  return (
    <>
      {!country.isFavorite && (
        <div
          onClick={() => onToggle(country.area)}
          className="bg-white rounded-lg p-5 text-center transition-all duration-300 ease-in-out hover:bg-[#dddddd] hover:cursor-pointer"
        >
          <p className="h-[150px]">
            <img
              src={country.flags.png}
              alt={`${country.name.common}`}
              className="w-[100%] h-[100%]"
            />
          </p>

          <p className="text-xl font-bold my-2">{country.name.common}</p>
          <p>{country.region}</p>
        </div>
      )}

      {country.isFavorite && (
        <div
          onClick={() => onToggle(country.area)}
          className="bg-white rounded-lg p-5 text-center transition-all duration-300 ease-in-out hover:bg-[#dddddd] hover:cursor-pointer"
        >
          <p className="h-[150px]">
            <img
              src={country.flags.png}
              alt={`${country.name.common}`}
              className="w-[100%] h-[100%]"
            />
          </p>

          <p className="text-xl font-bold my-2">{country.name.common}</p>
          <p>{country.region}</p>
        </div>
      )}
    </>
  );
};

export default CountryCard;