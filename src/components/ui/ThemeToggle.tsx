import React from 'react'
import { Sun, MoonStars } from '@phosphor-icons/react'
import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark'

  return (
    <div className="switch-wrapper">
      <button
        type="button"
        id="switch"
        role="switch"
        aria-checked={!isDark}
        aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
        onClick={onToggle}
        className={`switch-button ${isDark ? 'dark' : 'light'}`}
      >
        <span className="switch-thumb">
          {isDark ? (
            <MoonStars size={16} weight="fill" color="#000000" aria-hidden="true" />
          ) : (
            <Sun size={16} weight="bold" color="#000000" aria-hidden="true" />
          )}
        </span>
        <span className="switch-track" aria-hidden="true" />
      </button>
    </div>
  )
}
