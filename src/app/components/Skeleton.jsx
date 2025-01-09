export function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`}></div>;
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[320px] rounded-xl mt-[50px]" />
      {/* <div className="space-y-2">
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-5 w-[250px]" />
          <Skeleton className="h-4 w-[280px]" />
        </div>
        <Skeleton className="h-[205px] w-[400px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-4 w-[300px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div> */}
    </div>
  );
}

export function SkeletonCardB() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-[320px] rounded-xl mt-[40px]" />
    </div>
  );
}

export function SkeletonCardS() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[320px] rounded-xl mt-[20px] ml-[38px] mb-[160px]" />
    </div>
  );
}
