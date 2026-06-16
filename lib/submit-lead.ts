export type LeadPayload = {
  source: "contact_form" | "ai_assistant";
  name: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
  selectedBusinessType: string;
  selectedProblem: string;
  recommendedSolution: string;
  createdAt: string;
};

export async function submitLead(payload: LeadPayload) {
  const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || "https://hook.eu1.make.com/lpr5tt7xk2huemdesqp3y247xxwlopcs";

  console.log("[VDX] Preparing webhook submission", payload);

  if (!webhookUrl) {
    console.error("[VDX] NEXT_PUBLIC_MAKE_WEBHOOK_URL is missing");
    throw new Error("Missing webhook URL.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log("[VDX] Webhook response", {
    ok: response.ok,
    status: response.status,
    body: responseText,
  });

  if (!response.ok) {
    console.error("[VDX] Webhook submission failed", response.status, responseText);
    throw new Error("Webhook request failed.");
  }

  return responseText;
}
