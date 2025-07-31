import { ref } from 'vue'
import type { FeedbackMessage } from '@/types/iot'
import { CONFIG } from '@/config/constants'

export function useFeedback() {
  const messages = ref<FeedbackMessage[]>([])

  const addMessage = (message: FeedbackMessage) => {
    messages.value = [message, ...messages.value].slice(0, CONFIG.SIMULATION.MAX_FEEDBACK_MESSAGES)
  }

  const clearMessages = () => {
    messages.value = []
  }

  return {
    messages,
    addMessage,
    clearMessages
  }
}