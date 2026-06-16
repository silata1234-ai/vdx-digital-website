import { ChatbotDemo } from "@/components/chatbot-demo";
import { Contact } from "@/components/contact";

export default function AIAssistantPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <ChatbotDemo />
      <Contact variant="home" />
    </main>
  );
}
