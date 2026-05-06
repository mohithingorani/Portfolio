import {  CalendarIcon, LocationIcon, MailIcon, PhoneIcon } from "./Icons";
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

  const renderValue = () => {
    if (icon === "mail") {
      return (
        <a
          href="mailto:mohithingorani2003@gmail.com"
          className="text-sm text-white/90 hover:underline font-medium"
        >
          {value}
        </a>
      );
    }
    if (icon === "phone") {
      return (
        <a
          href={`tel:${value.replace(/-/g, "")}`}
          className="text-sm text-white/90 hover:underline font-medium"
        >
          {value}
        </a>
      );
    }
    return (
      <span className="text-sm text-white/90 font-medium break-all">
        {value.length > 20 ? value.slice(0, 20) + "..." : value}
      </span>
    );
  };

  return (
    <div className="flex justify-start items-center gap-5 poppins-normal w-full">
      <div className="relative rounded-xl p-px bg-linear-to-br from-white/20 via-white/5 to-transparent ">
        <div className="rounded-xl bg-[#1e1e1f] p-3">
          {Icon && <Icon className="w-5 h-5 text-yellow-200" />}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-white/40">
          {heading}
        </span>
        {renderValue()}
      </div>
    </div>
  );
}