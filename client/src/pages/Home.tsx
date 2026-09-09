import { ArrowDown, ArrowRight, Check, Command, MousePointer2, Palette, Sparkles, Wand2 } from "lucide-react";
import { Link } from "wouter";
import { MiniCTA, PrimaryButton, QuietButton, SectionHeader } from "@/components/luma/SiteShell";
import StudioPreview from "@/components/luma/StudioPreview";

const steps = [
  { n: "01", title: "Discover", body: "Explore a new visual workflow for the web.", icon: Sparkles },
  { n: "02", title: "Download", body: "Bring Luma Studio to your desktop in a few clicks.", icon: ArrowDown },
  { n: "03", title: "Design", body: "Turn a thought into a responsive, living canvas.", icon: Palette },
  { n: "04", title: "Create", body: "Generate, remix, refine, and publish with intention.", icon: Wand2 },
];

export default function Home() {
  return (
    <div>
      <section className="grain relative overflow-hidden border-b border-black/[.06] bg-[#fbfaf8] pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_18%,rgba(255,203,216,.42),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(247,225,213,.32),transparent_27%)]" />
        <div className="container">
          <div className="grid items-end gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-8">
            <div className="pb-12 lg:pb-20">
              <div className="reveal eyebrow text-primary">Luma / the intelligent web design studio</div>
              <h1 className="display reveal mt-6 max-w-[630px] text-[clamp(56px,8vw,110px)] font-semibold leading-[.86] [animation-delay:80ms]">Design the web <span className="text-primary">with intelligence.</span></h1>
              <p className="reveal mt-8 max-w-[510px] text-lg leading-8 text-muted-foreground [animation-delay:160ms]">Luma is an AI-powered visual workflow that helps creators generate, design, remix, and refine websites with more room for the good ideas.</p>
              <div className="reveal mt-9 flex flex-wrap gap-3 [animation-delay:240ms]"><PrimaryButton href="/download">Download Luma Studio</PrimaryButton><QuietButton href="/inspiration">Explore inspiration <ArrowRight size={15} /></QuietButton></div>
              <div className="mt-12 flex items-center gap-3 text-xs text-muted-foreground"><span className="flex -space-x-2"><span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#e8b2bd]" /><span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#bb8f85]" /><span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#303030]" /></span><span>For the curious, the particular, and the in-progress.</span></div>
            </div>
            <div className="relative min-h-[420px] overflow-visible sm:min-h-[590px]">
              <div className="absolute -right-[13%] top-[2%] h-[90%] w-[120%] overflow-hidden rounded-[2rem] border border-black/10 bg-[#ead6d0] shadow-[0_40px_100px_rgba(83,40,47,.17)] sm:-right-[8%]">
                <img src="/manus-storage/luma-hero-orb_56dc3994.png" alt="Abstract pink ribbon and glass orb" className="hero-orb h-full w-full object-cover" />
                <div className="absolute left-5 top-5 rounded-full bg-white/75 px-3 py-2 font-mono text-[10px] text-black/60 backdrop-blur">LUMA / 01</div>
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-[#21191a] px-3 py-2 font-mono text-[10px] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#ffb6ca]" /> Studio preview</div>
              </div>
              <div className="absolute -bottom-7 left-[7%] z-10 hidden w-[230px] rotate-[-5deg] rounded-[1rem] border border-black/10 bg-[#fffdfc] p-3 shadow-xl sm:block">
                <div className="flex items-center justify-between border-b border-black/10 pb-2 font-mono text-[9px] text-black/50"><span>prompt / 001</span><span className="text-primary">●</span></div>
                <div className="display mt-4 text-lg leading-[.95]">A quiet, tactile portfolio for a ceramicist.</div>
                <div className="mt-4 flex items-center justify-between text-[9px] text-black/45"><span>generating direction</span><span>72%</span></div>
                <div className="mt-2 h-1 rounded-full bg-[#f0e7e5]"><div className="h-1 w-[72%] rounded-full bg-primary" /></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-black/[.08] py-4 text-xs text-muted-foreground"><span className="eyebrow">The public website explains</span><span className="hidden font-semibold sm:block">The design happens in Luma Studio <ArrowDown className="ml-2 inline-block" size={13} /></span></div>
        </div>
      </section>

      <section className="bg-[#f4efeb] py-20 sm:py-28">
        <div className="container">
          <SectionHeader eyebrow="A clear beginning" title="Discover Luma → download Studio → make something real." body="The Luma website is the front door. Luma Studio is where the work happens. The distinction is simple, on purpose." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/10 md:grid-cols-4">
            {steps.map((step) => { const Icon = step.icon; return <div key={step.n} className="lift group bg-[#fbfaf8] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="eyebrow text-muted-foreground">Step {step.n}</span><Icon size={18} className="text-primary transition-transform group-hover:rotate-12" /></div><h3 className="display mt-14 text-2xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p></div>; })}
          </div>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div><div className="eyebrow text-primary">The place where it happens</div><h2 className="display mt-4 text-4xl font-semibold leading-[.98] sm:text-6xl">Your ideas become websites inside Luma Studio.</h2><p className="mt-6 max-w-[430px] text-[16px] leading-7 text-muted-foreground">A desktop application built for the messy middle: the part where a rough direction becomes a point of view.</p><div className="mt-8"><PrimaryButton href="/download">Download Studio</PrimaryButton></div><div className="mt-10 grid max-w-[380px] gap-3 text-sm text-muted-foreground"><div className="flex items-center gap-3"><Check size={16} className="text-primary" />Canvas-first, not code-first</div><div className="flex items-center gap-3"><Check size={16} className="text-primary" />Responsive from the beginning</div><div className="flex items-center gap-3"><Check size={16} className="text-primary" />AI that keeps your hands on the wheel</div></div></div>
          <StudioPreview />
        </div>
      </section>

      <section className="border-y border-black/[.07] bg-[#21191a] py-20 text-white sm:py-28">
        <div className="container"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><div className="eyebrow text-[#ffb6ca]">Generate → Remix → Refine</div><h2 className="display mt-4 text-4xl font-semibold leading-[.98] sm:text-6xl">Meet your AI Co-Designer.</h2><p className="mt-6 max-w-[430px] text-white/60 leading-7">The future of web design is not a magic button. It is a thoughtful conversation between your taste and a system that can keep up.</p></div><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-[1.25rem] border border-white/10 bg-white/[.06] p-5"><Command size={18} className="text-[#ffb6ca]" /><div className="mt-16 text-lg font-semibold">Generate</div><p className="mt-2 text-sm leading-6 text-white/50">Start with a direction, not a blank canvas.</p></div><div className="rounded-[1.25rem] border border-white/10 bg-white/[.06] p-5"><MousePointer2 size={18} className="text-[#ffb6ca]" /><div className="mt-16 text-lg font-semibold">Remix</div><p className="mt-2 text-sm leading-6 text-white/50">Explore the edges of what your idea could be.</p></div><div className="rounded-[1.25rem] border border-white/10 bg-white/[.06] p-5"><Sparkles size={18} className="text-[#ffb6ca]" /><div className="mt-16 text-lg font-semibold">Refine</div><p className="mt-2 text-sm leading-6 text-white/50">Make the details feel unmistakably yours.</p></div></div></div></div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-8 sm:flex-row sm:items-end"><div><div className="eyebrow text-primary">A peek at what’s next</div><h2 className="display mt-4 text-4xl font-semibold leading-[.98] sm:text-5xl">One place for many directions.</h2></div><Link href="/inspiration" className="text-sm font-semibold text-primary">Browse inspiration <ArrowRight className="ml-2 inline-block" size={15} /></Link></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3"><div className="group overflow-hidden rounded-[1.25rem] bg-[#e2dad4] p-3"><div className="aspect-[1.1/1] overflow-hidden rounded-[.9rem] bg-[#f4ece6]"><div className="flex h-full flex-col justify-between p-6"><div className="flex justify-between font-mono text-[9px] text-black/45"><span>NO. 01</span><span>PORTFOLIO</span></div><div className="display text-4xl leading-[.82] transition-transform duration-300 group-hover:translate-x-2">Soft<br />structures<br /><span className="text-[#e63b72]">/</span></div><div className="text-xs text-black/50">A study in quiet confidence.</div></div></div><div className="flex items-center justify-between px-2 pb-1 pt-4 text-sm font-semibold"><span>Material / Form</span><span className="font-mono text-[10px] text-black/45">↗</span></div></div><div className="group overflow-hidden rounded-[1.25rem] bg-[#f0d6dc] p-3"><div className="aspect-[1.1/1] overflow-hidden rounded-[.9rem] bg-[#e63b72] p-6 text-white"><div className="flex h-full flex-col justify-between"><div className="flex justify-between font-mono text-[9px] text-white/65"><span>NO. 02</span><span>EDITORIAL</span></div><div className="display text-4xl leading-[.82] transition-transform duration-300 group-hover:translate-x-2">Pink<br /><span className="italic">noise.</span></div><div className="text-xs text-white/70">A magazine for a moving internet.</div></div></div><div className="flex items-center justify-between px-2 pb-1 pt-4 text-sm font-semibold"><span>Signal / Feeling</span><span className="font-mono text-[10px] text-black/45">↗</span></div></div><div className="group overflow-hidden rounded-[1.25rem] bg-[#d8d5d0] p-3"><div className="aspect-[1.1/1] overflow-hidden rounded-[.9rem]"><img src="/manus-storage/luma-inspiration-01_48e35c2b.png" alt="Architecture-inspired website composition" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="flex items-center justify-between px-2 pb-1 pt-4 text-sm font-semibold"><span>Concrete / Light</span><span className="font-mono text-[10px] text-black/45">↗</span></div></div></div>
      </section>
      <MiniCTA />
    </div>
  );
}
