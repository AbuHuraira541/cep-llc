// A tiny hand-rolled icon set so the project has zero icon-library dependency.
// Add more cases here any time you need a new icon.
export default function Icon({ name, size = 22, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
    className,
  }

  switch (name) {
    case 'calculator':
      return (
        <svg {...common}>
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <line x1="7" y1="6" x2="17" y2="6" />
          <line x1="7" y1="11" x2="7" y2="11.01" />
          <line x1="12" y1="11" x2="12" y2="11.01" />
          <line x1="17" y1="11" x2="17" y2="11.01" />
          <line x1="7" y1="15" x2="7" y2="15.01" />
          <line x1="12" y1="15" x2="12" y2="15.01" />
          <line x1="17" y1="15" x2="17" y2="18" />
          <line x1="7" y1="19" x2="7" y2="19.01" />
          <line x1="12" y1="19" x2="12" y2="19.01" />
        </svg>
      )
    case 'ruler':
      return (
        <svg {...common}>
          <rect x="2.5" y="8" width="19" height="8" transform="rotate(-15 12 12)" />
          <line x1="7" y1="9" x2="8" y2="12" />
          <line x1="11" y1="8" x2="12" y2="11" />
          <line x1="15" y1="7" x2="16" y2="10" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <polygon points="12,3 21,8 12,13 3,8" />
          <polyline points="3,13 12,18 21,13" />
          <polyline points="3,17.5 12,22.5 21,17.5" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <line x1="4" y1="20" x2="20" y2="20" />
          <rect x="6" y="12" width="3" height="8" />
          <rect x="11" y="7" width="3" height="13" />
          <rect x="16" y="3" width="3" height="17" />
        </svg>
      )
    case 'hardhat':
      return (
        <svg {...common}>
          <path d="M4 16c0-5 3.5-9 8-9s8 4 8 9" />
          <line x1="2" y1="16" x2="22" y2="16" />
          <line x1="12" y1="4" x2="12" y2="7" />
        </svg>
      )
    case 'document':
      return (
        <svg {...common}>
          <path d="M6 2h9l4 4v16H6z" />
          <polyline points="15,2 15,6 19,6" />
          <line x1="9" y1="12" x2="16" y2="12" />
          <line x1="9" y1="16" x2="16" y2="16" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <polyline points="4,13 9,18 20,6" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      )
    case 'chevron-down':
      return (
        <svg {...common}>
          <polyline points="5,8 12,15 19,8" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common}>
          <line x1="4" y1="12" x2="19" y2="12" />
          <polyline points="13,6 19,12 13,18" />
        </svg>
      )
    case 'upload':
      return (
        <svg {...common}>
          <polyline points="7,9 12,4 17,9" />
          <line x1="12" y1="4" x2="12" y2="15" />
          <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" />
          <polyline points="3,6 12,13 21,6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-3z" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12,7 12,12 16,14" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
        </svg>
      )
    default:
      return null
  }
}
