import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import Line from "@/components/Cards/Line";
import { TableComponent } from "@/components/Cards/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
        <Line />
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>
              Orders
            </CardTitle>
            <CardDescription>
              These are the orders for this month
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <TableComponent />
          </div>
        </Card>
        <Card>j</Card>
      </div>
    </div>
  );
}
