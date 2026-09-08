import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from 'lucide-react';

const researchAreas = [
  { number: '01', title: 'Human-centered AI', description: 'Designing intelligent systems that are useful, interpretable, and aligned with the people who rely on them.' },
  { number: '02', title: 'Multimodal learning', description: 'Learning representations across language, vision, and structured data to reason about complex real-world signals.' },
  { number: '03', title: 'Responsible systems', description: 'Studying evaluation, robustness, and the social consequences of deployed machine learning systems.' },
];

const publications = [
  { year: '2026', title: 'Your strongest research project or paper title', authors: 'Your Name, Collaborator Name, Advisor Name', venue: 'Conference / Journal / Under Review', tags: ['Paper', 'Code'] },
  { year: '2025', title: 'A second project that shows research depth and independence', authors: 'Your Name, Collaborator Name', venue: 'Workshop / Preprint', tags: ['Project', 'PDF'] },
  { year: '2024', title: 'An earlier study that shaped your current research direction', authors: 'Your Name, Advisor Name', venue: 'Research experience / Thesis', tags: ['Summary'] },
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="profile-panel">
        <a className="wordmark" href="#top" aria-label="Back to top">YN<span>.</span></a>
        <div className="profile-content">
          <div className="portrait" role="img" aria-label="Profile photo placeholder">
            <span>YN</span><div className="portrait-orbit" />
          </div>
          <p className="eyebrow">Prospective PhD Student · 2027</p>
          <h1>Your Name</h1>
          <p className="role">Researcher working at the intersection of <strong>machine learning</strong> and <strong>human-centered computing</strong>.</p>
          <div className="location"><MapPin size={16} aria-hidden="true" />City, Country · University Name</div>
          <div className="contact-row" aria-label="Contact and academic profiles">
            <a href="mailto:you@example.edu" aria-label="Email"><Mail size={19} /></a>
            <a href="https://github.com/" aria-label="GitHub"><Code2 size={19} /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a>
            <a href="https://scholar.google.com/" aria-label="Google Scholar"><GraduationCap size={20} /></a>
          </div>
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#experience">Experience</a>
        </nav>
        <p className="panel-note">Open to PhD opportunities beginning Fall 2027.</p>
      </aside>

      <div className="content-panel" id="top">
        <header className="topbar">
          <span>Research portfolio</span>
          <a href="#publications">Selected work <ArrowDownRight size={17} /></a>
        </header>
        <section className="intro-section" id="about">
          <p className="section-kicker">Hello, I’m Your Name.</p>
          <h2>I ask how intelligent systems can <em>understand people</em>—and how people can understand them in return.</h2>
          <div className="intro-copy">
            <p>I am currently a [degree] student at [University], advised by [Advisor]. My research focuses on [your core research question], with an emphasis on building systems that are rigorous, transparent, and grounded in real needs.</p>
            <p>I plan to pursue a PhD to study [specific direction]. I’m especially interested in working with groups exploring [area one], [area two], and [area three].</p>
          </div>
          <div className="status-line"><span className="status-dot" />Currently: finishing my thesis and preparing PhD applications.</div>
        </section>

        <section className="content-section" id="research">
          <div className="section-heading"><span>01</span><h2>Research interests</h2><p>The questions that connect my work.</p></div>
          <div className="research-list">
            {researchAreas.map((area) => (
              <article className="research-item" key={area.number}>
                <span>{area.number}</span><div><h3>{area.title}</h3><p>{area.description}</p></div><ArrowUpRight size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="publications">
          <div className="section-heading"><span>02</span><h2>Selected work</h2><p>A small set of projects with clear research contributions.</p></div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-year">{publication.year}</div>
                <div><h3>{publication.title}</h3><p className="authors">{publication.authors}</p><p className="venue">{publication.venue}</p><div className="publication-links">{publication.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <div className="section-heading"><span>03</span><h2>Experience</h2><p>Education and research appointments.</p></div>
          <div className="timeline">
            <article><span>2024 — Present</span><BookOpen size={20} aria-hidden="true" /><div><h3>Research Assistant · Lab Name</h3><p>University Name</p><p>One sentence on the question, method, and outcome of your current work.</p></div></article>
            <article><span>2022 — 2024</span><GraduationCap size={20} aria-hidden="true" /><div><h3>Degree in Your Field</h3><p>University Name</p><p>Thesis: “Your thesis title.” Advisor: Professor Name.</p></div></article>
          </div>
        </section>

        <footer><p>Let’s talk about research.</p><a href="mailto:you@example.edu">you@example.edu <ArrowUpRight size={18} /></a><span>© 2026 Your Name</span></footer>
      </div>
    </main>
  );
}
