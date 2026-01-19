import { CalendarIcon, LocationIcon, MailIcon, PhoneIcon } from "./Icons";

export function InfoBox({
  heading,
  value,
  icon,
}: {
  heading: string;
  value: string;
  icon: string;
}) {
  const iconMap = {
    mail: MailIcon,
    phone: PhoneIcon,
    calendar: CalendarIcon,
    location: LocationIcon,
  };
  const Icon = iconMap[icon as keyof typeof iconMap];
  return (
    <div className="flex justify-start items-center gap-5 poppins-normal w-full">
      <div className="relative rounded-xl p-px bg-linear-to-br from-white/20 via-white/5 to-transparent ">
        <div className="rounded-xl bg-[#1e1e1f] p-3">
          {Icon && <Icon className="w-5 h-5 text-yellow-300" />}
        </div>
      </div>
      <div className="text-xs max-w-full flex flex-col gap-1">
        <div className="text-white/40 mb-0.5">{heading}</div>
        <div className="text-white/90">{value}</div>
      </div>
    </div>
  );
}
