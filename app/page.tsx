"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bot, Check, ChevronRight, Globe2, Menu, MessageCircle, Phone, Sparkles, Workflow, X, Zap } from "lucide-react";

import { InquiryButton } from "@/components/phone-inquiry";
import { Modal } from "@/components/modal";

const services = [
  { icon: Globe2, title: "Уебсайтове", text: "Бързи и ясни сайтове, които печелят доверие и водят към запитване." },
  { icon: Workflow, title: "Бизнес автоматизации", text: "Свързани форми, таблици, известия и процеси без повтаряща се ръчна работа." },
  { icon: Bot, title: "AI асистенти", text: "Асистенти на български, които отговарят, ориентират и събират контакти." },
  { icon: Zap, title: "Системи за запитвания", text: "Всяко ново запитване се записва и стига до правилния човек навреме." },
];

const packages = [
  { name: "Старт", note: "За силно онлайн присъствие", features: ["До 5 ключови секции", "Мобилен дизайн", "Контактни действия", "Основна SEO настройка"] },
  { name: "Растеж", note: "Сайт + система за запитвания", featured: true, features: ["Всичко от Старт", "Форма и база за запитвания", "Автоматични известия", "AI консултант или калкулатор"] },
  { name: "Автоматизация", note: "За конкретен работен процес", features: ["Анализ на процеса", "Свързване на използваните инструменти", "Автоматични действия", "Тест и предаване"] },
];

const projects = [
  { type: "Реален проект", title: "NUVÉ Beauty Salon", subtitle: "Премиум сайт за салон за красота", problem: "Услуги, екип и контакти без ясно дигитално представяне.", result: "Елегантен мобилен сайт с услуги, галерия, карта и директни действия за записване.", href: "https://www.nuve-beauty.com/", accent: "nuve" },
  { type: "Демо система", title: "ELMAN HVAC", subtitle: "Поток за сервизни запитвания", problem: "Заявките могат да се изгубят между обаждания, чатове и бележки.", result: "Форма → Google Sheets → незабавно известие, с ясен статус на всяка заявка.", accent: "hvac" },
  { type: "Демо концепция", title: "AI асистент за ресторант", subtitle: "Първи контакт без чакане", problem: "Повтарящи се въпроси за меню, работно време и резервации.", result: "Асистент, който отговаря веднага и насочва клиента към резервация или контакт.", accent: "ai" },
];

const businessExamples: Record<string, string> = {
  "Салон / студио": "Пример: услуги → заявка за час → известие до салона. Часът се потвърждава от екипа.",
  "Ресторант / заведение": "Пример: меню и работно време → заявка за резервация → потвърждение от заведението.",
  "Сервиз / услуги": "Пример: описание на проблема → запис в таблица → известие и статус на заявката.",
  "Медицински кабинет": "Пример: информация за услугите → заявка за обаждане, без събиране на медицински данни.",
  "Друг бизнес": "Започваме с един процес: ново запитване → запис → известие → последващ контакт.",
};

const answers: Record<string, { title: string; text: string; package: string }> = {
  "Нямам сайт": { title: "Започнете със силна дигитална основа", text: "Подходящ е кратък сайт, който обяснява услугата Ви и превръща посещението в обаждане или запитване.", package: "Пакет Старт" },
  "Изпускам запитвания": { title: "Нужна Ви е система, не още един канал", text: "Ще съберем формите и известията в ясен поток, така че всяко запитване да остава записано и видимо.", package: "Пакет Растеж" },
  "Следя всичко ръчно": { title: "Автоматизирайте повтарящите се стъпки", text: "Най-добрият старт е един конкретен процес с много ръчна работа — записване, известяване или последващ контакт.", package: "Пакет Автоматизация" },
  "Отговарям бавно": { title: "AI асистентът може да поеме първия контакт", text: "Клиентите ще получават отговор на честите въпроси веднага, а важните заявки ще стигат до Вас.", package: "Пакет Растеж" },
};

export default function Home() {
  const [briefReady, setBriefReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [business, setBusiness] = useState("");
  const [problem, setProblem] = useState("");
  const recommendation = useMemo(() => answers[problem], [problem]);
  const resetAssistant = () => { setBusiness(""); setProblem(""); };
  const startAssistant = () => { resetAssistant(); setAssistantOpen(true); };

  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool?: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: "start_business_consultation", title: "Стартирай бизнес консултация", description: "Отваря AI консултанта и избира типа бизнес и основния проблем.",
      inputSchema: { type: "object", properties: { business: { type: "string" }, problem: { type: "string", enum: Object.keys(answers) } }, required: ["business", "problem"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: (input: unknown) => { const value = input as { business?: string; problem?: string }; if (!value.business || !value.problem || !answers[value.problem]) throw new Error("Невалидни данни за консултация."); setBusiness(value.business); setProblem(value.problem); setAssistantOpen(true); return { status: "ready", recommendation: answers[value.problem].package }; },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return <main>
    <header className="nav-wrap"><a className="brand" href="#top" aria-label="VDX Digital начало"><span>V</span><strong>VDX Digital</strong></a><nav id="home-navigation" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Основна навигация"><a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a><a href="#packages" onClick={() => setMenuOpen(false)}>Пакети</a><a href="#work" onClick={() => setMenuOpen(false)}>Портфолио</a><InquiryButton className="nav-cta" onClick={() => setMenuOpen(false)}>Поискай оферта</InquiryButton></nav><button className="menu-button" aria-controls="home-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}>{menuOpen ? <X/> : <Menu/>}</button></header>

    <section className="hero" id="top"><div className="hero-grid" aria-hidden="true"/><div className="hero-copy"><p className="eyebrow"><span/> Дигитални системи за реален бизнес</p><h1>Повече запитвания.<br/><em>По-малко ръчна работа.</em></h1><p className="hero-lead">Изграждам сайтове, автоматизации и AI решения, които превръщат интереса в запитване и спестяват ръчна работа.</p><div className="hero-actions"><InquiryButton>Поискай оферта</InquiryButton><button className="button ghost" onClick={startAssistant}><Sparkles size={18}/> Намери правилното решение</button></div><div className="trust-row"><span>Ясна комуникация</span><span>Мобилен дизайн</span><span>Решение според процеса</span></div></div><div className="system-card" aria-label="Примерен поток на система"><div className="system-head"><span>VDX / BUSINESS FLOW</span><span className="live">● ACTIVE</span></div><div className="flow-step active"><span>01</span><div><strong>Ново запитване</strong><small>Форма, чат или телефон</small></div><Check size={18}/></div><div className="flow-line"/><div className="flow-step"><span>02</span><div><strong>Автоматично подреждане</strong><small>Данните са на едно място</small></div><ChevronRight size={18}/></div><div className="flow-line"/><div className="flow-step"><span>03</span><div><strong>Незабавно известие</strong><small>Реагирате навреме</small></div><ChevronRight size={18}/></div><div className="result-strip"><Zap size={18}/><div><small>РЕЗУЛТАТ</small><strong>По-малко пропуски. Повече контрол.</strong></div></div></div></section>

    <section className="section" id="services"><div className="section-head"><div><p className="eyebrow">Какво изграждам</p><h2>Четири услуги.<br/>Една ясна цел.</h2></div><p>Да изглеждате професионално, да реагирате по-бързо и да не губите време в задачи, които могат да се изпълнят автоматично.</p></div><div className="service-grid">{services.map((item,index)=><article className="service-card" key={item.title}><span className="service-number">0{index+1}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="result-section"><div><p className="eyebrow">Резултатът за Вашия бизнес</p><h2>Получавате по-добър начин на работа.</h2></div><div className="result-list"><div><strong>01</strong><span><b>Повече доверие</b>Ясно представяне още при първото посещение.</span></div><div><strong>02</strong><span><b>По-бърза реакция</b>Запитванията стигат до Вас веднага.</span></div><div><strong>03</strong><span><b>По-малко хаос</b>Информацията и действията следват един процес.</span></div></div></section>

    <section className="section pricing" id="packages"><div className="section-head"><div><p className="eyebrow">Решения за Вашия бизнес</p><h2>Ясен старт без скрити обещания.</h2></div><p>Изберете подходящата посока. В кратък разговор ще уточним нуждите на бизнеса и обхвата на проекта.</p></div><div className="price-grid">{packages.map(pack=><article className={pack.featured?"price-card featured":"price-card"} key={pack.name}>{pack.featured&&<span className="popular">САЙТ + АВТОМАТИЗАЦИЯ</span>}<p>{pack.note}</p><h3>{pack.name}</h3><ul>{pack.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><InquiryButton className={pack.featured?"button primary":"button outline"}>Поискай оферта</InquiryButton></article>)}</div><p className="price-note">Всяко решение се уточнява според Вашия бизнес.</p></section>

    <section className="section work" id="work"><div className="section-head"><div><p className="eyebrow">Подбрани проекти</p><h2>От проблем към работещо решение.</h2></div><p>Реален сайт и демонстрационни процеси, които показват как дигиталното решение работи на практика.</p></div><div className="project-list">{projects.map((project,index)=><article className="project" key={project.title}><div className={`project-visual ${project.accent}`}><span>0{index+1}</span><div className="visual-window"><i/><i/><i/>{project.accent === "nuve" ? <div className="portfolio-salon"><small>BEAUTY SALON</small><strong>NUVÉ</strong><span>Красотата започва с грижа.</span><b>Услуги · Екип · Галерия</b></div> : <div className="portfolio-flow"><strong>{project.accent === "hvac" ? "Сервизна заявка" : "Резервация за вечеря"}</strong><span>{project.accent === "hvac" ? "Монтаж / Ремонт / Профилактика" : "Дата · Час · Брой гости"}</span><b>01 / Запис на заявката</b><b>02 / Известие до екипа</b><b>03 / Потвърждение от човек</b></div>}</div></div><div className="project-copy"><span className="tag">{project.type}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><div className="case-row"><small>ПРОБЛЕМ</small><p>{project.problem}</p></div><div className="case-row"><small>РЕШЕНИЕ</small><p>{project.result}</p></div>{project.href&&<a href={project.href} target="_blank" rel="noreferrer">Виж проекта <ArrowRight size={16}/></a>}</div></article>)}</div></section>

    <section className="assistant-promo"><div><p className="eyebrow">Интерактивен консултант</p><h2>Кое решение е подходящо за Вашия бизнес?</h2><p>Отговорете на два кратки въпроса и получете практична начална посока — без регистрация. Препоръките са по готова логика и се уточняват в разговор.</p></div><button className="button light" onClick={startAssistant}><Sparkles size={18}/> Започни консултацията</button></section>
    <section className="section contact-section" id="contact"><div><p className="eyebrow">Да обсъдим проекта</p><h2>Какво искате да подобрите?</h2><p>Опишете бизнеса и задачата. Ще уточним обхвата и подхода преди да започнем.</p><InquiryButton className="button primary contact-call">Свържи се с нас</InquiryButton><a href="tel:+359893663031">0893 663 031</a><a href="mailto:V.DimitrovDigital@gmail.com">V.DimitrovDigital@gmail.com</a></div><form onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); if (data.get("website")) return; const body = `Име: ${data.get("name")}\nИмейл: ${data.get("email")}\nБизнес: ${data.get("business")}\n\n${data.get("message")}`; window.location.href = `mailto:V.DimitrovDigital@gmail.com?subject=${encodeURIComponent("Нов проект за VDX Digital")}&body=${encodeURIComponent(body)}`; setBriefReady(true); }}><label>Вашето име<input name="name" required maxLength={100} autoComplete="name"/></label><label>Имейл за връзка<input name="email" type="email" required autoComplete="email"/></label><label>Бизнес / дейност<input name="business" required maxLength={150}/></label><label>Какво Ви е нужно?<textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder="Например: сайт за салон и подреждане на заявките за час."/></label><input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button className="button primary" type="submit">Подготви имейл <ArrowRight size={17}/></button><p className="form-note" role="status">{briefReady ? "Имейлът е подготвен. Изпратете го от пощенското си приложение. Ако то не се отвори, използвайте адреса вляво." : "Отваря Вашата поща с попълнено запитване. Изпращането става от Вас."}</p></form></section>
    <footer><div><a className="brand" href="#top"><span>V</span><strong>VDX Digital</strong></a><p>Уебсайтове, автоматизации и AI системи за български бизнеси.</p></div><div><small>КОНТАКТ</small><a href="mailto:V.DimitrovDigital@gmail.com">V.DimitrovDigital@gmail.com</a><a href="tel:0893663031"><Phone size={15}/> 0893 663 031</a><a href="https://www.instagram.com/v.dimitrovdigital/" target="_blank" rel="noreferrer"><MessageCircle size={15}/> Instagram</a></div><p className="copyright">© {new Date().getFullYear()} VDX Digital</p></footer>

    {assistantOpen&&<Modal labelId="assistant-title" className="assistant-modal" onClose={() => setAssistantOpen(false)}><div className="assistant-top"><div><span><Sparkles size={16}/> VDX / КОНСУЛТАНТ</span><h2 id="assistant-title">Нека намерим правилната посока.</h2></div><button autoFocus onClick={()=>setAssistantOpen(false)} aria-label="Затвори"><X/></button></div>{!business?<div className="assistant-step"><p>Какъв бизнес имате?</p><div className="option-grid">{["Салон / студио","Ресторант / заведение","Сервиз / услуги","Медицински кабинет","Друг бизнес"].map(x=><button key={x} onClick={()=>setBusiness(x)}>{x}<ChevronRight size={17}/></button>)}</div></div>:!problem?<div className="assistant-step"><button className="back" onClick={()=>setBusiness("")}>← Назад</button><p>Кой е най-големият проблем в момента?</p><div className="option-grid">{Object.keys(answers).map(x=><button key={x} onClick={()=>setProblem(x)}>{x}<ChevronRight size={17}/></button>)}</div></div>:recommendation&&<div className="recommendation"><span className="rec-label">ПРЕПОРЪКА ЗА {business.toUpperCase()}</span><h3>{recommendation.title}</h3><p>{recommendation.text}</p><p className="business-example">{businessExamples[business]}</p><div className="rec-package"><small>ПОДХОДЯЩ СТАРТ</small><strong>{recommendation.package}</strong></div><InquiryButton>Обсъди препоръката</InquiryButton><button className="restart" onClick={resetAssistant}>Започни отначало</button></div>}</Modal>}
  </main>;
}
