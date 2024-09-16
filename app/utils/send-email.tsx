import { FormData } from "@/components/ContactSection";

export function sendEmail(data: FormData): Promise<number> {
  const apiEndpoint = "/api/email";
  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      return 500;
    });
  }
