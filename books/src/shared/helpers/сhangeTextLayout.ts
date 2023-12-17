export const сhangeTextLayout = (text: string) => {
  const replacedText = text.replace(/<br>/g, '</p><p>');
  const isWrappedInParagraphs = /^<p>[\s\S]*<\/p>$/.test(text);
  return isWrappedInParagraphs ? replacedText : `<p>${replacedText}</p>`;
};
