import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-neutral-700" />
      )}
    </button>
  )
}
