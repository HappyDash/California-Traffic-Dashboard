import React, {Component, useEffect} from 'react';
import DropdownButton  from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import h337 from "heatmap.js";
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

  const data = [
    {
      name: "Block A",
      l1: 4000,
      l2: 2400,
      amt: 2400,
    },
    {
      name: "Block B",
      l1: 3000,
      l2: 1398,
      amt: 2210,
    },
    {
      name: "Block C",
      l1: 2000,
      l2: 9800,
      amt: 2290,
    },
    {
      name: "Block D",
      l1: 2780,
      l2: 3908,
      amt: 2000,
    },
  ];

export default function PublicDashboard() {
    useEffect(() => {
        var heatmapInstance = h337.create({
          // only container is required, the rest will be defaults
          container: document.querySelector(".cali_heatmap")
        });
        // now generate some random data
        var points = [];
        var max = 0;
        var width = 840;
        var height = 400;
        var len = 200;
    
        while (len--) {
          var val = Math.floor(Math.random() * 100);
          max = Math.max(max, val);
          var point = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            value: val
          };
          points.push(point);
        }
        // heatmap data format
        var data = {
          max: max,
          data: points
        };
        // if you have a set of datapoints always use setData instead of addData
        // for data initialization
        heatmapInstance.setData(data);
      });
    return (
        // <Button>Sankalp</Button>
        <div style={{ width: "100vw", 
                    height: "100vh",
                    backgroundColor: "#e8e8e8" }}>
            <div style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "800",
                    fontSize: "38px",
                    border: "1px solid black",
                    backgroundColor: "#cccccc"
            }}><div style={{
                    padding: "15px"
                    }}>
                <span>General Public Dashboard</span>
                <a href="/" style={{color: "black", textDecoration: "none", float: "right", cursor: "pointer"}}>EXIT</a>
            </div></div>
            <div style ={{padding: "30px"}}>
            <div style={{
                            float: "left",
                            width: "45%",
                            padding: "10px",
                            backgroundColor: "white",
                            margin: "20px",
                            height: "300px"
                        }}>
                <div style={{padding: "10px", backgroundColor: "#e8e8e8"}}>
                    <DropdownButton id="cali_district" title="Select District">
                        <Dropdown.Item href="#/action-1">Los Angles</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Orange</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sunnyvale</Dropdown.Item>
                    </DropdownButton>
                </div>
                        
                <BarChart width={600} height={200} data={data1}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </div>
            <div style={{
                            float: "left",
                            width: "45%",
                            padding: "10px",
                            backgroundColor: "white",
                            margin: "20px",
                            height: "300px"
                        }}>
                <div style={{padding: "10px", backgroundColor: "#e8e8e8"}}>
                    <DropdownButton id="cali_district" title="Select District">
                        <Dropdown.Item href="#/action-1">Los Angles</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Orange</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sunnyvale</Dropdown.Item>
                    </DropdownButton>
                </div>
                        
                {/* <BarChart width={400} height={200} data={data1}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart> */}
                <div className="cali_heatmap">
                    <h1>California</h1>
                </div>
            </div>
            <div style={{
                            float: "left",
                            width: "45%",
                            padding: "10px",
                            backgroundColor: "white",
                            margin: "20px",
                            height: "300px"
                        }}>
                <div style={{padding: "10px", backgroundColor: "#e8e8e8"}}>
                    <DropdownButton id="cali_district" title="Select District">
                        <Dropdown.Item href="#/action-1">Los Angles</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Orange</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sunnyvale</Dropdown.Item>
                    </DropdownButton>
                </div>
                        
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
            </div>
            </div>
        </div>
    );
}