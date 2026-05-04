import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { 
  Sun, Moon, Monitor, Book, Rocket, Settings, 
  Terminal, Code, FileText 
} from 'lucide-react'

function CustomThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const cycleTheme = () => {
    if (theme === 'system') setTheme('dark')
    else if (theme === 'dark') setTheme('light')
    else setTheme('system')
  }

  const renderIcon = () => {
    if (theme === 'dark') return <Moon size={18} />
    if (theme === 'light') return <Sun size={18} />
    return <Monitor size={18} />
  }

  return (
    <button
      className="custom-theme-switch"
      onClick={cycleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        cursor: 'pointer',
        color: 'inherit',
        background: 'transparent',
        border: 'none',
      }}
      title={`Theme: ${theme}`}
    >
      {renderIcon()}
    </button>
  )
}

const iconMap = {
  '/': <Book size={18} />,
  '/getting-started': <Rocket size={18} />,
  '/configuration': <Settings size={18} />,
  '/commands': <Terminal size={18} />,
  '/api': <Code size={18} />,
}

export default {
  logo: (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="/logo.png" width="34" height="34" alt="plsDonate Logo" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '0.9' }}>
        <span className="logo-text" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          plsDonate
        </span>
        <span className="logo-text" style={{ fontWeight: 500, fontSize: '10px', opacity: 0.8, marginLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Documentation
        </span>
      </div>
    </div>
  ),
  project: {
    link: 'https://github.com/satusattr/plsDonate',
  },
  navbar: {
    extraContent: <CustomThemeSwitch />,
  },
  sidebar: {
    titleComponent({ title, route, active }) {
      const icon = iconMap[route] || <FileText size={18} />
      
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            color: active ? '#666666' : '#888888',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            transform: active ? 'scale(1.1)' : 'scale(1)',
            opacity: active ? 1 : 0.7
          }}>
            {icon}
          </span>
          <span style={{ 
            fontWeight: active ? 600 : 400 
          }}>
            {title}
          </span>
        </div>
      )
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  breadcrumb: false,
  main: ({ children }) => (
    <>
      {children}
    </>
  ),
  themeSwitch: {
    component: null, // Disable default sidebar theme switch
  },
  docsRepositoryBase: 'https://github.com/satusattr/plsDonate-Docs/blob/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="plsDonate Documentation" />
      <meta property="og:description" content="Official documentation for the plsDonate Minecraft PaperMC Plugin." />
      <meta property="og:image" content="/banner.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.png" />
    </>
  ),
  footer: {
    component: null
  },
  primaryHue: 0,
}
