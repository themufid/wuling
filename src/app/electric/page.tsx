import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { vehicles } from "@/data/content";

export const metadata = { title: "Electric | Wuling Electric Experience" };

export default function ElectricPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <h1 className="display text-6xl md:text-8xl">Electric. Made for life.</h1>
        <p className="mt-6 text-lg text-[#d5cec3]">
          Wuling&apos;s Indonesian electric story runs from Air ev in 2022 through BinguoEV and Cloud EV, then Eksion and Aira ev in 2026. This page collects published positioning only.
        </p>
        <ul className="mt-10 space-y-6">
          {vehicles.map((vehicle) => (
            <li key={vehicle.slug} className="border-t border-white/10 pt-6">
              <Link href={`/vehicles/${vehicle.slug}`} className="display text-4xl">{vehicle.name}</Link>
              <p className="mt-2 text-sm text-[#c9c2b6]">{vehicle.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
