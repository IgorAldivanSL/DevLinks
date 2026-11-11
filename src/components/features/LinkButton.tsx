import React from 'react'
import type { LinkItem } from '../../data/profile'
import './LinkButton.css'

interface LinkButtonProps {
  item: LinkItem
}

export const LinkButton: React.FC<LinkButtonProps> = ({ item }) => {
  const isExternal = item.target === '_blank'

  return (
    <a
      href={item.url}
      target={item.target || '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="link-button"
    >
      {item.title}
    </a>
  )
}
