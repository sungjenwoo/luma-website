import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`display text-[21px] font-bold tracking-[-.08em] ${inverse ? "text-white" : "text-foreground"}`}>luma<span className="text-primary">●</span></Link>;
}

export function PrimaryButton({ href, children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
  const content = <span className={`btn-primary ${className}`}>{children}<ArrowUpRight size={15} strokeWidth={2.4} /></span>;
  return href ? <Link href={href}>{content}</Link> : <button type="button">{content}</button>;
}

export function QuietButton({ href, children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
  const content = <span className={`btn-quiet ${className}`}>{children}</span>;
  return href ? <Link href={href}>{content}</Link> : <button type="button">{content}</button>;
}

export function SectionHeader({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) {
  return <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[650px]`}>
    <div className="eyebrow text-primary">{eyebrow}</div>
    <h2 className="display mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl">{title}</h2>
    {body && <p className="mt-5 max-w-[570px] text-[16px] leading-7 text-muted-foreground">{body}</p>}
  </div>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return <div className="min-h-screen overflow-x-hidden">
    <header className="sticky top-0 z-50 border-b border-black/[.06] bg-[#fbfaf8]/85 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={`text-[13px] font-semibold transition-colors hover:text-primary ${location === item.href ? "text-foreground" : "text-muted-foreground"}`}>
            {item.label}{location === item.href && <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-primary align-middle" />}
          </Link>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/login" className="text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground">Log in</Link>
          <PrimaryButton href="/download">Download Studio</PrimaryButton>
        </div>
        <button aria-label={open ? "Close menu" : "Open menu"} className="rounded-full border border-black/10 p-2.5 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && <div className="border-t border-black/[.06] bg-[#fbfaf8] px-5 pb-5 pt-3 lg:hidden reveal">
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-sm font-semibold ${location === item.href ? "bg-accent text-accent-foreground" : "text-foreground"}`}>{item.label}</Link>)}
          <div className="mt-3 flex gap-3 border-t border-black/[.08] pt-4"><Link href="/login" onClick={() => setOpen(false)} className="btn-quiet flex-1">Log in</Link><Link href="/download" onClick={() => setOpen(false)} className="btn-primary flex-1">Download Studio <ArrowUpRight size={15} /></Link></div>
        </nav>
      </div>}
    </header>
    <main className="page-shell">{children}</main>
    <Footer />
  </div>;
}

export function Footer() {
  return <footer className="border-t border-black/[.08] bg-[#f4efeb]">
    <div className="container py-14 sm:py-20">
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        <div className="max-w-[300px]"><Logo /><p className="mt-5 text-sm leading-6 text-muted-foreground">An intelligent visual workflow for turning ideas into websites.</p><div className="eyebrow mt-8 text-muted-foreground">Luma Studio is the app. This is the beginning.</div></div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-4">
          <div><div className="eyebrow mb-4 text-muted-foreground">Product</div><div className="flex flex-col gap-3 text-sm font-semibold">{[["Features","/features"],["Inspiration","/inspiration"],["Pricing","/pricing"],["Download Studio","/download"]].map(([t,h])=><Link key={h} href={h} className="transition-colors hover:text-primary">{t}</Link>)}</div></div>
          <div><div className="eyebrow mb-4 text-muted-foreground">Resources</div><div className="flex flex-col gap-3 text-sm font-semibold">{[["Docs","/docs"],["Getting Started","/docs#getting-started"]].map(([t,h])=><Link key={h} href={h} className="transition-colors hover:text-primary">{t}</Link>)}</div></div>
          <div><div className="eyebrow mb-4 text-muted-foreground">Company</div><div className="flex flex-col gap-3 text-sm font-semibold"><Link href="/about" className="transition-colors hover:text-primary">About</Link></div></div>
          <div><div className="eyebrow mb-4 text-muted-foreground">Legal</div><div className="flex flex-col gap-3 text-sm font-semibold"><button type="button" className="text-left transition-colors hover:text-primary">Privacy</button><button type="button" className="text-left transition-colors hover:text-primary">Terms</button></div></div>
        </div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-black/[.1] pt-5 text-xs text-muted-foreground sm:flex-row"><span>© 2026 Luma Studio</span><span>Made for the curious.</span></div>
    </div>
  </footer>;
}

export function PageIntro({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children?: React.ReactNode }) {
  return <section className="rule-grid border-b border-black/[.06] bg-[#f6f0ed] py-20 sm:py-28"><div className="container"><div className="max-w-[820px]"><div className="eyebrow text-primary">{eyebrow}</div><h1 className="display mt-5 text-5xl font-semibold leading-[.98] sm:text-7xl">{title}</h1><p className="mt-6 max-w-[630px] text-lg leading-8 text-muted-foreground">{body}</p>{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}</div></div></section>;
}

export function MiniCTA() {
  return <section className="container py-20 sm:py-28"><div className="grain relative overflow-hidden rounded-[2rem] bg-[#21191a] px-7 py-12 text-white sm:px-14 sm:py-16"><div className="relative max-w-[630px]"><div className="eyebrow text-[#ffb6ca]">Your next tab</div><h2 className="display mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl">Ideas should have somewhere to go.</h2><p className="mt-5 max-w-[490px] leading-7 text-white/65">Download Luma Studio and move from a blank page to something you can feel.</p><div className="mt-8"><PrimaryButton href="/download">Download Luma Studio</PrimaryButton></div></div></div></section>;
}

export default SiteShell;
