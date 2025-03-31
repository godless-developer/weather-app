import { RightCard } from "./RightCard";

export const RightSide = ({ selectedCity, nightTemp, condition, loading }) => {
  return (
    <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#0F141E]">
      <RightCard
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        condition={condition}
        loading={loading}
      />
    </div>
  );
};
