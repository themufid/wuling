import { PageShell } from "@/components/page-shell";

export const metadata = { title: "Technology | Wuling Electric Experience" };

export default function TechnologyPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <h1 className="display text-6xl md:text-8xl">Powered by electric.</h1>
        <p className="mt-6 text-[#d5cec3]">
          MAGIC is Wuling&apos;s own acronym: Multifunction Unitized Structure Technology, Advanced Cell Safety, Greater Performance, Intelligent Management, and Combustion Free. The company says MUST, inspired by aircraft-wing structure, raises structural strength by up to 60% at the same material weight, and that ceramic-coated cells plus a BMS and cloud AI watch more than 240 safety controls.
        </p>
        <p className="mt-4 text-[#d5cec3]">
          MAGIC Battery Pro, used on Eksion, is described with a five-zero safety concept: zero spontaneous combustion, zero diffusion, zero leakage, zero water ingress, and zero intrusion. Those are Wuling&apos;s published statements.
        </p>
        <p className="mt-6 text-xs text-[#8f887e]">Source: Wuling Indonesia press releases on MAGIC Battery, the Cikarang battery line, and MAGIC Battery Pro.</p>
      </div>
    </PageShell>
  );
}
