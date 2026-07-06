import Link from "next/link";

export default function Site2PilotHome() {
  return (
    <main className="site2-pilot-banner" style={{ minHeight: "100vh", textAlign: "left" }}>
      <div style={{ margin: "0 auto", maxWidth: 760, padding: "80px 24px" }}>
        <p style={{ marginBottom: 12, textTransform: "uppercase", fontWeight: 700 }}>
          Site2 Pilot
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginBottom: 24 }}>
          MKM Solutions Next.js conversion pilot
        </h1>
        <p style={{ color: "rgba(255,255,255,.78)", fontSize: "1.15rem", lineHeight: 1.6 }}>
          This pilot converts three explicit legacy routes into a static Next.js App Router
          project while preserving the original visual assets and page content.
        </p>
        <ul style={{ display: "grid", gap: 12, listStyle: "none", margin: "32px 0 0", padding: 0 }}>
          <li>
            <Link href="/pages/index/">Portfolio index</Link>
          </li>
          <li>
            <Link href="/pages/core/cloud/device-management/">Device management</Link>
          </li>
          <li>
            <Link href="/pages/data-document-security/layered-security/">
              Layered security
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
