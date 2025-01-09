import { SkeletonCardS } from "./Skeleton";

export const TempL = ({ hotTemp, condition, loading }) => {
  return (
    <>
      {loading ? (
        <SkeletonCardS />
      ) : (
        <div className=" ml-[40px]">
          <h2 className="text-[104px] h-[197px] font-[700] text-gradient  text-gray-900 ">
            {hotTemp}°C
          </h2>
          <h4 className="text-[24px] text-[#FF8E27] mb-[48px]">{condition}</h4>
        </div>
      )}
    </>
  );
};
