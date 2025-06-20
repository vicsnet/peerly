/**
 * Formats a date in the format: Month Day, Year
 * e.g. May 31, 2025
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}