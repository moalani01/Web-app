export interface MessageField {
  name: string
  label: string
  type: 'text' | 'number' | 'dropdown' | 'boolean' | 'radio'
  options?: string[]
  required?: boolean
  defaultValue?: any
}

export interface MessageType {
  id: string
  name: string
  description: string
  fields: MessageField[]
}

export interface FeedbackMessage {
  id: string
  timestamp: Date
  type: 'success' | 'error' | 'info'
  message: string
  details?: string
}

export interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'destructive' | 'info'
  duration?: number
}