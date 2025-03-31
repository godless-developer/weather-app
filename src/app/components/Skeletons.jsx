export function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`}></div>;
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[320px] rounded-xl mt-[50px]" />
    </div>
  );
}

export function SkeletonUpper() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-[320px] rounded-xl mt-[40px]" />
    </div>
  );
}

export function SkeletonTemp() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[320px] rounded-xl mt-[20px] ml-[38px] mb-[160px]" />
    </div>
  );
}
