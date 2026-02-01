export const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center">
      <div className="min-h-screen bg-background w-full ">{children}</div>
    </main>
  );
};
