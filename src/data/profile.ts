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
  name: 'Mayk Brito',
  handle: '@maykbrito',
  avatarDark,
  avatarLight,
  avatarAlt: {
    dark: 'Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta sobre fundo gradiente roxo e azul.',
    light: 'Foto de Mayk Brito sorrindo, sem óculos e com jaqueta preta sobre fundo gradiente roxo e azul.'
  }
}

export const linkItems: LinkItem[] = [
  {
    id: 'nlw',
    title: 'Inscrever-se no NLW',
    url: '#',
    target: '_self'
  },
  {
    id: 'ebook',
    title: 'Baixar meu e-book',
    url: '#',
    target: '_self'
  },
  {
    id: 'portfolio',
    title: 'Ver meu portfólio',
    url: 'https://github.com/maykbrito',
    target: '_blank'
  },
  {
    id: 'explorer',
    title: 'Conheça o Explorer',
    url: 'https://rocketseat.com.br/explorer',
    target: '_blank'
  }
]

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/maykbrito',
    ariaLabel: 'Acessar perfil no GitHub',
    icon: 'logo-github'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/maykbrito',
    ariaLabel: 'Acessar perfil no Instagram',
    icon: 'logo-instagram'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/maykbrito',
    ariaLabel: 'Acessar canal no YouTube',
    icon: 'logo-youtube'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/maykbrito',
    ariaLabel: 'Acessar perfil no LinkedIn',
    icon: 'logo-linkedin'
  }
]
