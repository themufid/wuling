import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getVehicle, vehicles } from "@/data/content";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  return { title: vehicle ? `${vehicle.name} | Wuling Electric Experience` : "Vehicle" };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  return (
    <PageShell>
      <article className="mx-auto max-w-[1440px] px-5 pb-24 md:px-8">
        <p className="eyebrow">{vehicle.type}</p>
        <h1 className="display mt-3 text-6xl md:text-8xl">{vehicle.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#d5cec3]">{vehicle.summary}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {vehicle.highlights.map((spec) => (
            <div key={spec.label} className="border border-white/10 p-4">
              <p className="eyebrow">{spec.label}</p>
              <p className="mt-2 text-xl">{spec.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#8f887e]">Source: Wuling Indonesia. {vehicle.source}</p>
        {vehicle.priceNote && <p className="mt-4 max-w-3xl text-sm text-[#c9c2b6]">{vehicle.priceNote}</p>}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {vehicle.gallery.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} className="aspect-[16/10] rounded-2xl object-cover" />
              <figcaption className="mt-2 text-xs text-[#8f887e]">{image.credit}</figcaption>
            </figure>
          ))}
        </div>
        <h2 className="display mt-14 text-5xl">Official specification highlights</h2>
        <dl className="mt-6 divide-y divide-white/10">
          {vehicle.specs.map((spec) => (
            <div key={spec.label} className="grid gap-1 py-4 md:grid-cols-3">
              <dt className="text-sm text-[#a39c92]">{spec.label}</dt>
              <dd className="md:col-span-2">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-8 space-y-2 text-sm text-[#c9c2b6]">
          {vehicle.chargingNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-solid" href={vehicle.officialUrl} target="_blank" rel="noreferrer">Official model page</a>
          <Link className="btn" href="/#compare">Compare</Link>
        </div>
      </article>
    </PageShell>
  );
}
