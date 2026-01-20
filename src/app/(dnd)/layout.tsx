import { TopMenu } from "@/components/TopMenu";

export default function DndLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen mx-auto mb-10">
      <TopMenu />
      <div className="mx-auto max-w-7xl">
        <div className="px-0">{children}</div>
      </div>
    </main>
  );
}
