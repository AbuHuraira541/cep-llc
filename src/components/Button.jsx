import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

// Reusable button. Renders a <Link> if `to` is given, otherwise a <button>.
export default function Button({
  to,
  href,
  variant = 'primary', // 'primary' | 'outline' | 'dark-outline'
  onClick,
  type = 'button',
  withArrow = false,
  block = false,
  className = '',
  children,
}) {
  const classes = `btn btn-${variant} ${block ? 'btn-block' : ''} ${className}`.trim()
  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrow-right" size={16} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
