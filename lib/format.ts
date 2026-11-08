export function formatDate(date: string): string {
  return date.replaceAll("-", ".");
}

export function formatYear(date: string): string {
  return date.slice(0, 4);
}
