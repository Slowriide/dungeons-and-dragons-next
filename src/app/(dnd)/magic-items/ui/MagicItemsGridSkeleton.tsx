export const MagicItemsGridSkeleton = () => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-40 rounded-xl bg-muted animate-pulse" />
      ))}
    </div>
  );
};
