import { SkeletonTemp } from "./Skeletons";

export const Temp = ({ dayTemp, condition, loading, isDay }) => {
  return (
    <>
      {loading ? (
        <SkeletonTemp />
      ) : (
        <div className=" ml-[40px]">
          <h2
            className={`text-[104px] h-[197px] font-[700] text-gradient  ${
              isDay ? "text-gray-900" : "text-white"
            }  `}
          >
            {dayTemp}°C
          </h2>
          <h4 className="text-[24px] text-[#FF8E27] mb-[48px]">{condition}</h4>
        </div>
      )}
    </>
  );
};
