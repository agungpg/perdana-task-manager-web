import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines clsx + tailwind-merge
 * - clsx handles conditional logic
 * - tailwind-merge resolves class conflicts
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
