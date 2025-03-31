import { Upper } from "./LeftCardUpper";
import { Nav } from "./Navbar";
import { Temp } from "./Temperature";

export const LeftCard = ({
  selectedCity,
  dayTemp,
  condition,
  loading,
  hot,
}) => {
  return (
    <>
      <div className="absolute top-[9vh] left-[8vw]">
        <img src="/Sun.svg" alt="" />
      </div>
      <div className="w-[414px] h-[828px] rounded-[48px] bg-[#ffffff]/75 backdrop-blur-md p-[8px] relative">
        <Upper
          selectedCity={selectedCity}
          condition={condition}
          loading={loading}
        />
        <Temp
          dayTemp={dayTemp}
          condition={condition}
          loading={loading}
          isDay={true}
        />
        <Nav />
      </div>
    </>
  );
};
