import { Nav } from "./Navbar";
import { NightLocation } from "./NightLoc";
import { TempR } from "./TemperatureR";

export const NightDark = ({ selectedCity, coldTemp, condition, loading }) => {
  // console.log(weatherSituationNight, "orj ireh utga");
  return (
    <>
      {" "}
      <div className="absolute bottom-[1vh] right-[8.5vw]">
        <img src="/moon.svg" alt="" />
      </div>
      <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827bf] backdrop-blur-md p-[8px] relative">
        <NightLocation
          selectedCity={selectedCity}
          condition={condition}
          loading={loading}
        />
        <TempR coldTemp={coldTemp} condition={condition} loading={loading} />
        <Nav />
      </div>
    </>
  );
};
