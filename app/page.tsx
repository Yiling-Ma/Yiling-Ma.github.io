import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';

function GoogleScholarMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
      <path fill="currentColor" d="M12 3.25 1.5 8.7 12 14.16 22.5 8.7 12 3.25Z" />
      <path fill="currentColor" d="M5.6 11.5v4.12c1.5 1.44 3.72 2.22 6.4 2.22s4.9-.78 6.4-2.22V11.5L12 14.82 5.6 11.5Z" />
      <path fill="currentColor" d="M20.32 10.1v5.46h1.45V9.35l-1.45.75Z" />
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

function ResearchLensIcon() {
  return (
    <svg className="research-icon" aria-hidden="true" viewBox="0 0 74 74">
      <path className="research-icon-ring" d="M34.2 7.8c14.9 0 26.5 11.3 26.5 25.8 0 14.9-11.8 26-26.5 26.2C19 60 7.9 48.7 7.7 34.2 7.5 19.3 19.2 8 34.2 7.8Z" />
      <path className="research-icon-handle" d="M54 54.2c4.6 4.2 8.7 8.2 13.1 12.9" />
      <path className="research-icon-bulb" d="M34.5 18.5c8.7.2 15.1 6.5 15 14.7-.1 5.3-2.6 9.7-6.8 12.6-1.8 1.2-2.4 2.9-2.4 5.3H28.8c0-2.4-.7-4-2.5-5.3-4.1-2.9-6.4-7.2-6.4-12.4 0-8.4 6.2-14.8 14.6-14.9Z" />
      <path className="research-icon-filament" d="M26.6 35.1h15.8M34.5 24.8v10.3" />
      <path className="research-icon-base" d="M28.1 56.2h12.8M29.8 61.1h9.7" />
    </svg>
  );
}

function TeachingIcon() {
  return (
    <svg className="teaching-icon" aria-hidden="true" viewBox="0 0 92 92">
      <path className="teaching-icon-book" d="M16 20.5c12.2-1.9 21.2.6 30 7.1v43.8c-8.6-6.1-18.7-8.6-30-6.9V20.5Z" />
      <path className="teaching-icon-book" d="M76 20.5c-12.2-1.9-21.2.6-30 7.1v43.8c8.6-6.1 18.7-8.6 30-6.9V20.5Z" />
      <path className="teaching-icon-line" d="M27 32.5c4.6.2 8.7 1.2 12.7 3.1M27 43.2c4.7.4 8.7 1.4 12.7 3.1M53 35.6c3.9-1.9 8-2.9 12-3.1M53 46.3c4-1.7 8-2.7 12-3.1" />
      <path className="teaching-icon-spark" d="M46 10.5v7.2M42.4 14.1h7.2M74.2 10.7l1.9 5.5 5.4 1.9-5.4 1.9-1.9 5.4-1.9-5.4-5.4-1.9 5.4-1.9 1.9-5.5Z" />
    </svg>
  );
}

function YaleTeachingMark() {
  return (
    <div className="yale-teaching-mark" aria-hidden="true">
      <span>Y</span>
    </div>
  );
}

const researchAreas = [
  {
    title: 'Trustworthy LLMs & Research Reasoning',
    tags: 'Post-training · Process Evaluation · Faithfulness',
    question: 'How can we make model outputs not only stronger, but reliably grounded in the right evidence, scope, and reasoning process?',
    hint: 'show/hide work on grounding LLM outputs in evidence, scope, and faithful reasoning processes.',
    work: 'ActReview · RbtAct · IdeaAmbig · IdeaAnchor · Scope-Fidelity Verifier',
  },
  {
    title: 'Multimodal Medical AI',
    tags: 'Medical VLMs · RAG · Imaging · Longitudinal Health Data',
    question: 'How can AI systems integrate visual, textual, and temporal biomedical signals without losing clinically critical evidence?',
    hint: 'show/hide work on integrating visual, textual, and longitudinal biomedical evidence.',
    work: 'Adaptive RAG for CT report generation · medical VLM evidence dependency · structural MRI for AD/ADRD · wearable glucose forecasting',
  },
  {
    title: 'Computational Biomedicine',
    tags: 'Single-Cell Learning · Cancer Detection · Biological Representation Learning',
    question: 'How can representation learning capture structure that is both clinically useful and biologically meaningful?',
    hint: 'show/hide work on clinically useful and biologically meaningful representation learning.',
    work: 'single-cell aptamer liquid biopsy · gene regulatory networks and causal representation learning · maximum-entropy graph modeling',
  },
];

const teachingItems = [
  {
    role: 'Course Manager',
    course: 'S&DS 2410: Probability Theory',
    term: 'Fall 2026',
  },
  {
    role: 'Teaching Fellow',
    course: 'EMPH 542: Intro to Health Informatics',
    term: 'Summer 2026',
  },
  {
    role: 'Teaching Fellow',
    course: 'S&DS 2300: Data Exploration and Analysis',
    term: 'Spring 2026',
  },
  {
    role: 'Teaching Fellow',
    course: 'CHNS.1420.UMB',
    term: 'Spring 2026',
  },
  {
    role: 'Teaching Fellow',
    course: 'CHNS.1320.UMB',
    term: 'Fall 2025',
  },
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
          <p className="role degree-role"><span>MS Biostatistics</span><span>Yale University</span></p>
          <div className="location"><MapPin size={16} aria-hidden="true" />New Haven, US</div>
          <div className="contact-row" aria-label="Contact and academic profiles">
            <a href="mailto:yiling.ma@yale.edu" aria-label="Email Yiling Ma"><Mail size={21} aria-hidden="true" /><span>yiling.ma [at] yale.edu</span></a>
            <a href="https://scholar.google.com/citations?user=iChZAC0AAAAJ&hl=zh-CN" aria-label="Yiling Ma on Google Scholar"><GoogleScholarMark /><span>Google Scholar</span></a>
            <a href="https://github.com/" aria-label="Yiling Ma on GitHub"><GithubMark /><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/elena-ma-402a47310/" aria-label="Yiling Ma on LinkedIn"><span className="linkedin-mark" aria-hidden="true">in</span><span>LinkedIn</span></a>
          </div>
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          <a href="#about">About me</a><a href="#research">Research</a><a href="#teaching">Teaching</a><a href="#experience">Experience</a>
        </nav>
        <p className="panel-note">Open to PhD opportunities beginning Fall 2027.</p>
      </aside>

      <div className="content-panel" id="top">
        <section className="intro-section" id="about">
          <div className="intro-copy">
            <p>I am a master’s student in the Department of Biostatistics at Yale University, where I work with <a href="https://scholar.google.com/citations?user=baI7IY0AAAAJ&hl=en">Prof. Arman Cohan</a> and <a href="https://scholar.google.com/citations?user=eAM84HQAAAAJ&hl=en">Dr. Manasi Patwardhan</a> on LLMs for research at the <a href="https://nlp.cs.yale.edu/">Yale NLP Lab</a>.</p>
            <p>I have also worked with <a href="https://vllab.ucmerced.edu//">VLLab @ UC Merced</a>, <a href="https://www.ai4biomedlab.org/research/">AI4Biomed Lab</a>, <a href="https://www.gersteinlab.org/">Gerstein Lab</a>, <a href="https://www.oist.jp/research/research-units/cse">OIST CSE</a>, the University of Florida, Saudi Aramco, New York University Shanghai, <a href="https://en.zhejianglab.com/collaboration/aiforvirology/scholarlibrary/202312/t20231208_3684.shtml">Zhejiang Lab</a>, and <a href="https://www.wisbot.ai/">Wisbot</a> (startup). I appreciate the opportunity to collaborate with distinguished professors and researchers from these institutions.</p>
          </div>
          <div className="status-line"><span className="status-dot" />Currently: finishing my thesis and preparing PhD applications.</div>
        </section>

        <section className="content-section" id="research">
          <div className="section-heading research-heading"><ResearchLensIcon /><h2>Research interests</h2></div>
          <p className="research-statement">My research sits at the intersection of trustworthy language models, multimodal medical AI, and computational biomedicine. I am especially interested in building systems that reason over evidence, know when to retrieve or abstain, and remain reliable in high-stakes biomedical settings.</p>
          <div className="research-list">
            {researchAreas.map((area) => (
              <details className="research-item" key={area.title}>
                <summary>
                  <span className="research-summary-text">
                    <span>
                      <span className="research-title">{area.title}:</span>
                      <span className="research-tags">{area.tags}</span>
                    </span>
                    <span className="research-toggle">→ {area.hint}</span>
                  </span>
                </summary>
                <p className="research-question"><strong>Question:</strong> {area.question}</p>
                <p><strong>Selected work:</strong> {area.work}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="content-section teaching-section" id="teaching">
          <div className="section-heading teaching-heading"><TeachingIcon /><h2>Teaching</h2></div>
          <div className="teaching-layout">
            <YaleTeachingMark />
            <div className="teaching-list">
              {teachingItems.map((item) => (
                <article className="teaching-item" key={`${item.role}-${item.course}`}>
                  <p><span>{item.role},</span> <strong>{item.course}</strong>, {item.term}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="publications">
          <div className="section-heading"><span>03</span><h2>Selected work</h2><p>A small set of projects with clear research contributions.</p></div>
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
          <div className="section-heading"><span>04</span><h2>Experience</h2><p>Education and research appointments.</p></div>
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
