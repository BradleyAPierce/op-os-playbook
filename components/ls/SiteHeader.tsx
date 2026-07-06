export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Layered Security header">
      <a className="brand" href="#top" aria-label="Layered Security home">
        <span className="brand-mark">LS</span>
        <span className="brand-text">
          <strong>Layered Security</strong>
          <span>Certification</span>
        </span>
      </a>
      <nav className="site-nav" aria-label="Page sections">
        <a href="#readiness">Readiness</a>
        <a href="#path">Path</a>
      </nav>
    </header>
  );
}
