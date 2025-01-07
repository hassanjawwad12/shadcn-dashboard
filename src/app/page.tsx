import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid grid-rows-2 gap-[32px]">
          <Card />
          <Card />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
      <Card className="h-[300px]">j</Card>
      <Card className="h-[300px]">k</Card>
      <Card className="h-[300px]">j</Card>
      </div>
    </div>
  );
}
