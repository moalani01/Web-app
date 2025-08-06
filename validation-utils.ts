import type { MessageField } from '@/types/iot'

export interface ValidationResult {
  isValid: boolean
  missingFields: string[]
}

export const validateFormData = (
  fields: MessageField[], 
  formData: Record<string, any>
): ValidationResult => {
  console.log('Validation: Checking fields:', fields.length)
  console.log('Validation: FormData received:', formData)
  
  const missingFields: string[] = []
  
  for (const field of fields) {
    // Skip fields that are not visible due to dependencies
    if (field.dependsOn && field.showWhen !== undefined) {
      const dependentValue = formData[field.dependsOn]
      const shouldShow = Array.isArray(field.showWhen) 
        ? field.showWhen.includes(dependentValue)
        : dependentValue === field.showWhen
        
      if (!shouldShow) {
        console.log(`Validation: Skipping field "${field.name}" - not visible`)
        continue
      }
    }
    
    if (field.required) {
      const value = formData[field.name]
      console.log(`Validation: Checking field "${field.name}", value:`, value, 'type:', typeof value)
      
      if (field.type === 'table') {
        // Special validation for table fields
        if (!value || !Array.isArray(value) || value.length === 0) {
          console.log(`Validation: Table field "${field.name}" is missing or empty!`)
          missingFields.push(field.label)
        } else {
          // Check if all required cells in the table have values
          const hasEmptyRequiredCells = value.some(row => 
            field.columns?.some(col => {
              const cellValue = row[col.name]
              return cellValue === undefined || cellValue === null || cellValue === ''
            })
          )
          if (hasEmptyRequiredCells) {
            console.log(`Validation: Table field "${field.name}" has empty cells!`)
            missingFields.push(`${field.label} (incomplete rows)`)
          }
        }
      } else if (value === undefined || value === null || value === '') {
        console.log(`Validation: Field "${field.name}" is missing!`)
        missingFields.push(field.label)
      }
    }
  }
  
  return {
    isValid: missingFields.length === 0,
    missingFields
  }
}