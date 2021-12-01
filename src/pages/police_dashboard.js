import React, {Component, useState, useEffect} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
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

const data1 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function PoliceDashboard() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      });
    }, []);
    return (
        
        // <Button>Sankalp</Button>
        <div style={{ width: "100vw", 
                    height: "100vh",
                    backgroundColor: "black" }}>
            <div style={{
                    width: "100%",
                    height: "20%",
                    color: "white",
                    fontWeight: "800",
                    fontSize: "38px",
                    position: "relative"
            }}><div style={{
                position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
            }}>Police Dashboard {currentTime}</div></div>
            <div style={{
                    width: "100%",
                    height: "30%"
            }}>

            </div>
            <ResponsiveContainer width="40%" height="40%">
                <BarChart width={150} height={40} data={data1}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}