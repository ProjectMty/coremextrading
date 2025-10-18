import SectionBG from './SectionBG';

const items = [
  'Receive parcels from US marketplaces and retailers',
  'Package consolidation',
  'Customs clearance into Mexico',
  'Label, prep, and deliver to last mile carrier for final delivery to client',
  'Returns logistics : we receive your returns in Mexico and complete reverse logistics to return back to the USA.',
];

export default function Services() {
  return (
    <SectionBG src="/bg2.svg" minH="min-h-[520px]" objectPosition="bg-center">
      <div className="w-full py-10 md:py-12">
        <h2 className="text-center text-white font-extrabold tracking-[0.08em] text-[22px] md:text-[26px]">
          SERVICES
        </h2>

        {/* Carril de cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {items.map((label) => (
            <div
              key={label}
              className="rounded-[16px] md:rounded-[18px] p-4 md:p-5 min-h-[150px]
                         bg-white/5 ring-1 ring-black/20 shadow-[0_14px_24px_rgba(0,0,0,0.38)] text-white"
            >
              <div className="h-10 w-10 rounded-md bg-white/15 mb-3" />
              <p className="text-white/95 text-[13px] leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBG>
  );
}
