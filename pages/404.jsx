export default function Custom404() {
  return (
    <div className="error-container">
      <div className="error-icon">
        <img src="/logo.png" alt="plsDonate Logo" width="120" height="120" />
      </div>
      <h1 className="error-code">404</h1>
      <p className="error-title">Page Not Found</p>
      <p className="error-description">
        Looks like this gift got lost in delivery.
        <br />
        The page you&#39;re looking for doesn&#39;t exist or has been moved.
      </p>
      <div style={{ marginTop: '1rem' }}>
        <a className="gold-button error-button" href="/">
          Back to Home
        </a>
      </div>
    </div>
  )
}
