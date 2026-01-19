import { BookIcon } from "./Icons";

export default function Box() {
  return (
    <div>
      <div className="relative w-fit rounded-xl p-px bg-linear-to-br from-white/20 via-white/5 to-transparent ">
        <div className="rounded-xl bg-[#1e1e1f] p-3">
          <BookIcon className="w-5 h-5 text-yellow-200" />
        </div>
      </div>
    </div>
  );
}
