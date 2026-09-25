import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { journal } from "@/data/content";

const bodies: Record<string, string[]> = {
  "understanding-electric-mobility": [
    "An electric car changes when energy is collected, not only how the car moves. For a city trip, that can mean leaving home with a battery that was filled overnight.",
    "Wuling's Indonesian range now covers very different body sizes, from the compact Air ev to the seven-seat Eksion. The useful question is which published range and cabin fit the trip, not which model is declared the winner.",
  ],
  "how-ev-charging-works": [
    "Alternating-current charging is the slower path, often at home. Direct-current charging is the faster path at a public station. Wuling publishes both ideas, and it publishes minute figures only for some models.",
    "On BinguoEV, the official page states about 5.5 hours for AC from 20 to 100 percent, and about 35 minutes for DC from 30 to 80 percent. Cloud EV states about 7 hours and about 30 minutes for the same windows. Those numbers should not be copied onto Aira ev or Eksion.",
  ],
  "inside-modern-ev-design": [
    "Screens, seat trim and roof glass differ by variant. Air ev Pro lists a 10.25-inch floating screen and Wuling Indonesian Command. Cloud EV lists an 8.8-inch driver display and a 15.6-inch panel. Eksion lists a 12.8-inch screen.",
    "This essay does not invent a dashboard. If a feature is not on the model page, it is not presented as standard.",
  ],
  "evolution-of-urban-mobility": [
    "Air ev entered production in Indonesia in 2022. BinguoEV followed. Cloud EV widened the range toward longer trips. In 2026 Eksion added a three-row electric SUV and a plug-in hybrid, and Aira ev added another four-door city car.",
    "The through-line is choice of size and energy, built around products Wuling actually sells.",
  ],
};

export function generateStaticParams() {
  return journal.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journal.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | HINAI Tech Concept` : "Journal" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journal.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <PageShell>
      <article className="mx-auto max-w-[760px] px-5 pb-24 md:px-8">
        <p className="eyebrow">{article.category} · Concept essay</p>
        <h1 className="display mt-4 text-6xl">{article.title}</h1>
        <p className="mt-4 text-lg text-[#d5cec3]">{article.standfirst}</p>
        {(bodies[article.slug] ?? []).map((paragraph) => (
          <p key={paragraph} className="mt-6 leading-relaxed text-[#e7e1d6]">{paragraph}</p>
        ))}
      </article>
    </PageShell>
  );
}
