import { FormData } from "@/components/ContactSection";

export async function sendEmail(data: FormData): Promise<number> {
  const apiEndpoint = "/api/email";
  
  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.status;
  } catch (err) {
    console.error("Error sending email:", err);
    
    return 500;
  }
}
