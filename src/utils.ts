import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function toDate(timestamp: number, formatting: string): string {
  const isUnix: boolean = timestamp.toString().length === 10;
  const ts: number = isUnix ? timestamp * 1000 : timestamp;
  return format(new Date(ts), formatting, { locale: fr });
}
