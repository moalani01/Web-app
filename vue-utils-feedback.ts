import type { FeedbackMessage } from '@/types/iot'
import { generateId } from './helpers'

export const createFeedbackMessage = (
  type: FeedbackMessage['type'],
  message: string,
  details?: string
): FeedbackMessage => ({
  id: generateId(),
  timestamp: new Date(),
  type,
  message,
  details
})

export const createErrorMessage = (message: string, details?: string): FeedbackMessage =>
  createFeedbackMessage('error', message, details)

export const createSuccessMessage = (message: string, details?: string): FeedbackMessage =>
  createFeedbackMessage('success', message, details)

export const createInfoMessage = (message: string, details?: string): FeedbackMessage =>
  createFeedbackMessage('info', message, details)