import { PenTool } from "lucide-react"; // or any icon you want

export function DoingBox({
  heading,
  data,
}: {
  heading: string;
  data: string;
}) {
  return (
    <div className="relative rounded-2xl p-px bg-linear-to-br from-white/20 via-white/5 to-transparent">
      <div className="rounded-2xl bg-[#1e1e1f] p-6 text-center">
        
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
          <PenTool size={22} />
        </div>

        <h3 className="text-sm md:text-lg font-semibold text-white">
          {heading}
        </h3>

        <p className="mt-2 text-xs md:text-sm text-white/70 leading-relaxed">
          {data}
        </p>
      </div>
    </div>
  );
}
