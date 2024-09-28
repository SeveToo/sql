import { SqlCheatSheetEnhanced } from "@/components/sql-cheat-sheet-enhanced";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SqlCheatSheetEnhanced />
    </div>
  );
}
