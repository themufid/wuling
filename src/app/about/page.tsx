import { PageShell } from "@/components/page-shell";
import { concept, officialLinks, timeline } from "@/data/content";

export const metadata = { title: "About | Wuling Electric Experience" };

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <p className="eyebrow">Independent concept</p>
        <h1 className="display mt-3 text-6xl md:text-8xl">About this concept.</h1>
        <p className="mt-6 text-[#d5cec3]">
          Wuling Electric Experience is a portfolio redesign by HINAI Tech. It is not an official Wuling Motors website, not a commissioned redesign, and not a claim of partnership.
        </p>
        <ol className="mt-12 space-y-6">
          {timeline.map((item) => (
            <li key={item.year}>
              <p className="display text-3xl">{item.year} — {item.title}</p>
              <p className="mt-2 text-sm text-[#c9c2b6]">{item.copy}</p>
            </li>
          ))}
        </ol>
        <a className="btn mt-10" href={officialLinks.home} target="_blank" rel="noreferrer">Official Wuling Indonesia</a>
        <a className="btn ml-3 mt-10" href={concept.hinai} target="_blank" rel="noreferrer">View HINAI Tech</a>
      </div>
    </PageShell>
  );
}
