export const splitTitleSmart = (text: string) => {
  const words = text.trim().split(" ").filter(Boolean);

  if (words.length === 0) {
    return { title: "", subtitle: "" };
  }

  if (words.length === 1) {
    return { title: "", subtitle: words[0] };
  }

  const subtitleWords = words.slice(-2);
  const titleWords = words.slice(0, -2);

  return {
    title: titleWords.join(" "),
    subtitle: subtitleWords.join(" "),
  };
};
