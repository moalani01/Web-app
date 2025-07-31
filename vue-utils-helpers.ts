// Utility functions for general use
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

export const randomDelay = (min: number, max: number): Promise<void> =>
  delay(min + Math.random() * (max - min))

export const generateId = (): string => Date.now().toString()

// Text utility functions
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const shouldTruncate = (text: string, maxLength: number): boolean => 
  text.length > maxLength