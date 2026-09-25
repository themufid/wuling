import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { journal } from "@/data/content";

export const metadata = { title: "Journal | Wuling Electric Experience" };

export default function JournalPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <h1 className="display text-6xl">Journal</h1>
        <p className="mt-4 text-sm text-[#a39c92]">Original concept essays. Not reproductions of Wuling articles.</p>
        <ul className="mt-10 space-y-8">
          {journal.map((article) => (
            <li key={article.slug}>
              <p className="eyebrow">{article.category}</p>
              <Link href={`/journal/${article.slug}`} className="mt-2 block text-3xl">{article.title}</Link>
              <p className="mt-2 text-sm text-[#c9c2b6]">{article.standfirst}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
