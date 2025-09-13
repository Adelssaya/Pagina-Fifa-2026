// app/ui/acme-logo.tsx
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./fonts";

export default function AcmeLogo() {
  return (
    <div className="flex items-center gap-2">
      <GlobeAltIcon className="h-6 w-6 text-emerald-600" />
      <span className={`${lusitana.className} text-xl font-bold text-gray-900`}>
        FIFA Store 2026
      </span>
    </div>
  );
}
