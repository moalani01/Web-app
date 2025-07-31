import { ref } from 'vue'
import { CONFIG } from '@/config/constants'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  const initTheme = () => {
    const stored = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) as Theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    theme.value = stored || (prefersDark ? 'dark' : 'light')
    applyTheme(theme.value)
  }

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, newTheme)
    applyTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
    initTheme
  }
}