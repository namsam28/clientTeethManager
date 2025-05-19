export function formatDotDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  const shortYear = year.slice(2);
  return `${shortYear}.${month}.${day}`;
}
