import { BadgeCheck, Users, ClipboardCheck, Globe2 } from "lucide-react";

const stats = [
  { icon: BadgeCheck,     value: "18+",  label: "Years Experience", color: "text-blue-600"   },
  { icon: Users,          value: "450+", label: "Clients Served",   color: "text-orange-500" },
  { icon: ClipboardCheck, value: "12K+", label: "Placements",       color: "text-blue-600"   },
  { icon: Globe2,         value: "4",    label: "Global Offices",   color: "text-orange-500" },
];

export default function StatsCard() {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-[1440px] px-16 pb-10">
        <div
          className="bg-white rounded-2xl grid grid-cols-2 sm:grid-cols-4"
          style={{ boxShadow: '0 8px 40px rgba(15, 42, 82, 0.12)', padding: '28px 40px' }}
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2 py-2"
              style={{ borderRight: i < stats.length - 1 ? '1px solid #E8EDF3' : 'none' }}
            >
              <span
                className="flex items-center justify-center rounded-full mb-1"
                style={{ width: '44px', height: '44px', background: '#FFF3DC' }}
              >
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={2.2} />
              </span>
              <span className="text-2xl font-bold text-slate-900 leading-none">{value}</span>
              <span className="text-xs text-slate-500 leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
