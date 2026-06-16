import { ChatbotDemo } from "@/components/chatbot-demo";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { ProblemSection } from "@/components/problem-section";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { WhyChooseMe } from "@/components/why-choose-me";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="overflow-x-clip">
        <Hero />
        <ProblemSection />
        <Services />
        <Portfolio />
        <ChatbotDemo />
        <Process />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
