import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Line from "@/components/Cards/Line";
import { TableComponent } from "@/components/Cards/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[24px]">
      <div className="grid grid-cols-2 gap-[24px]">
        <General />
        <div className="grid gap-[24px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[24px] lg:h-[300px] overflow-hidden mb-[24px]">
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
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>
              Users
            </CardTitle>
            <CardDescription>
              These are the users for this month
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
      </div>
    </div>
  );
}
