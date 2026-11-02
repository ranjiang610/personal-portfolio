import React from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { profile, projects, skills, type Project } from './data';
import './styles.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Arrow({ left = false }: { left?: boolean }) { return <svg className="arrow-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d={left ? 'M14 9H4m0 0 4-4M4 9l4 4' : 'M4 9h10m0 0-4-4m4 4-4 4'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function ExternalIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function ContactIcon({ label }: { label: string }) { const src: Record<string, string> = { '手机': 'contact-phone.svg', '站酷主页': 'contact-website.svg', '微信公众号': 'contact-wechat.svg', '邮箱': 'contact-email.svg' }; return <img className="contact-icon" src={`/assets/${src[label] || src['站酷主页']}`} alt="" width="24" height="24"/>; }
function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) { return <div className="section-title" id={id}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>; }
function Button({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) { return <button className={`pill-button ${className}`} onClick={onClick}>{children}<Arrow /></button>; }
function projectHref(p: Project) { return p.externalUrl || `/projects/${p.id}`; }
function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) { return <a className={`project-card ${featured ? 'project-card-featured' : ''}`} href={projectHref(project)} target={project.externalUrl ? '_blank' : undefined} rel={project.externalUrl ? 'noopener noreferrer' : undefined}><div className="project-image"><img src={project.image} alt={project.title}/></div><div className="project-copy">{featured && <div className="project-kicker"><span className="number-badge">{project.number}</span><span>{project.eyebrow}</span></div>}<div className="project-main"><h3>{project.title}</h3><p>{project.summary}</p></div><div className="card-footer"><span>{project.category}</span><span className="circle-arrow"><Arrow /></span></div></div></a>; }

function Home() {
  const root = React.useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copiedContact, setCopiedContact] = React.useState<string | null>(null);
  const copyContact = async (label: string, value: string) => { await navigator.clipboard.writeText(value); setCopiedContact(label); window.setTimeout(() => setCopiedContact(null), 1800); };
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-line-first', { autoAlpha: 0, x: -80, duration: .7 })
      .from('.hero-line-second', { autoAlpha: 0, x: 80, duration: .7 }, '<.12')
      .from('.hero-intro > *', { autoAlpha: 0, y: 28, duration: .48, stagger: .09 }, '-=.25');
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => gsap.from(el, { autoAlpha: 0, y: 40, duration: .58, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    gsap.utils.toArray<HTMLElement>('.project-card,.skill-card').forEach((el) => gsap.from(el, { autoAlpha: 0, y: 34, duration: .5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  }, { scope: root });
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); };
  return <div ref={root} className="site home">
    <header className="site-header"><div className="header-inner"><a className="brand" href="/"><img src="/assets/rj-monogram.svg" alt=""/><span>{profile.englishName}</span></a><nav className="desktop-nav" aria-label="主导航"><button onClick={() => goTo('top')}>首页</button><button onClick={() => goTo('resume')}>简历</button><button onClick={() => goTo('work')}>作品</button><button onClick={() => goTo('contact')}>联系</button></nav><button className="language-switch" aria-label="语言切换">中 / EN</button><button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? '关闭菜单' : '打开菜单'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button></div>{menuOpen && <nav className="mobile-menu" aria-label="手机导航">{[['首页','top'],['简历','resume'],['作品','work'],['联系','contact']].map(([label,id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}</nav>}</header>{menuOpen && <button type="button" className="menu-backdrop" aria-label="关闭菜单" onClick={() => setMenuOpen(false)} />}
    <main><section className="hero" id="top"><div className="hero-background"/><div className="hero-inner"><h1><span className="hero-line-first">WELCOME TO</span><span className="hero-line-second">MY PORTFOLIO</span></h1><div className="hero-intro"><div><h2>{profile.name} / {profile.englishName}</h2><Button onClick={() => goTo('work')}>查看我的作品</Button></div><p>{profile.intro}</p></div></div></section>
      <section className="resume section-shell" id="resume"><div className="resume-heading reveal"><SectionTitle eyebrow="PROFILE SNAPSHOT" title="简历速览"/><div className="strengths">{profile.strengths.map(x => <span key={x}>{x}</span>)}</div></div><div className="resume-about reveal"><div className="portrait"><img src="/assets/portrait.png" alt="人物肖像"/></div><div className="about-copy"><h3><img className="section-marker" src="/assets/section-marker.svg" alt=""/> 关于我</h3>{profile.capabilities.map(item => <div className="about-row" key={item.title}><h4>{item.title}</h4><p>{item.body}</p></div>)}<Button className="resume-download" onClick={() => window.alert('演示简历尚未上传，后续可在数据文件中配置 PDF。')}>下载 PDF 简历</Button></div></div><div className="resume-list reveal"><h3><img className="section-marker" src="/assets/section-marker.svg" alt=""/> 工作经历</h3><div className="experience-heading"><strong>{profile.experience.company}</strong><span>{profile.experience.position}</span><small>{profile.experience.period}</small></div><p>{profile.experience.description}</p></div><div className="resume-list reveal"><h3><img className="section-marker" src="/assets/section-marker.svg" alt=""/> 项目经历</h3>{profile.history.map(item => <div className="history-row" key={item.title}><div><strong>{item.title}</strong><span>{item.tags}</span></div><p>{item.description}</p></div>)}</div></section>
      <section className="work section-shell" id="work"><div className="reveal"><SectionTitle eyebrow="SELECTED WORK" title="项目精选"/></div><div className="projects"><ProjectCard project={projects[0]} featured/><div className="project-grid">{projects.slice(1).map(p => <ProjectCard key={p.id} project={p}/>)}</div></div><div className="skills-heading reveal"><h2>自写 Skill</h2><p>为 AI 编程助手编写的技能包，把一件事的最佳做法沉淀成可复用的指令，让 Agent 一次学会、次次做好。</p></div><div className="skill-grid">{skills.map(s => <article className="skill-card" key={s.number}><div><span className="skill-number">{s.number}</span><h3>{s.title}</h3><p>{s.summary}</p></div><div className="card-footer"><span>{s.tag}</span><span className="circle-arrow"><Arrow /></span></div></article>)}</div></section>
      <section className="contact section-shell" id="contact"><div className="reveal"><SectionTitle eyebrow="CONTACT" title="期待与你合作"/></div><div className="contact-grid">{profile.contacts.map(c => <article className="contact-card" key={c.label}><span className="contact-label"><ContactIcon label={c.label}/>{c.label}</span><strong>{c.value}</strong><button className="contact-copy" onClick={() => copyContact(c.label, c.value)} aria-label={`复制${c.label}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor"/><path d="M3 11H2V2h9v1" stroke="currentColor"/></svg>{copiedContact === c.label ? "已复制" : "复制"}</button></article>)}</div></section>
    </main></div>;
}

function Detail({ id }: { id: string }) { const project = projects.find(p => p.id === id); if (!project) return <div className="detail"><div className="detail-top"><a className="back-button" href="/"><Arrow left/>返回首页</a></div><main className="detail-content"><h1>没有找到这个作品</h1></main></div>; return <div className="detail"><div className="detail-top"><a className="back-button" href="/"><Arrow left/>返回</a></div><main className="detail-content"><h1>{project.title}</h1><div className="detail-images">{project.detailImages.map((img, i) => <div className="detail-placeholder" key={i} style={{ aspectRatio: img.ratio }}>{img.src && <img src={img.src} alt={img.alt}/>} {!img.src && <span>示例图片比例</span>}</div>)}</div></main></div>; }

function App() { const match = location.pathname.match(/^\/projects\/([^/]+)\/?$/); if (match) return <Detail id={match[1]}/>; return location.pathname === '/' ? <Home/> : <div className="detail"><div className="detail-top"><a className="back-button" href="/"><Arrow left/>返回首页</a></div><main className="detail-content"><h1>页面不存在</h1></main></div>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);



