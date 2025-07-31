import type { MessageField } from '@/types/iot'

export interface ValidationResult {
  isValid: boolean
  missingFields: string[]
}

export const validateFormData = (
  fields: MessageField[], 
  formData: Record<string, any>
): ValidationResult => {
  const missingFields: string[] = []
  
  for (const field of fields) {
    if (field.required) {
      const value = formData[field.name]
      if (value === undefined || value === null || value === '') {
        missingFields.push(field.label)
      }
    }
  }
  
  return {
    isValid: missingFields.length === 0,
    missingFields
  }
}