export function generateAudit(
  tool: string,
  plan: string,
  teamSize: number
) {
  let recommendation = "";
  let savings = 0;

  if (tool === "chatgpt" && plan === "team" && teamSize <= 2) {
    recommendation = "Switch to ChatGPT Plus plan";
    savings = 10;
  }

  if (tool === "cursor" && plan === "business" && teamSize <= 3) {
    recommendation = "Cursor Pro is sufficient";
    savings = 20;
  }

  return {
    recommendation,
    savings,
    annualSavings: savings * 12,
  };
}