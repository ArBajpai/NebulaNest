import React from 'react'
import {
CartesianGrid,
Legend,
Line,
LineChart,
ResponsiveContainer,
Tooltip,
XAxis,
YAxis,
} from "recharts";
const data = [
  { label: "January", RevenueGrowth: 5000, ConversionRate: 3000 },
  { label: "February", RevenueGrowth: 5200, ConversionRate: 3200 },
  { label: "March", RevenueGrowth: 5500, ConversionRate: 3500 },
  { label: "April", RevenueGrowth: 4800, ConversionRate: 2900 },
  { label: "May", RevenueGrowth: 5100, ConversionRate: 3100 },
  { label: "June", RevenueGrowth: 5300, ConversionRate: 3300 },
  { label: "July", RevenueGrowth: 5400, ConversionRate: 3400 },
  { label: "August", RevenueGrowth: 5600, ConversionRate: 3600 },
  { label: "September", RevenueGrowth: 5700, ConversionRate: 3700 },
  { label: "October", RevenueGrowth: 5900, ConversionRate: 3900 },
  { label: "November", RevenueGrowth: 6000, ConversionRate: 4000 },
  { label: "December", RevenueGrowth: 6200, ConversionRate: 4200 },
];
const Charts = () => {
  return (
    <div className='w-full md:w-2/3 ml-5' >
      <ResponsiveContainer width={"100%"} height={500} className="mt-5">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3'/>
        <YAxis/>
        <XAxis/>
        <Legend/>
        <Line type="monotone" dataKey={"ConversionRate"} stroke="#8884d8"/>
        <Line type="monotone" dataKey={"RevenueGrowth"} stroke='#82ca9d'/>
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts;