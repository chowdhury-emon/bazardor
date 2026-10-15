import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="shadow-panel space-y-5 rounded-lg bg-transparent p-4">
      <Skeleton className="h-32 rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-3 w-2/5 rounded-lg" />
      </div>
    </div>
  )
}