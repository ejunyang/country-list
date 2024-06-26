import { Country } from "../types/CountryType";

interface Props {
  country: Country;
  handelSelected: (area: number) => void;
}

const CountryCard = ({ country, handelSelected }: Props) => {
  return (
    <>
      <div
        onClick={() => handelSelected(country.area)}
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
    </>
  );
};

export default CountryCard;
