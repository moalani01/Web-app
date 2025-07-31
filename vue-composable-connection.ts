import { ref, onMounted, onUnmounted } from 'vue'
import { CONFIG } from '@/config/constants'

export function useConnectionStatus() {
  const isConnected = ref(false)
  let intervalId: ReturnType<typeof setInterval> | null = null

  const checkConnection = () => {
    // Simulate connection status
    isConnected.value = Math.random() < CONFIG.SIMULATION.CONNECTION_SUCCESS_RATE
  }

  onMounted(() => {
    checkConnection()
    intervalId = setInterval(checkConnection, CONFIG.SIMULATION.CONNECTION_CHECK_INTERVAL)
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  return isConnected
}