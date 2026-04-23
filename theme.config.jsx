export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
  docsRepositoryBase: 'https://github.com/satusattr/plsDonate-Docs/blob/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="plsDonate" />
    </>
  ),
  primaryHue: 355,
}
