export function getResponseText(isSent: number, language: string) {
  switch (language) {
    case "FR":
      switch (isSent) {
        case 0:
          return "";
        case 200:
          return "Message envoyé :)";
        case 500:
          return "échec d'envoi, veuillez réessayer.";
        default:
          return "";
      }
    case "EN":
      switch (isSent) {
        case 0:
          return "";
        case 200:
          return "Message sent :)";
        case 500:
          return "Error sending, please try again.";
        default:
          return "";
      }
    default:
      return "";
  }
}


export function getButtonText(language: string, ModalSent: number) {
  switch (language) {
    case "FR":
      switch (ModalSent) {
        case 0:
          return "Envoyer";
        case 200:
          return "Message envoyé";
        case 500:
          return "échec d'envoi, veuillez réessayer.";
        default:
          return "";
      }
    case "EN":
      switch (ModalSent) {
        case 0:
          return "Send";
        case 200:
          return "Message sent";
        case 500:
          return "Error sending";
        default:
          return "";
      }
    default:
      return "";
  }
}