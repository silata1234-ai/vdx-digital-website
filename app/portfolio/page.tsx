import { Contact } from "@/components/contact";
import { Portfolio } from "@/components/portfolio";

export default function PortfolioPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Portfolio />
      <Contact variant="home" />
    </main>
  );
}
