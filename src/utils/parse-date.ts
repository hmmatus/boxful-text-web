import { parse } from "date-fns";

// Convert DD/MM/YYYY to a Date object
export function convertToDate(dateString: string): Date {
  return parse(dateString, "DD / MM / yyyy", new Date());
}

// Convert DD/MM/YYYY to an ISO string
export function convertToISOString(
  dateString: string,
  dateFormat: string = "dd/MM/yyyy"
): string {
  const date = parse(dateString, dateFormat, new Date());
  return date.toISOString();
}
