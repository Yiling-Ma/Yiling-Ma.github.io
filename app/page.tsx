import {
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

function AboutIcon() {
  return (
    <svg className="about-icon" aria-hidden="true" viewBox="0 0 92 92">
      <path className="about-icon-frame" d="M20 17.5c16.5-2.1 35.1-2 51.8 0 2.1 18.2 2 36.9-.1 55.1-16.2 2.1-35.5 2.1-51.7 0-2.1-17.9-2.1-37 .1-55.1Z" />
      <path className="about-icon-face" d="M46 28.1c7.1 0 12.6 5.5 12.6 12.3 0 7.1-5.6 12.5-12.6 12.5s-12.5-5.4-12.5-12.5c0-6.9 5.5-12.3 12.5-12.3Z" />
      <path className="about-icon-shoulders" d="M26.7 68.5c3.3-8.7 10.1-13.1 19.4-13.1 9.2 0 16.1 4.4 19.3 13.1" />
      <path className="about-icon-spark" d="M73.5 28.5l1.5 4.4 4.4 1.5-4.4 1.5-1.5 4.4-1.6-4.4-4.3-1.5 4.3-1.5 1.6-4.4Z" />
    </svg>
  );
}

function PublicationsIcon() {
  return (
    <svg className="publications-icon" aria-hidden="true" viewBox="0 0 92 92">
      <path className="publications-icon-page publications-icon-back" d="M31 14.5h34.5l9.8 10.1v47.8H31V14.5Z" />
      <path className="publications-icon-page" d="M18.5 24.2h38.7l10 10.2v43.1H18.5V24.2Z" />
      <path className="publications-icon-fold" d="M57.2 24.2v10.2h10" />
      <path className="publications-icon-line" d="M29.8 44.7h25.5M29.8 55.3h25.5M29.8 65.8h17.9" />
      <path className="publications-icon-spark" d="M70.7 12.5v6.3M67.6 15.6h6.2" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg className="paw-icon" aria-hidden="true" viewBox="0 0 92 92">
      <path className="paw-icon-toe" d="M24.4 28.6c3.7-1 7.6 1.8 8.8 6.4 1.2 4.5-.8 8.9-4.5 9.9-3.7 1-7.6-1.8-8.9-6.4-1.2-4.6.9-8.9 4.6-9.9Z" />
      <path className="paw-icon-toe" d="M42.6 19.7c3.9-.3 7.3 3.4 7.7 8.2.4 4.8-2.4 8.9-6.3 9.2-3.8.3-7.3-3.4-7.7-8.2-.4-4.8 2.4-8.9 6.3-9.2Z" />
      <path className="paw-icon-toe" d="M61.6 28.6c3.7 1 5.8 5.3 4.6 9.9-1.3 4.6-5.2 7.4-8.9 6.4-3.7-1-5.7-5.4-4.5-9.9 1.2-4.6 5.1-7.4 8.8-6.4Z" />
      <path className="paw-icon-toe" d="M74.5 45.7c3.1 2 3.4 6.7.7 10.7-2.6 4-7.2 5.6-10.3 3.6-3.1-2-3.4-6.8-.7-10.8 2.6-3.9 7.2-5.5 10.3-3.5Z" />
      <path className="paw-icon-pad" d="M47.2 45.3c8.8.3 19.5 11.8 18.9 20.1-.4 5.8-6 8.5-12.5 6.6-3.1-.9-5-1.6-8.5-1.6-3.5 0-5.4.7-8.5 1.6-6.5 1.9-12.1-.8-12.5-6.6-.6-8.3 10.3-19.8 19.1-20.1 1.2 0 2.7 0 4 0Z" />
      <path className="paw-icon-spark" d="M74.7 18.5v6M71.7 21.5h6" />
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
    <img className="yale-teaching-mark" src="/yale-bulldog-transparent.png" alt="Yale University" />
  );
}

const researchAreas = [
  {
    title: '1. Trustworthy LLMs & Reasoning',
    tags: '',
    question: 'How can we make model outputs not only stronger, but reliably grounded in the right evidence, scope, and reasoning process?',
    hint: 'show/hide interest in faithful, evidence-grounded language model reasoning.',
    description: 'I am interested in developing language models that can reason over complex evidence, recognize uncertainty or ambiguity, and produce outputs that are faithful to the underlying information rather than merely plausible.',
  },
  {
    title: '2. Multimodal AI for X',
    tags: '',
    question: 'How can AI systems connect language, vision, temporal signals, and structured data to support reasoning in complex real-world domains?',
    hint: 'show/hide interest in connecting heterogeneous evidence across modalities.',
    description: 'I am interested in multimodal models that integrate heterogeneous evidence, such as text, images, videos, and longitudinal signals, especially in scientific and medical settings where important information is distributed across different data sources.',
  },
  {
    title: '3. Self-Improvement',
    tags: '',
    question: 'How can AI systems learn to improve their own reasoning, feedback, and decision-making over time?',
    hint: 'show/hide interest in feedback, memory, and iterative refinement.',
    description: 'I am interested in models that can benefit from feedback, memory, external knowledge, and iterative refinement, moving from one-shot generation toward systems that can diagnose their own weaknesses and become more reliable through interaction.',
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
  {
    title: 'Beyond the Embedding Bottleneck: Adaptive Retrieval-Augmented 3D CT Report Generation',
    authors: ['Renjie Liang', 'Yiling Ma', 'Yang Xing', 'Zhengkang Fan', 'Jinqian Pan', 'Chengkun Sun', 'Li Li', 'Kuang Gong', 'Jie Xu'],
    venue: '',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2603.15822' }],
  },
  {
    title: 'RbtAct: Rebuttal as Supervision for Actionable Review Feedback Generation',
    authors: ['Sihong Wu', 'Yiling Ma', 'Yilun Zhao', 'Tiansheng Hu', 'Owen Jiang', 'Manasi Patwardhan', 'Arman Cohan'],
    venue: 'ACL 2026',
    links: [{ label: 'Paper', href: 'https://aclanthology.org/2026.findings-acl.1696/' }],
  },
  {
    title: 'Can AI Be a Good Peer Reviewer? A Survey of Peer Review Process, Evaluation, and the Future',
    authors: ['Sihong Wu', 'Owen Jiang', 'Yilun Zhao', 'Tiansheng Hu', 'Yiling Ma', 'Kaiyan Zhang', 'Manasi Patwardhan', 'Arman Cohan'],
    venue: 'ACL 2026',
    links: [{ label: 'Paper', href: 'https://aclanthology.org/2026.acl-long.1504/' }],
  },
  {
    title: 'A Systematic Review of Deep Learning and Machine Learning Applications in Longitudinal Multimodal Clinical Data',
    authors: ['Jinqian Pan', 'Tienyu Chang', 'Mengxian Lyu', 'Weimin Meng', 'Qingyu Wang', 'Yiling Ma', 'Ziyi Chen', 'Xiaohan Li', 'Chengkun Sun', 'Renjie Liang', 'Jennifer Fishe', 'Jie Xu'],
    venue: 'Journal of Healthcare Informatics Research, 2026',
    links: [{ label: 'Paper', href: 'https://link.springer.com/article/10.1007/s41666-026-00248-6' }],
  },
  {
    title: 'Bridging Gene Regulatory Networks and Causal Representation Learning in Single-Cell Genomics Data',
    authors: ['Vincenzo Lagani', 'Giorgi Sokhadze', 'Liliia Nigmetzianova', 'Robert Lehmann', 'Yiling Ma', 'Sumeer Khan', 'Xabier Martínez de Morentin', 'Narsis Kiani', 'Mikel Hernaez', 'Alexander A Lukyanov', 'Jesper Tegnér', 'David Gomez-Cabrero'],
    venue: 'ICML 2026',
    links: [{ label: 'Project Page', href: 'https://icml.cc/virtual/2026/70801' }],
  },
  {
    title: 'Low-light image and video enhancement: A comprehensive survey and beyond',
    authors: ['Shen Zheng', 'Yiling Ma', 'Jinqian Pan', 'Changjie Lu', 'Gaurav Gupta'],
    venue: '',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2212.10772' }],
  },
];

const furFamily = [
  { name: 'Oreo', gender: 'male', photo: '/fur-oreo.jpeg' },
  { name: '小呆', gender: 'male', photo: '/fur-xiaodai.jpeg' },
  { name: 'Ferrari', gender: 'male', photo: '/fur-ferrari.jpeg' },
  { name: 'Mercedes', gender: 'female', photo: '/fur-mercedes.jpeg' },
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
          <p className="profile-slogan">“Done is Perfect!”</p>
        </div>
      </aside>

      <div className="content-panel" id="top">
        <section className="intro-section" id="about">
          <div className="section-heading about-heading"><AboutIcon /><h2>About me</h2></div>
          <div className="intro-copy">
            <p>I am a master’s student in the Department of Biostatistics at Yale University, where I work with <a href="https://scholar.google.com/citations?user=baI7IY0AAAAJ&hl=en">Prof. Arman Cohan</a> and <a href="https://scholar.google.com/citations?user=eAM84HQAAAAJ&hl=en">Dr. Manasi Patwardhan</a> on LLMs for research at the <a href="https://nlp.cs.yale.edu/">Yale NLP Lab</a>.</p>
            <p>I have also worked with <a href="https://vllab.ucmerced.edu//">VLLab @ UC Merced</a>, <a href="https://www.ai4biomedlab.org/research/">AI4Biomed Lab</a>, <a href="https://www.gersteinlab.org/">Gerstein Lab</a>, <a href="https://www.oist.jp/research/research-units/cse">OIST CSE</a>, the University of Florida, Saudi Aramco, New York University Shanghai, <a href="https://en.zhejianglab.com/collaboration/aiforvirology/scholarlibrary/202312/t20231208_3684.shtml">Zhejiang Lab</a>, and <a href="https://www.wisbot.ai/">Wisbot</a> (startup). I appreciate the opportunity to collaborate with distinguished professors and researchers from these institutions.</p>
          </div>
          <div className="status-line"><span className="status-dot" />Currently: finishing my thesis and preparing PhD applications.</div>
        </section>

        <section className="content-section" id="research">
          <div className="section-heading research-heading"><ResearchLensIcon /><h2>Research interests</h2></div>
          <p className="research-statement">My research focuses on building reliable AI systems that can reason over evidence, integrate information across modalities, and improve through feedback and interaction. I am especially interested in language and multimodal models for scientific and high-stakes decision-making, where models must be not only capable, but also grounded, transparent, and adaptive.</p>
          <div className="research-list">
            {researchAreas.map((area) => (
              <details className="research-item" key={area.title}>
                <summary>
                  <span className="research-summary-text">
                    <span>
                      <span className="research-title">{area.title}:</span>
                      {area.tags ? <span className="research-tags">{area.tags}</span> : null}
                    </span>
                    <span className="research-toggle">→ {area.hint}</span>
                  </span>
                </summary>
                <p className="research-question"><strong>Question:</strong> {area.question}</p>
                <p>{area.description}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="content-section publications-section" id="publications">
          <div className="section-heading publications-heading"><PublicationsIcon /><h2>Selected Publications</h2></div>
          <div className="selected-publication-list">
            {publications.map((publication, publicationIndex) => (
              <article className="selected-publication" key={`${publication.title}-${publicationIndex}`}>
                <h3>{publication.title}</h3>
                <p className="publication-authors">
                  {publication.authors.map((author, authorIndex) => (
                    <span key={`${author}-${authorIndex}`}>
                      {author === 'Yiling Ma' ? <strong>{author}</strong> : author}
                      {authorIndex < publication.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                {publication.venue ? <p className="publication-venue">{publication.venue}</p> : null}
                <p className="selected-publication-links">
                  {publication.links.map((link) => (
                    link.href
                      ? <a href={link.href} key={link.label}>{link.label}</a>
                      : <span key={link.label}>{link.label}</span>
                  ))}
                </p>
              </article>
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

        <section className="content-section fur-section" id="fur-family">
          <div className="section-heading fur-heading">
            <PawIcon />
            <h2>Fur Family</h2>
          </div>
          <div className="fur-grid" aria-label="Yiling Ma's cats">
            {furFamily.map((cat) => (
              <article className="fur-card" key={cat.name}>
                <img src={cat.photo} alt={`${cat.name}, ${cat.gender}`} />
                <div>
                  <h3>{cat.name}</h3>
                  <p>{cat.gender}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <nav className="footer-nav" aria-label="Main navigation">
            <a href="#about">About me</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#teaching">Teaching</a><a href="#fur-family">Fur Family</a>
          </nav>
          <p className="footer-note">Open to PhD opportunities beginning Fall 2027.</p>
          <span>Last updated: Sep 2026 · © Yiling Ma</span>
        </footer>
      </div>
    </main>
  );
}
