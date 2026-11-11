import React from 'react'
import type { ProfileData } from '../../data/profile'
import './Profile.css'

interface ProfileProps {
  profile: ProfileData
  theme: 'dark' | 'light'
}

export const Profile: React.FC<ProfileProps> = ({ profile, theme }) => {
  const isDark = theme === 'dark'
  const avatarSrc = isDark ? profile.avatarDark : profile.avatarLight
  const avatarAlt = isDark ? profile.avatarAlt.dark : profile.avatarAlt.light

  return (
    <header className="profile-container" id="profile">
      <img
        src={avatarSrc}
        alt={avatarAlt}
        className="profile-avatar"
        width={112}
        height={112}
        loading="eager"
      />
      <h1 className="profile-handle">{profile.handle}</h1>
    </header>
  )
}
