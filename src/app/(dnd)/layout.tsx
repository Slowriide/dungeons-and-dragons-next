import { TopMenu } from "@/components/TopMenu";

export default function DndLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen mx-auto ">
      <TopMenu />
      <div className="mx-auto max-w-7xl">
        <div className=" px-0 sm:px-10">{children}</div>
      </div>
    </main>
  );
}
