export const openWhatsApp = (phone: string, message?: string) => {
  const url = `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  window.open(url, "_blank");
};
