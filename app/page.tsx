import { ChatbotDemo } from "@/components/chatbot-demo";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { ProblemSection } from "@/components/problem-section";
import { Services } from "@/components/services";
import { WhyChooseMe } from "@/components/why-choose-me";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Hero />
      <ProblemSection />
      <Services preview />
      <Portfolio preview />
      <ChatbotDemo preview />
      <WhyChooseMe />
      <Contact variant="home" />
    </main>
  );
}
