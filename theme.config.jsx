import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

function CustomThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="custom-theme-switch" style={{ width: 36, height: 36 }} />

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
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/satusattr/plsDonate" target="_blank">
          plsDonate Documentation
        </a>
        .
      </span>
    )
  },
  primaryHue: 355,
}
