import { PageShell } from "@/components/page-shell";
import { officialLinks } from "@/data/content";

export const metadata = { title: "Experience | Wuling Electric Experience" };

export default function ExperiencePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <h1 className="display text-6xl md:text-8xl">More than a car.</h1>
        <p className="mt-6 text-[#d5cec3]">An electric vehicle experience is more than the drive. It&apos;s the technology, charging, service and digital experience around it.</p>
        <p className="mt-4 text-sm text-[#c9c2b6]">MyWuling+ is Wuling&apos;s app for vehicle information, maintenance records, service booking and dealer connection. Test drives are booked on wuling.id or at an authorized dealer. This concept does not list dealer addresses.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn" href={officialLinks.myWuling} target="_blank" rel="noreferrer">MyWuling+</a>
          <a className="btn" href={officialLinks.testDrive} target="_blank" rel="noreferrer">Book a Test Drive</a>
          <a className="btn" href={officialLinks.afterSales} target="_blank" rel="noreferrer">After-sales</a>
        </div>
      </div>
    </PageShell>
  );
}
