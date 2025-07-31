import { ref, watch, Ref } from 'vue'

export function useLocalStorage<T>(
  key: string, 
  initialValue: T
): { value: Ref<T>, setValue: (value: T) => void } {
  // Read from localStorage
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  const storedValue = ref<T>(readValue())

  const setValue = (value: T) => {
    try {
      storedValue.value = value
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  // Sync with localStorage on changes
  watch(storedValue, (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error(`Error syncing localStorage key "${key}":`, error)
    }
  }, { deep: true })

  return {
    value: storedValue,
    setValue
  }
}