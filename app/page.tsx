import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';

function GoogleScholarMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
      <path fill="currentColor" d="M5.24 13.77 0 9.5 12 0l12 9.5-5.24 4.27A7.49 7.49 0 0 0 12 9.5a7.49 7.49 0 0 0-6.76 4.27Z" />
      <circle cx="12" cy="17" r="7" fill="currentColor" />
      <path fill="#fff" d="M12 11a6 6 0 0 0-5.67 4.04h11.34A6 6 0 0 0 12 11Z" />
    </svg>
  );
}

function GithubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

const researchAreas = [
  { number: '01', title: 'Human-centered AI', description: 'Designing intelligent systems that are useful, interpretable, and aligned with the people who rely on them.' },
  { number: '02', title: 'Multimodal learning', description: 'Learning representations across language, vision, and structured data to reason about complex real-world signals.' },
  { number: '03', title: 'Responsible systems', description: 'Studying evaluation, robustness, and the social consequences of deployed machine learning systems.' },
];

const publications = [
  { year: '2026', title: 'Your strongest research project or paper title', authors: 'Yiling Ma, Collaborator Name, Advisor Name', venue: 'Conference / Journal / Under Review', tags: ['Paper', 'Code'] },
  { year: '2025', title: 'A second project that shows research depth and independence', authors: 'Yiling Ma, Collaborator Name', venue: 'Workshop / Preprint', tags: ['Project', 'PDF'] },
  { year: '2024', title: 'An earlier study that shaped your current research direction', authors: 'Yiling Ma, Advisor Name', venue: 'Research experience / Thesis', tags: ['Summary'] },
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="profile-panel">
        <a className="wordmark" href="#top" aria-label="Back to top">YM<span>.</span></a>
        <div className="profile-content">
          <div className="portrait">
            <img src="/yiling-photo.jpeg" alt="Portrait of Yiling Ma" />
            <div className="portrait-orbit" />
          </div>
          <p className="eyebrow">Prospective PhD Student · 2027</p>
          <h1>Yiling Ma</h1>
          <p className="role">Researcher working at the intersection of <strong>machine learning</strong> and <strong>human-centered computing</strong>.</p>
          <div className="location"><MapPin size={16} aria-hidden="true" />New Haven, US, Yale University</div>
          <div className="contact-row" aria-label="Contact and academic profiles">
            <a href="mailto:yiling.ma@yale.edu" aria-label="Email Yiling Ma"><Mail size={21} aria-hidden="true" /><span>yiling.ma [at] yale.edu</span></a>
            <a href="https://scholar.google.com/citations?user=iChZAC0AAAAJ&hl=zh-CN" aria-label="Yiling Ma on Google Scholar"><GoogleScholarMark /><span>Google Scholar</span></a>
            <a href="https://github.com/" aria-label="Yiling Ma on GitHub"><GithubMark /><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/elena-ma-402a47310/" aria-label="Yiling Ma on LinkedIn"><span className="linkedin-mark" aria-hidden="true">in</span><span>LinkedIn</span></a>
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
          <p className="section-kicker">Hello, I’m Yiling Ma.</p>
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

        <footer><p>Let’s talk about research.</p><a href="mailto:yiling.ma@yale.edu">yiling.ma@yale.edu <ArrowUpRight size={18} /></a><span>© 2026 Yiling Ma</span></footer>
      </div>
    </main>
  );
}
