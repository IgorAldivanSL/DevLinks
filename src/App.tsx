import { useTheme } from './hooks/useTheme'
import { profileData, linkItems, socialLinks } from './data/profile'
import { Profile } from './components/features/Profile'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { LinkButton } from './components/features/LinkButton'
import { SocialLinks } from './components/features/SocialLinks'
import './App.css'

export function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main id="container">
      <Profile profile={profileData} theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <ul className="links-list" aria-label="Links rápidos">
        {linkItems.map(item => (
          <li key={item.id}>
            <LinkButton item={item} />
          </li>
        ))}
      </ul>

      <SocialLinks links={socialLinks} />

      <footer className="footer">
        Feito com ♥ por{' '}
        <a
          href="https://github.com/IgorAldivanSL"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Igor Aldivan
        </a>
      </footer>
    </main>
  )
}

export default App
