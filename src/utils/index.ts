export function parseLinks(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(
    urlRegex,
    (link) => `<a class="link" href="${link}">${link}</a>`
  );
}
