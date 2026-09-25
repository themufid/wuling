import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { vehicles } from "@/data/content";

export const metadata = { title: "Vehicles | Wuling Electric Experience" };

export default function VehiclesPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 md:px-8">
        <p className="eyebrow">Lineup</p>
        <h1 className="display mt-3 text-6xl md:text-8xl">Vehicles</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <article key={vehicle.slug} className="border border-white/10">
              <div className="shot aspect-[16/9]">
                {vehicle.heroImage ? <img src={vehicle.heroImage} alt="" /> : <div className="flex h-full items-end p-6 text-sm text-[#a39c92]">See official photography on wuling.id</div>}
              </div>
              <div className="p-6">
                <h2 className="display text-5xl">{vehicle.name}</h2>
                <p className="mt-3 text-sm text-[#c9c2b6]">{vehicle.summary}</p>
                <Link className="btn mt-5" href={`/vehicles/${vehicle.slug}`}>Explore Model</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
