import { PageShell } from "@/components/page-shell";
import { officialLinks, vehicles } from "@/data/content";

export const metadata = { title: "Charging | Wuling Electric Experience" };

export default function ChargingPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <h1 className="display text-6xl md:text-8xl">Charge your way.</h1>
        <p className="mt-6 text-[#d5cec3]">Wuling publishes home charging for Air ev and a charging-location page for the wider EV ecosystem. Times below are copied only from model pages that state them.</p>
        <img src="/media/air-charge.jpg" alt="Air ev charging" className="mt-8 aspect-[16/9] rounded-3xl object-cover" />
        <ul className="mt-10 space-y-4 text-sm">
          {vehicles.map((vehicle) => (
            <li key={vehicle.slug} className="border-t border-white/10 pt-4">
              <strong>{vehicle.name}.</strong> {vehicle.chargingNotes[0]}
            </li>
          ))}
        </ul>
        <a className="btn mt-8" href={officialLinks.charging} target="_blank" rel="noreferrer">Explore Charging</a>
      </div>
    </PageShell>
  );
}
