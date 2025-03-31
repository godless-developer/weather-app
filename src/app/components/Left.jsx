import { LeftCard } from "./LeftCard";

export const LeftSide = ({ selectedCity, dayTemp, condition, loading }) => {
  return (
    <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#F3F4F6]">
      <LeftCard
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        condition={condition}
        loading={loading}
      />
    </div>
  );
};
