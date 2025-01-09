import { NightDark } from "./Night";

export const RightSide = ({ selectedCity, coldTemp, condition, loading }) => {
  return (
    <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#0F141E]">
      <NightDark
        selectedCity={selectedCity}
        coldTemp={coldTemp}
        condition={condition}
        loading={loading}
      />
    </div>
  );
};
