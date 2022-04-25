export default function textToAnchorId(text: string) {
  return text
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}
