import { SkeletonUpper } from "./Skeletons";
import { SkeletonCard } from "./Skeletons";

export const Upper = ({ selectedCity, condition, loading }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()];

  let date = new Date().getDate();

  let year = new Date().getFullYear();

  const getImg = (condition) => {
    let text = condition.toLowerCase();

    switch (true) {
      case text.includes("sunny"):
        return <img src="/Sun.png" alt="" />;

      case text.includes("overcast"):
        return <img src="/Clouds.png" alt="" />;

      case text.includes("cloud"):
        return <img src="/Clouds.png" alt="" />;

      case text.includes("mist"):
        return <img src="/Clouds.png" alt="" />;

      case text.includes("wind"):
        return <img src="/Wind.png" alt="" />;

      case text.includes("rain"):
        return <img src="/Rain.png" alt="" />;

      case text.includes("snow"):
        return <img src="/Snow.png" alt="" />;

      case text.includes("thunderstorm"):
        return <img src="/Flash.png" alt="" />;
    }
  };

  return (
    <>
      <div className="bg-[#F9FAFB] rounded-[42px] w-[100%]  flex flex-col items-center">
        {loading ? (
          <SkeletonCard />
        ) : (
          <div className="flex px-[40px] justify-between items-center w-[100%]  mt-[56px] mb-[49px]">
            <div>
              <div className=" flex gap-[5px]">
                <h4 className="text-[18px] font-medium text-[#9CA3AF]">
                  {month}
                </h4>
                <h4 className="text-[18px] font-medium text-[#9CA3AF]">
                  {date},
                </h4>
                <h4 className="text-[18px] font-medium text-[#9CA3AF]">
                  {year}
                </h4>
              </div>

              <h3 className="text-5xl font-[600] text-[#111827]">
                {selectedCity}
              </h3>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="16"
                  cy="13"
                  r="2"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
        {loading ? (
          <SkeletonUpper />
        ) : (
          <div className="w-[260px] h-[260px]">{getImg(condition)}</div>
        )}
      </div>
    </>
  );
};
