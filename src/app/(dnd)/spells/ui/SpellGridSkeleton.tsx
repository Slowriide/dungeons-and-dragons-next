export const SpellsGridSkeleton = () => {
  return (
    <div className="lg:col-span-3 space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-24 rounded-md bg-muted animate-pulse" />
      ))}
    </div>
  );
};
