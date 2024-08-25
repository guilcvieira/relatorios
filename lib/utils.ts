import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateWithoutTimezone(date: string) {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}