import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
   <div className="grid grid-cols-2 gap-[32px]">
    <General/>
    <div className="grid grid-cols-2 gap-[32px]">
    <Card/>
    <Card/>
    </div>
   </div>
  );
}
