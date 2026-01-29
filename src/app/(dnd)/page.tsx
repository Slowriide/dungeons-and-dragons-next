import { Header } from "@/components/home/Header";
import { SectionCardsGrid } from "@/components/home/SectionCardsGrid";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <SectionCardsGrid />
    </div>
  );
}
