import Image from "next/image"
import { ArrowDown, ArrowUpRight, Bone, Cat, Dog, Heart, MapPin, PackageCheck, PawPrint, Phone, Sparkles, Truck } from "lucide-react"
import Header from "../components/header"

const services = [
  {
    number: "01",
    icon: Dog,
    title: "Dostunuza iyi gelen beslenme",
    text: "Kedi ve köpekler için kuru ve yaş mama seçenekleri; dostunuzun yaşına, damak tadına ve günlük rutinine uygun alternatifler.",
    tone: "sage",
  },
  {
    number: "02",
    icon: Heart,
    title: "Günlük hayatın küçük mutlulukları",
    text: "Ödül mamaları, oyuncaklar ve konforlu yaşam ürünleriyle birlikte geçirilen her ana biraz daha neşe katın.",
    tone: "peach",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Bakım ve ihtiyaç ürünleri",
    text: "Tasma ve gezdirme ürünlerinden tarak ve temizlik ihtiyaçlarına kadar, özenli bakım için aradığınız seçenekler.",
    tone: "butter",
  },
]

const categories = [
  { icon: Cat, title: "Kediler için", detail: "Mama · kum · oyuncak · bakım" },
  { icon: Dog, title: "Köpekler için", detail: "Mama · ödül · tasma · oyuncak" },
  { icon: Bone, title: "Günlük ihtiyaçlar", detail: "Bakım · temizlik · aksesuar" },
]

export default function Page() {
  return (
    <main>
      <Header />
      <section className="hero" id="anasayfa">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Kasımpaşa&apos;da, patili dostlarımızın yanında</div>
          <h1>Onların dünyası,<br /><em>bizim</em> de dünyamız.</h1>
          <p className="hero-description">Mama, bakım ve mutluluk dolu küçük sürprizler… Sevimli dostunuz için aradığınız her şey, mahallenizin petshop&apos;unda.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#hizmetler">Neler sunuyoruz? <ArrowUpRight size={17} /></a>
            <a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=Love+Pet+Petshop%2C+Bahriye+Caddesi%2C+Kas%C4%B1mpa%C5%9Fa%2C+Beyo%C4%9Flu%2C+Istanbul" target="_blank" rel="noreferrer"><MapPin size={16} /> Bizi ziyaret edin</a>
          </div>
          <div className="hero-note"><div className="avatar-stack" aria-hidden="true"><span><PawPrint size={14} /></span><span><Heart size={13} /></span><span><Sparkles size={13} /></span></div><span>Mahallenizin sevgi dolu petshop&apos;u</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><Image src="/love-pet-hero.png" alt="Petshopta yan yana oturan sevimli bir kedi ve köpek" fill priority sizes="(max-width: 800px) 100vw, 55vw" className="hero-photo" /></div>
          <div className="photo-sticker"><PawPrint size={19} fill="currentColor" /><span>Sevgiyle<br />seçildi</span></div>
          <div className="photo-caption"><span>LOVE PET</span><span>Her pati için, sevgiyle.</span></div>
          <div className="hero-orbit" aria-hidden="true">✳</div>
        </div>
        <a className="scroll-cue" href="#hizmetler"><ArrowDown size={15} /> Keşfet</a>
      </section>

      <section className="intro-band" aria-label="Love Pet hakkında">
        <p>Bir petshop&apos;tan daha fazlası.</p><span className="intro-divider" /><p>Mahallenin pati dostu.</p><span className="intro-paw"><PawPrint size={18} /></span>
      </section>

      <section className="services section-wrap" id="hizmetler">
        <div className="section-heading">
          <div><span className="eyebrow">İHTİYAÇLARI, SEVGİYLE</span><h2>İyi yaşamın<br /><em>küçük detayları.</em></h2></div>
          <p>Her dostun ihtiyacı farklı. Biz de doğru ürünü bulmanız için yanınızdayız; gelin, birlikte keşfedelim.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, text, tone }) => (
            <article className={`service-card ${tone}`} key={number}>
              <div className="card-top"><span>{number} / 03</span><Icon size={22} strokeWidth={1.6} /></div>
              <h3>{title}</h3><p>{text}</p><a href="#iletisim" aria-label={`${title} hakkında bilgi almak için iletişime geçin`} className="card-arrow"><ArrowUpRight size={18} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="category-section" id="urunler">
        <div className="section-wrap category-inner">
          <div className="category-copy"><span className="eyebrow">HER PATİYE GÖRE</span><h2>Dostunuz için<br /><em>güzel şeyler.</em></h2><p>Geniş ürün seçkimizde, günlük ihtiyaçlardan minik mutluluklara kadar pek çok seçenek sizi bekliyor. Aradığınızı bulamazsanız bize sorun.</p><a className="button button-light" href="tel:+905415986303">Bize danışın <Phone size={16} /></a></div>
          <div className="category-list">
            {categories.map(({ icon: Icon, title, detail }, index) => <div className="category-row" key={title}><span className="category-index">0{index + 1}</span><span className="category-icon"><Icon size={22} /></span><div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight className="category-arrow" size={19} /></div>)}
            <div className="category-footnote"><PackageCheck size={17} /> Ürün seçenekleri mağaza stoklarına göre değişebilir.</div>
          </div>
        </div>
      </section>

      <section className="visit section-wrap" id="ziyaret">
        <div className="visit-top"><span className="eyebrow">YAKININIZDAYIZ</span><span className="visit-mark"><PawPrint size={21} /></span></div>
        <div className="visit-content"><div><h2>Bir pati kadar<br /><em>yakınız.</em></h2><p>Kasımpaşa&apos;da kahvenizi alın, dostunuzu da yanınıza katın. Mahallemizde sizi bekliyoruz.</p></div><div className="visit-card" id="iletisim"><span className="visit-label"><MapPin size={15} /> MAĞAZAMIZ</span><address>Bahriye Caddesi, 58/A<br />Kasımpaşa · Beyoğlu, İstanbul</address><p className="store-hours">Pzt–Cmt 09.00–21.00 <span>·</span> Paz 14.00–19.00</p><a className="visit-link" href="https://www.google.com/maps/dir/?api=1&destination=Love+Pet+Petshop%2C+Bahriye+Caddesi%2C+Kas%C4%B1mpa%C5%9Fa%2C+Beyo%C4%9Flu%2C+Istanbul" target="_blank" rel="noreferrer">Yol tarifi al <ArrowUpRight size={16} /></a><a className="visit-phone" href="tel:+905415986303"><Phone size={15} /> +90 541 598 63 03</a></div></div>
        <div className="visit-bottom"><span><Truck size={17} /> Yakın çevre teslimatı için bizi arayın.</span><a href="https://wa.me/905415986303" target="_blank" rel="noreferrer">WhatsApp&apos;tan ulaşın <ArrowUpRight size={15} /></a></div>
      </section>
      <footer className="footer"><a href="#anasayfa" className="brand footer-brand"><span className="brand-mark"><PawPrint size={20} fill="currentColor" /></span><span>love pet<small>PETSHOP · KASIMPAŞA</small></span></a><span>Patili dostlar için, sevgiyle. © {new Date().getFullYear()} Love Pet Petshop</span><a href="#anasayfa" className="back-top">Yukarı dön ↑</a></footer>
    </main>
  )
}
