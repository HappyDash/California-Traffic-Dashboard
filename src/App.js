import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Button from 'react-bootstrap/Button';
import PoliceDashboard from './pages/police_dashboard';
import PublicDashboard from "./pages/general_public";
import Home from "./pages/home";
  
// const data = [
//   {
//     name: "Block A",
//     l1: 4000,
//     l2: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Block B",
//     l1: 3000,
//     l2: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Block C",
//     l1: 2000,
//     l2: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Block D",
//     l1: 2780,
//     l2: 3908,
//     amt: 2000,
//   },
// ];

// const data1 = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
  
export default function App() {
  return (
    
    <div>
      <Home />
      {/* <PoliceDashboard /> */}
      {/* <PublicDashboard /> */}
      {/* <ResponsiveContainer width="40%" 
                           height="40%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="l2"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" 
                dataKey="l1" 
                stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="40%" height="40%">
        <BarChart width={150} height={40} data={data1}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer> */}
    </div>
  );
}