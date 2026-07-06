const repoBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook" : "";

const microsites = [
  {
    href: `${repoBase}/site/`,
    title: "MKM Solutions",
    description: "The migrated MKM Solutions microsite."
  },
  {
    href: `${repoBase}/ls/`,
    title: "Layered Security",
    description: "Layered Security certification splash page."
  }
];

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", padding: "48px" }}>
      <h1>OP-OS Playbook Microsites</h1>
      <ul>
        {microsites.map((site) => (
          <li key={site.href} style={{ marginBottom: "16px" }}>
            <a href={site.href}>{site.title}</a>
            <p>{site.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
