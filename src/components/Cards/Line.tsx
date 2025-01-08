'use client';
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

type DataPoint = {
  x: string;
  y: number;
};

type CountryData = {
  id: string;
  color: string;
  data: DataPoint[];
};

type LineProps = {
  data: CountryData[];
};

const MyResponsiveLine = ({ data }: LineProps) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    
    />
  );
};

const Line = () => {
    const data: CountryData[] = [
        {
          "id": "japan",
          "color": "hsl(341, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 110
            },
            {
              "x": "helicopter",
              "y": 271
            },
            {
              "x": "boat",
              "y": 244
            },
            {
              "x": "train",
              "y": 53
            },
            {
              "x": "subway",
              "y": 297
            },
            {
              "x": "bus",
              "y": 25
            },
            {
              "x": "car",
              "y": 285
            },
            {
              "x": "moto",
              "y": 194
            },
            {
              "x": "bicycle",
              "y": 81
            },
            {
              "x": "horse",
              "y": 7
            },
            {
              "x": "skateboard",
              "y": 64
            },
            {
              "x": "others",
              "y": 121
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(47, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 236
            },
            {
              "x": "helicopter",
              "y": 298
            },
            {
              "x": "boat",
              "y": 62
            },
            {
              "x": "train",
              "y": 208
            },
            {
              "x": "subway",
              "y": 230
            },
            {
              "x": "bus",
              "y": 72
            },
            {
              "x": "car",
              "y": 109
            },
            {
              "x": "moto",
              "y": 147
            },
            {
              "x": "bicycle",
              "y": 101
            },
            {
              "x": "horse",
              "y": 151
            },
            {
              "x": "skateboard",
              "y": 110
            },
            {
              "x": "others",
              "y": 214
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(94, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 61
            },
            {
              "x": "helicopter",
              "y": 265
            },
            {
              "x": "boat",
              "y": 173
            },
            {
              "x": "train",
              "y": 3
            },
            {
              "x": "subway",
              "y": 116
            },
            {
              "x": "bus",
              "y": 163
            },
            {
              "x": "car",
              "y": 251
            },
            {
              "x": "moto",
              "y": 264
            },
            {
              "x": "bicycle",
              "y": 91
            },
            {
              "x": "horse",
              "y": 34
            },
            {
              "x": "skateboard",
              "y": 143
            },
            {
              "x": "others",
              "y": 219
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(115, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 78
            },
            {
              "x": "helicopter",
              "y": 158
            },
            {
              "x": "boat",
              "y": 180
            },
            {
              "x": "train",
              "y": 188
            },
            {
              "x": "subway",
              "y": 262
            },
            {
              "x": "bus",
              "y": 250
            },
            {
              "x": "car",
              "y": 186
            },
            {
              "x": "moto",
              "y": 93
            },
            {
              "x": "bicycle",
              "y": 114
            },
            {
              "x": "horse",
              "y": 171
            },
            {
              "x": "skateboard",
              "y": 115
            },
            {
              "x": "others",
              "y": 186
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(350, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 180
            },
            {
              "x": "helicopter",
              "y": 160
            },
            {
              "x": "boat",
              "y": 137
            },
            {
              "x": "train",
              "y": 6
            },
            {
              "x": "subway",
              "y": 146
            },
            {
              "x": "bus",
              "y": 87
            },
            {
              "x": "car",
              "y": 8
            },
            {
              "x": "moto",
              "y": 177
            },
            {
              "x": "bicycle",
              "y": 210
            },
            {
              "x": "horse",
              "y": 171
            },
            {
              "x": "skateboard",
              "y": 212
            },
            {
              "x": "others",
              "y": 177
            }
          ]
        }
      ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stats</CardTitle>
        <CardDescription>These are the stats of years</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center h-[220px] w-full">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
};

export default Line;
