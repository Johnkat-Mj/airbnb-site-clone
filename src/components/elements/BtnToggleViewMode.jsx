import { LucideMap } from "lucide-react";

export function BtnToggleViewMode() {
  return (
    <div className="fixed bottom-14 md:bottom-16 inset-x-0 h-max flex justify-center">
        <button className="rounded-full py-3 px-6 bg-gray-900 text-white flex items-center gap-2 font-semibold">
            Showmap
            <LucideMap size={20}/>
        </button>
    </div>
  )
}
