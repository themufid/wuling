"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { journal, officialLinks, timeline, vehicles, type Vehicle } from "@/data/content";

const photographed = vehicles.filter((v) => v.gallery.length > 0);

export function HomeExperience() {
  const root = useRef<HTMLDivElement>(null);
  const [intro, setIntro] = useState(true);
  const [headlights, setHeadlights] = useState(false);
  const [charge, setCharge] = useState(20);
  const [active, setActive] = useState(photographed[0]?.slug ?? "air-ev");
  const [frame, setFrame] = useState(0);
  const [color, setColor] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [filter, setFilter] = useState<"all" | "city" | "family" | "premium" | "utility">("all");
  const [need, setNeed] = useState<string | null>(null);

  const vehicle = vehicles.find((item) => item.slug === active) ?? photographed[0];
  const photo = vehicle.colors[color]?.image
    ? vehicle.gallery.find((item) => item.src === vehicle.colors[color].image) ?? vehicle.gallery[frame % Math.max(vehicle.gallery.length, 1)]
    : vehicle.gallery[frame % Math.max(vehicle.gallery.length, 1)];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIntro(false);
      setHeadlights(true);
      return;
    }
    const timers = [
      window.setTimeout(() => setHeadlights(true), 2600),
      window.setTimeout(() => setIntro(false), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const story = document.querySelector("#driving-story");
    if (!story) return;
    const onScroll = () => {
      const rect = story.getBoundingClientRect();
      const total = story.scrollHeight - window.innerHeight;
      const seen = Math.min(Math.max(-rect.top, 0), total);
      setChapter(Math.min(3, Math.floor((seen / total) * 4)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setCharge((n) => (n >= 80 ? 20 : n + 20)), 1600);
    return () => clearInterval(id);
  }, []);

  const compared = useMemo(
    () => vehicles.filter((item) => filter === "all" || item.filters.includes(filter)),
    [filter],
  );

  const matches = useMemo(() => {
    if (!need) return [];
    return vehicles.filter((item) => item.finder.includes(need as Vehicle["finder"][number]));
  }, [need]);

  return (
    <div ref={root}>
      {intro && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black" aria-hidden>
          <div className="w-full">
            <div className="mx-auto h-px w-2/3 bg-white/80" />
            <p className="display mt-8 text-center text-3xl tracking-[0.28em] text-white/80">Wuling</p>
          </div>
        </div>
      )}

      <section className="relative min-h-[100svh] overflow-hidden bg-black">
        <img
          src="/media/air-peach.jpg"
          alt="Wuling Air ev in Peach Pink, used as the cinematic hero because a verified photograph is available"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        {headlights && <div className="pointer-events-none absolute bottom-[18%] right-[18%] h-24 w-40 bg-white/10 blur-3xl" />}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:px-10">
          <p className="max-w-xl text-[11px] uppercase tracking-[0.18em] text-white/75">
            Independent Website Redesign Concept by HINAI Tech. Not an official Wuling Motors website.
          </p>
          <h1 className="display mt-6 max-w-5xl text-[18vw] text-white md:text-[8.5rem]">
            {["Electric", "For Everyday."].map((line) => (
              <span key={line} className="mask-line">
                <span className="block transition-transform duration-700" style={{ transform: intro ? "translateY(110%)" : "translateY(0)" }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Experience Wuling&apos;s electric mobility through a new digital perspective.
          </p>
          <p className="mt-3 max-w-xl text-sm text-white/60">
            Hero vehicle: New Air ev. Photograph by MoCars, CC0, Wikimedia Commons. Aira ev is introduced further down; a verified studio image of Aira ev was not available for this concept.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-solid" href="/electric">Explore Electric</Link>
            <Link className="btn" href="/vehicles">Explore Vehicles</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8" id="electric">
        <p className="eyebrow">Electric vehicle intro</p>
        <h2 className="display mt-4 max-w-4xl text-6xl md:text-8xl">Electric. Made for life.</h2>
        <p className="mt-6 max-w-2xl text-lg text-[#d5cec3]">
          Explore Wuling&apos;s growing electric vehicle lineup and discover how electric mobility fits into everyday life.
        </p>
        <div className="h-scroll mt-12">
          {vehicles.map((item) => (
            <article key={item.slug} className="w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#101218] md:w-[420px]">
              <div className="shot h-56">
                {item.heroImage ? (
                  <img src={item.heroImage} alt={item.gallery[0]?.alt ?? item.name} />
                ) : (
                  <div className="flex h-full items-end p-5 text-sm text-[#a39c92]">Official photography is linked from wuling.id. This concept does not substitute an unverified render.</div>
                )}
              </div>
              <div className="p-5">
                <h3 className="display text-4xl">{item.name}</h3>
                <p className="mt-2 text-sm text-[#c9c2b6]">{item.summary}</p>
                <Link className="btn mt-5" href={`/vehicles/${item.slug}`}>Explore Model</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0e12] py-20" id="inspect">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="eyebrow">Photographic inspection</p>
            <h2 className="display mt-3 text-6xl md:text-7xl">See every detail.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#c9c2b6]">
              Drag through verified photographs. A 3D model is not shown, because an accurate production model was not available. Accuracy comes before a simulated car.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {photographed.map((item) => (
                <button
                  key={item.slug}
                  className={`rounded-full border px-4 py-3 text-left text-sm ${active === item.slug ? "border-white bg-white text-black" : "border-white/15"}`}
                  onClick={() => { setActive(item.slug); setFrame(0); setColor(0); }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            {photo && (
              <figure
                className="shot aspect-[16/10] cursor-grab rounded-3xl"
                onPointerDown={(event) => {
                  const start = event.clientX;
                  const move = (ev: PointerEvent) => {
                    if (Math.abs(ev.clientX - start) > 40) setFrame((n) => n + (ev.clientX < start ? 1 : 0));
                  };
                  window.addEventListener("pointerup", move, { once: true });
                }}
              >
                <img src={photo.src} alt={photo.alt} />
              </figure>
            )}
            <p className="mt-3 text-xs text-[#8f887e]">{photo?.credit} · Source: Wuling Indonesia for specifications.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {vehicle.highlights.map((spec, index) => (
                <div key={spec.label} className="border-t border-white/15 pt-3">
                  <p className="eyebrow">0{index + 1} {spec.label}</p>
                  <p className="mt-2 text-xl">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8">
        <h2 className="display text-6xl md:text-8xl">Designed around you.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ["01 Lighting", "LED lighting is published for models such as Eksion. Close views here use real photographs rather than invented lamp graphics."],
            ["02 Aerodynamics", "New Air ev Pro lists an extended horizon lamp and frameless wiper. Air ev also uses aerodynamic wheel caps."],
            ["03 Interior", "Interiors follow published themes: Tamarind Sunset on Air ev, Cookies and Cream on Aira ev, walnut and carbon black on Eksion."],
            ["04 Charging", "Charge ports and times are shown only when Wuling publishes them for that model."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-2xl border border-white/10 p-5">
              <h3 className="display text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c9c2b6]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f3efe6] px-5 py-24 text-[#14161a] md:px-8" id="technology">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-6xl md:text-8xl">Powered by electric.</h2>
          <p className="mt-4 max-w-2xl">Battery, power electronics, motor and wheels, drawn as a technical path. Figures stay on each model page.</p>
          <svg viewBox="0 0 900 120" className="mt-10 w-full" role="img" aria-label="Energy flow from battery to wheels">
            <path d="M40 60 H860" stroke="#14161a" strokeWidth="1" className="tech-line" fill="none" />
            {["Battery", "Power electronics", "Motor", "Wheels"].map((label, i) => (
              <g key={label} transform={`translate(${80 + i * 220} 60)`}>
                <circle r="7" fill="#d0121a" />
                <text y="36" textAnchor="middle" fontSize="13" fill="#14161a">{label}</text>
              </g>
            ))}
          </svg>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="display text-5xl">Magic Battery</h3>
              <p className="mt-4 text-sm leading-relaxed">
                Wuling describes MAGIC Battery as Multifunction Unitized Structure Technology, Advanced Cell Safety, Greater Performance, Intelligent Management and Combustion Free. MUST integrates structure, side panels and cooling. Cells use a ceramic layer. A high-precision BMS and cloud AI monitor more than 240 safety controls.
              </p>
              <p className="mt-3 text-xs text-[#5c564e]">Source: Wuling press releases, 2024–2025.</p>
            </div>
            <ol className="space-y-3 text-sm">
              {["Battery cells", "Protection", "Monitoring", "Vehicle"].map((step, i) => (
                <li key={step} className="flex items-center gap-4 border-b border-black/10 py-3">
                  <span className="display text-3xl">0{i + 1}</span>{step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative min-h-[80svh] overflow-hidden" id="charging">
        <img src="/media/air-charge.jpg" alt="Wuling Air ev connected to a charger" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-5 py-16 md:px-8">
          <h2 className="display text-6xl md:text-8xl">Charge your way.</h2>
          <p className="mt-4 max-w-xl">Home charging and public charging stations are part of the Wuling EV ecosystem. The indicator below is a visual sequence, not a claimed charge time.</p>
          <p className="display mt-8 text-7xl">{charge}%</p>
          <a className="btn mt-8 w-fit" href={officialLinks.charging} target="_blank" rel="noreferrer">Explore Charging</a>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8">
        <h2 className="display text-6xl md:text-8xl">More than a car.</h2>
        <p className="mt-4 max-w-2xl text-[#d5cec3]">An electric vehicle experience is more than the drive. It&apos;s the technology, charging, service and digital experience around it.</p>
        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {["Vehicle", "Charging", "Mobile experience", "Service", "Daily mobility"].map((item) => (
            <div key={item} className="border border-white/10 p-5 text-sm uppercase tracking-[0.14em]">{item}</div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#a39c92]">MyWuling+ covers vehicle information, service booking and charging discovery. Wuling states it has 150 dealers across Indonesia. Call centre published on the after-sales page: 0800-100-5050.</p>
      </section>

      <InteriorBlock />

      <section id="driving-story" className="relative h-[320vh]">
        <div className="sticky top-0 flex h-[100svh] items-end overflow-hidden">
          <img src={chapter < 2 ? "/media/air-jakarta.jpg" : "/media/cloud-white.jpg"} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40" />
          <div className="relative px-5 pb-16 md:px-10">
            <p className="eyebrow">{["City", "Commute", "Weekend", "Destination"][chapter]}</p>
            <h2 className="display mt-3 text-6xl md:text-8xl">
              {["Jakarta, after rain.", "Daily city movement.", "Open road.", "A wider Indonesian landscape."][chapter]}
            </h2>
            <p className="mt-4 max-w-lg text-sm text-white/75">The vehicle stays in frame as the chapter changes. These scenes do not imply a performance figure.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-6xl">Configurator</h2>
          <p className="max-w-md text-sm text-[#a39c92]">Colors follow published names. A photograph changes only when that finish exists in the image set.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {photographed.map((item) => (
            <button key={item.slug} className="btn" onClick={() => { setActive(item.slug); setColor(0); }}>{item.name}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="shot aspect-[16/10] rounded-3xl">
            {photo && <img src={photo.src} alt={photo.alt} className="transition-opacity duration-700" />}
          </div>
          <div>
            <p className="eyebrow">Exterior</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {vehicle.colors.map((swatch, index) => (
                <button key={swatch.name} onClick={() => setColor(index)} className="text-left">
                  <span className="block h-10 w-10 rounded-full border border-white/30" style={{ background: swatch.hex }} />
                  <span className="mt-2 block text-xs">{swatch.name}</span>
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#c9c2b6]">Interior: {vehicle.interiorName ?? "See the official model page for interior trim."}</p>
            <p className="mt-2 text-sm text-[#c9c2b6]">Wheel: {vehicle.wheel}</p>
            {!vehicle.colors[color]?.image && (
              <p className="mt-4 text-xs text-[#a39c92]">This finish is published by Wuling. A matching photograph is not in this concept, so the image is not recolored.</p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-6xl md:text-8xl">Moving with Indonesia.</h2>
          <ol className="mt-12 space-y-8">
            {timeline.map((item) => (
              <li key={item.year} className="grid gap-2 border-t border-white/10 pt-6 md:grid-cols-12">
                <p className="display text-4xl md:col-span-2">{item.year}</p>
                <div className="md:col-span-10">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-[#c9c2b6]">{item.copy}</p>
                  <p className="mt-2 text-xs text-[#8f887e]">{item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#101218] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display max-w-4xl text-6xl md:text-8xl">The electric lineup keeps evolving.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article>
              <h3 className="display text-4xl">Aira ev</h3>
              <p className="mt-3 text-sm text-[#c9c2b6]">Introduced in July 2026 as a four-door electric city car, with two range choices and three announced colors: Starry Black, Galaxy Blue and Milk Tea.</p>
            </article>
            <article>
              <h3 className="display text-4xl">Eksion</h3>
              <p className="mt-3 text-sm text-[#c9c2b6]">Shown at IIMS 2026 and launched in April 2026 with EV and plug-in hybrid variants. EV range is stated up to 530 km CLTC.</p>
            </article>
            <article>
              <h3 className="display text-4xl">Air ev, BinguoEV, Cloud EV</h3>
              <p className="mt-3 text-sm text-[#c9c2b6]">The earlier Indonesian electric lineup remains in market, from the compact Air ev to Cloud EV.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8" id="compare">
        <h2 className="display text-6xl">Compare</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {(["all", "city", "family", "premium", "utility"] as const).map((item) => (
            <button key={item} className={`btn ${filter === item ? "btn-solid" : ""}`} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.14em] text-[#a39c92]">
              <tr>{["Model", "Type", "Range", "Charging", "Seating"].map((h) => <th key={h} className="border-b border-white/10 py-3 pr-4 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {compared.map((item) => (
                <tr key={item.slug}>
                  <td className="border-b border-white/10 py-4 pr-4">{item.name}</td>
                  <td className="border-b border-white/10 py-4 pr-4">{item.type}</td>
                  <td className="border-b border-white/10 py-4 pr-4">{item.highlights[0]?.value}</td>
                  <td className="border-b border-white/10 py-4 pr-4">{item.highlights.find((s) => s.label.toLowerCase().includes("charg"))?.value ?? "See model page"}</td>
                  <td className="border-b border-white/10 py-4">{item.highlights.find((s) => s.label === "Seating")?.value ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {compared.length === 0 && (
          <p className="mt-6 text-sm text-[#c9c2b6]">No passenger model in this concept is filed as utility. A commercial EV such as Mitra EV exists in Wuling’s range, but it is not specced here.</p>
        )}
        <p className="mt-4 text-xs text-[#8f887e]">No ranking is applied. Source: Wuling Indonesia.</p>
      </section>

      <section className="bg-[#f3efe6] px-5 py-24 text-[#14161a] md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-6xl">What are you looking for?</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              ["daily", "Daily city driving"],
              ["family", "Family mobility"],
              ["longer", "Longer journeys"],
              ["compact", "Compact EV"],
              ["spacious", "Spacious EV"],
            ].map(([id, label]) => (
              <button key={id} className="btn" style={{ color: "#14161a", borderColor: "rgba(20,22,26,0.3)" }} onClick={() => setNeed(id)}>{label}</button>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {matches.map((item) => (
              <li key={item.slug}><Link href={`/vehicles/${item.slug}`} className="display text-4xl">{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="display text-6xl">Find a dealer.</h2>
          <p className="mt-4 text-sm text-[#c9c2b6]">This concept does not invent addresses. Dealer search, test drive and contact stay on Wuling&apos;s own pages.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href={officialLinks.home} target="_blank" rel="noreferrer">Find a Dealer</a>
            <a className="btn" href={officialLinks.testDrive} target="_blank" rel="noreferrer">Book a Test Drive</a>
            <a className="btn" href={officialLinks.home} target="_blank" rel="noreferrer">Contact Wuling</a>
          </div>
        </div>
        <div>
          <h2 className="display text-6xl">Life with electric.</h2>
          <p className="mt-4 text-sm text-[#c9c2b6]">Lifestyle context without invented owner quotes. Photographs are documentary images of real Wuling EVs.</p>
          <img src="/media/cloud-white.jpg" alt="Cloud EV in an everyday setting in Bandung" className="mt-6 aspect-[16/10] rounded-3xl object-cover" />
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-6xl">Journal</h2>
          <p className="mt-3 text-sm text-[#a39c92]">Demo essays for this redesign. They are not reprints of official Wuling articles.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {journal.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="border border-white/10 p-5">
                <p className="eyebrow">{article.category}</p>
                <h3 className="mt-4 text-2xl">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="display text-6xl md:text-7xl">Moving toward a more electric future.</h2>
          <p className="mt-6 text-lg text-[#d5cec3]">Electric mobility can contribute to a more efficient approach to everyday transportation.</p>
        </div>
      </section>

      <section className="relative min-h-[100svh] overflow-hidden">
        <img src="/media/air-jakarta.jpg" alt="Wuling Air ev in Jakarta" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 md:px-10">
          <h2 className="display text-7xl md:text-9xl">Ready to<br />go electric?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-solid" href="/electric">Explore Wuling EV</Link>
            <a className="btn" href={officialLinks.home} target="_blank" rel="noreferrer">Find a Dealer</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function InteriorBlock() {
  const cloud = vehicles.find((item) => item.slug === "cloud-ev");
  const [spot, setSpot] = useState(cloud?.hotspots[0]);
  if (!cloud?.interiorImage || !spot) return null;
  return (
    <section className="bg-black px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="display text-6xl">Interior</h2>
          <p className="mt-4 text-sm text-[#c9c2b6]">Cloud EV cabin photograph. Hotspots use features listed on the official Cloud EV page.</p>
          <div className="mt-6 space-y-3">
            {cloud.hotspots.map((item) => (
              <button key={item.id} className="block text-left" onClick={() => setSpot(item)}>
                <span className="eyebrow">{item.label}</span>
                {spot.id === item.id && <p className="mt-1 text-sm">{item.copy}</p>}
              </button>
            ))}
          </div>
        </div>
        <figure className="shot relative aspect-[16/10] overflow-hidden rounded-3xl md:col-span-7">
          <img src={cloud.interiorImage.src} alt={cloud.interiorImage.alt} />
          <span className="absolute h-3 w-3 rounded-full bg-white" style={{ left: spot.x, top: spot.y }} />
        </figure>
      </div>
    </section>
  );
}
