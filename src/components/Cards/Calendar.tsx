'use client'
import { ResponsiveCalendar } from '@nivo/calendar';
import { Card, CardContent,CardHeader,CardTitle,CardDescription } from '../ui/card';

interface DayData {
  value: number;
  day: string;
}

interface MyResponsiveTimeRangeProps {
  data: DayData[];
}

const MyResponsiveTimeRange = ({ data }: MyResponsiveTimeRangeProps) => {
  return (
    <div
      style={{
        height: '160px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ResponsiveCalendar
        data={data}
        from="2018-01-01"
        to="2018-12-31"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  );
};

const Calendar = () => {

function generateDayData(): DayData[] {
    const startDate = new Date("2018-01-01");
    const endDate = new Date("2018-12-31");
    const numberOfEntries = 500;
  
    const randomDate = (start: Date, end: Date): string => {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      return date.toISOString().split("T")[0];
    };
  
    const randomValue = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
  
    const data: DayData[] = Array.from({ length: numberOfEntries }, () => ({
      value: randomValue(20, 800), 
      day: randomDate(startDate, endDate),
    }));
  
    return data;
  }
  
  const data: DayData[] = generateDayData();

  return (
    <Card>
         <CardHeader>
            <CardTitle>
                Calendar
            </CardTitle>
            <CardDescription>
               These are the number of years
            </CardDescription>
        </CardHeader>
      <CardContent className="flex items-center h-[120px] w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default Calendar;
