import { IconContext } from 'react-icons'
import { BiMailSend } from 'react-icons/bi'
import { DiGithubAlt } from 'react-icons/di'
import { AiOutlineGitlab } from 'react-icons/ai'
import { useCallback } from 'react'

const components = {
  mail: BiMailSend,
  github: DiGithubAlt,
  gitlab: AiOutlineGitlab,
}

const SocialIcon = ({ kind, href }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <IconContext.Provider value={{ size: '2em' }}>
        <SocialSvg />
      </IconContext.Provider>
    </a>
  )
}

export default SocialIcon
