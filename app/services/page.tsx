import { Contact } from "@/components/contact";
import { Process } from "@/components/process";
import { Services } from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Services />
      <Process />
      <Contact variant="home" />
    </main>
  );
}
