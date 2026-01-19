export function DoingBox({ heading, data }: { heading: string; data: string }) {
  return (
    <div className="relative rounded-2xl p-px bg-linear-to-br text-sm from-white/20 via-white/5 to-transparent">
      <div className="rounded-2xl bg-[#1e1e1f] p-4">
        <h3 className="text-md  font-semibold text-white">{heading}</h3>
        <p className="text-white/70 mt-2">{data}</p>
      </div>
    </div>
  );
}
