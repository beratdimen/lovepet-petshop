import { ArrowUpRight, PawPrint } from "lucide-react"

export default function Header() {
  return (
    <header className="site-header">
      <a href="#anasayfa" className="brand" aria-label="Love Pet Petshop ana sayfa">
        <span className="brand-mark"><PawPrint size={21} fill="currentColor" /></span>
        <span>love pet<small>PETSHOP · KASIMPAŞA</small></span>
      </a>
      <nav className="main-nav" aria-label="Ana menü">
        <a href="#hizmetler">Neler sunuyoruz?</a><a href="#urunler">Ürünler</a><a href="#ziyaret">Bizi bulun</a>
      </nav>
      <a className="header-cta" href="tel:+905415986303">Bize ulaşın <ArrowUpRight size={15} /></a>
    </header>
  )
}
