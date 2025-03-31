import { Nav } from "./Navbar";
import { Upper } from "./RightCardUpper";
import { Temp } from "./Temperature";

export const RightCard = ({
  selectedCity,
  nightTemp,
  condition,
  loading,
  cold,
}) => {
  return (
    <>
      {" "}
      <div className="absolute bottom-[13vh] right-[8.5vw]">
        <img src="/moon.svg" alt="" />
      </div>
      <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827bf] backdrop-blur-md p-[8px] relative">
        <Upper
          selectedCity={selectedCity}
          condition={condition}
          loading={loading}
        />
        <Temp
          dayTemp={nightTemp}
          condition={condition}
          loading={loading}
          isDay={false}
        />
        <Nav />
      </div>
    </>
  );
};
