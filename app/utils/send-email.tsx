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

    // Return the response status
    return res.status;
  } catch (err) {
    console.error("Error sending email:", err);
    
    // Return 500 if there was an error
    return 500;
  }
}
