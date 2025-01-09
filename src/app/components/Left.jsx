import { DayLight } from "./Day";

export const LeftSide = ({ selectedCity, hotTemp, condition, loading }) => {
  return (
    <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#F3F4F6]">
      <DayLight
        selectedCity={selectedCity}
        hotTemp={hotTemp}
        condition={condition}
        loading={loading}
      />
    </div>
  );
};
