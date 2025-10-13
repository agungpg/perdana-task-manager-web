import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines clsx + tailwind-merge
 * - clsx handles conditional logic
 * - tailwind-merge resolves class conflicts
 */
export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs))
}
