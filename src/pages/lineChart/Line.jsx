import { Box, useTheme } from "@mui/material"
import { ResponsiveLine } from '@nivo/line'


const data = [
  {
    "id": "france",
    "color": "hsl(128, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 57
      },
      {
        "x": "helicopter",
        "y": 145
      },
      {
        "x": "boat",
        "y": 242
      },
      {
        "x": "train",
        "y": 229
      },
      {
        "x": "subway",
        "y": 180
      },
      {
        "x": "bus",
        "y": 64
      },
      {
        "x": "car",
        "y": 172
      },
      {
        "x": "moto",
        "y": 198
      },
      {
        "x": "bicycle",
        "y": 198
      },
      {
        "x": "horse",
        "y": 55
      },
      {
        "x": "skateboard",
        "y": 174
      },
      {
        "x": "others",
        "y": 192
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(230, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 102
      },
      {
        "x": "helicopter",
        "y": 190
      },
      {
        "x": "boat",
        "y": 31
      },
      {
        "x": "train",
        "y": 271
      },
      {
        "x": "subway",
        "y": 61
      },
      {
        "x": "bus",
        "y": 15
      },
      {
        "x": "car",
        "y": 93
      },
      {
        "x": "moto",
        "y": 272
      },
      {
        "x": "bicycle",
        "y": 135
      },
      {
        "x": "horse",
        "y": 261
      },
      {
        "x": "skateboard",
        "y": 207
      },
      {
        "x": "others",
        "y": 8
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(62, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 139
      },
      {
        "x": "helicopter",
        "y": 153
      },
      {
        "x": "boat",
        "y": 90
      },
      {
        "x": "train",
        "y": 138
      },
      {
        "x": "subway",
        "y": 152
      },
      {
        "x": "bus",
        "y": 63
      },
      {
        "x": "car",
        "y": 17
      },
      {
        "x": "moto",
        "y": 142
      },
      {
        "x": "bicycle",
        "y": 217
      },
      {
        "x": "horse",
        "y": 210
      },
      {
        "x": "skateboard",
        "y": 203
      },
      {
        "x": "others",
        "y": 53
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(65, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 101
      },
      {
        "x": "helicopter",
        "y": 76
      },
      {
        "x": "boat",
        "y": 212
      },
      {
        "x": "train",
        "y": 208
      },
      {
        "x": "subway",
        "y": 33
      },
      {
        "x": "bus",
        "y": 8
      },
      {
        "x": "car",
        "y": 247
      },
      {
        "x": "moto",
        "y": 292
      },
      {
        "x": "bicycle",
        "y": 267
      },
      {
        "x": "horse",
        "y": 283
      },
      {
        "x": "skateboard",
        "y": 163
      },
      {
        "x": "others",
        "y": 148
      }
    ]
  }
]

// eslint-disable-next-line react/prop-types
const Line = ({isDashboard= false}) => {
  const theme = useTheme()
  return (
    <Box sx={{height: isDashboard?   "280px" :"75vh"}}>
    <ResponsiveLine
           data={data}
           curve="catmullRom"
           theme={{
             text: {
               fontSize: 11,
               fill: theme.palette.text.primary,
               outlineWidth: 0,
               outlineColor: "transparent",
             },
             axis: {
               domain: {
                 line: {
                   stroke: theme.palette.divider,
                   strokeWidth: 1,
                 },
               },
               legend: {
                 text: {
                   fontSize: 12,
                   fill: theme.palette.text.primary,
                   outlineWidth: 0,
                   outlineColor: "transparent",
                 },
               },
               ticks: {
                 line: {
                   stroke: theme.palette.divider,
                   strokeWidth: 1,
                 },
                 text: {
                   fontSize: 11,
                   fill: theme.palette.text.secondary,
                   outlineWidth: 0,
                   outlineColor: "transparent",
                 },
               },
             },
             grid: {
               line: {
                 stroke: theme.palette.divider,
                 strokeWidth: 0,
               },
             },
             legends: {
               title: {
                 text: {
                   fontSize: 11,
                   fill: theme.palette.text.primary,
                   outlineWidth: 0,
                   outlineColor: "transparent",
                 },
               },
               text: {
                 fontSize: 11,
                 fill: theme.palette.text.primary,
                 outlineWidth: 0,
                 outlineColor: "transparent",
               },
               ticks: {
                 line: {},
                 text: {
                   fontSize: 10,
                   fill: theme.palette.text.primary,
                   outlineWidth: 0,
                   outlineColor: "transparent",
                 },
               },
             },
             annotations: {
               text: {
                 fontSize: 13,
                 fill: theme.palette.text.primary,
                 outlineWidth: 2,
                 outlineColor: "#ffffff",
                 outlineOpacity: 1,
               },
               link: {
                 stroke: "#000000",
                 strokeWidth: 1,
                 outlineWidth: 2,
                 outlineColor: "#ffffff",
                 outlineOpacity: 1,
               },
               outline: {
                 stroke: "#000000",
                 strokeWidth: 2,
                 outlineWidth: 2,
                 outlineColor: "#ffffff",
                 outlineOpacity: 1,
               },
               symbol: {
                 fill: "#000000",
                 outlineWidth: 2,
                 outlineColor: "#ffffff",
                 outlineOpacity: 1,
               },
             },
             tooltip: {
               container: {
                 background: theme.palette.background.default,
                 color: theme.palette.text.primary,
                 fontSize: 12,
               },
               basic: {},
               chip: {},
               table: {},
               tableCell: {},
               tableCellValue: {},
             },
           }}
           margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
           xScale={{ type: 'point' }}
           yScale={{
               type: 'linear',
               min: 'auto',
               max: 'auto',
               stacked: true,
               reverse: false
           }}
           yFormat=" >-.2f"
           axisTop={null}
           axisRight={null}
           axisBottom={{
               tickSize: 5,
               tickPadding: 5,
               tickRotation: 0,
               legend: isDashboard? null: 'transportation',
               legendOffset: 36,
               legendPosition: 'middle',
               truncateTickAt: 0
           }}
           axisLeft={{
               tickSize: 5,
               tickPadding: 5,
               tickRotation: 0,
               legend: isDashboard? null: 'Count',
               legendOffset: -45,
               legendPosition: 'middle',
               truncateTickAt: 0
           }}
           pointSize={10}
           pointColor={{ theme: 'background' }}
           pointBorderWidth={2}
           pointBorderColor={{ from: 'serieColor' }}
           pointLabelYOffset={-12}
           enableTouchCrosshair={true}
           useMesh={true}
           legends={[
               {
                   anchor: 'bottom-right',
                   direction: 'column',
                   justify: false,
                   translateX: 100,
                   translateY: 0,
                   itemsSpacing: 0,
                   itemDirection: 'left-to-right',
                   itemWidth: 80,
                   itemHeight: 20,
                   itemOpacity: 0.75,
                   symbolSize: 12,
                   symbolShape: 'circle',
                   symbolBorderColor: 'rgba(0, 0, 0, .5)',
                   effects: [
                       {
                           on: 'hover',
                           style: {
                               itemBackground: 'rgba(0, 0, 0, .03)',
                               itemOpacity: 1
                           }
                       }
                   ]
               }
           ]}
       />
       </Box>
  )
}

export default Line