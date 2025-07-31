import { reactive, readonly } from 'vue'
import type { Toast } from '@/types/iot'
import { CONFIG } from '@/config/constants'

// Global state for toasts
const state = reactive<{ toasts: Toast[] }>({
  toasts: []
})

let count = 0
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

export function useToast() {
  const toast = (options: Omit<Toast, 'id'>) => {
    const id = (++count).toString()
    
    const newToast: Toast = {
      ...options,
      id,
      duration: options.duration || CONFIG.TOAST.DURATION
    }

    // Add new toast and limit to configured amount
    state.toasts = [newToast, ...state.toasts].slice(0, CONFIG.TOAST.LIMIT)
    
    // Auto dismiss after duration
    const timeout = setTimeout(() => {
      dismiss(id)
    }, newToast.duration)
    
    toastTimeouts.set(id, timeout)

    return { id, dismiss: () => dismiss(id) }
  }

  const dismiss = (toastId?: string) => {
    if (toastId) {
      // Clear specific toast
      const timeout = toastTimeouts.get(toastId)
      if (timeout) {
        clearTimeout(timeout)
        toastTimeouts.delete(toastId)
      }
      state.toasts = state.toasts.filter(t => t.id !== toastId)
    } else {
      // Clear all toasts
      toastTimeouts.forEach(timeout => clearTimeout(timeout))
      toastTimeouts.clear()
      state.toasts = []
    }
  }

  return {
    toasts: readonly(state.toasts),
    toast,
    dismiss
  }
}