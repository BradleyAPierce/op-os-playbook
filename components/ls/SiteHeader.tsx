const kmAcademyLogoUrl =
  "https://raw.githubusercontent.com/BradleyAPierce/op-os-images/2f90237d6b0cfda8d9edb533b6b19241404ca991/KMA-blk.svg";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Layered Security header">
      <a className="brand" href="#top" aria-label="Layered Security home">
        <span className="brand-mark brand-mark--logo">
          <img src={kmAcademyLogoUrl} alt="KM Academy" />
        </span>
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
