import avatarDark from '../assets/avatar.png'
import avatarLight from '../assets/avatar-light.png'

export interface ProfileData {
  name: string
  handle: string
  avatarDark: string
  avatarLight: string
  avatarAlt: {
    dark: string
    light: string
  }
}

export interface LinkItem {
  id: string
  title: string
  url: string
  target?: '_blank' | '_self'
}

export interface SocialLinkItem {
  id: string
  name: string
  url: string
  ariaLabel: string
  icon: 'logo-github' | 'logo-instagram' | 'logo-youtube' | 'logo-linkedin'
}

export const profileData: ProfileData = {
  name: 'Igor Aldivan',
  handle: '@igoraldivan',
  avatarDark,
  avatarLight,
  avatarAlt: {
    dark: 'Foto de perfil de Igor Aldivan em tema escuro, usando óculos escuros e jaqueta preta.',
    light: 'Foto de perfil de Igor Aldivan em tema claro, sorrindo e usando jaqueta preta.'
  }
}

export const linkItems: LinkItem[] = [
  {
    id: 'github-projects',
    title: 'Acessar meu GitHub',
    url: 'https://github.com/IgorAldivanSL',
    target: '_blank'
  },
  {
    id: 'linkedin-connect',
    title: 'Conectar no LinkedIn',
    url: 'https://www.linkedin.com/in/igor-aldivansl',
    target: '_blank'
  },
  {
    id: 'portfolio',
    title: 'Ver meu portfólio',
    url: 'https://github.com/IgorAldivanSL',
    target: '_blank'
  },
  {
    id: 'contact',
    title: 'Entrar em contato',
    url: 'https://www.linkedin.com/in/igor-aldivansl',
    target: '_blank'
  }
]

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/IgorAldivanSL',
    ariaLabel: 'Acessar perfil no GitHub de Igor Aldivan',
    icon: 'logo-github'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/igor-aldivansl',
    ariaLabel: 'Acessar perfil no LinkedIn de Igor Aldivan',
    icon: 'logo-linkedin'
  }
]
