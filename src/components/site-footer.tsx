import Link from "next/link";
import { concept, officialLinks } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07080b]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="display text-5xl">Wuling</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c9c2b6]">{concept.credit}</p>
          <p className="mt-2 max-w-md text-sm text-[#8f887e]">{concept.creditSub}</p>
          <a className="btn mt-6" href={concept.hinai} target="_blank" rel="noreferrer">View HINAI Tech</a>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-4">
          <div className="space-y-2">
            <p className="eyebrow">Concept</p>
            <Link className="block" href="/electric">Electric</Link>
            <Link className="block" href="/vehicles">Vehicles</Link>
            <Link className="block" href="/technology">Technology</Link>
            <Link className="block" href="/charging">Charging</Link>
            <Link className="block" href="/experience">Experience</Link>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Official Wuling</p>
            <a className="block" href={officialLinks.dealer} target="_blank" rel="noreferrer">Dealer</a>
            <a className="block" href={officialLinks.testDrive} target="_blank" rel="noreferrer">Test drive</a>
            <a className="block" href={officialLinks.home} target="_blank" rel="noreferrer">About / wuling.id</a>
            <a className="block" href={officialLinks.charging} target="_blank" rel="noreferrer">Charging map</a>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-[#8f887e] md:col-span-3">{concept.disclaimer}</p>
      </div>
    </footer>
  );
}
