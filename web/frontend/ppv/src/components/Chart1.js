import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    view: 4000,
    price: 2400
  },
  {
    name: "Feb",
    view: 3000,
    price: 1398
  },
  {
    name: "Mar",
    view: 2000,
    price: 9800
  },
  {
    name: "Apr",
    view: 2780,
    price: 3908
  },
  {
    name: "May",
    view: 1890,
    price: 4800
  },
  {
    name: "Jun",
    view: 2390,
    price: 3800
  },
  {
    name: "Jul",
    view: 3490,
    price: 4300
  }
];

export default function App() {
  return (
    <div style={{marginTop:"25px"}}>
        <div style={{margin:"15px"}}>
            <LineChart
        width={400}
        height={250}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="view"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="view" stroke="#82ca9d" /> */}
        </LineChart>
        </div>

        <div style={{margin:"15px"}}>
            <LineChart
        width={400}
        height={250}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="price"
            stroke="#6699ff"
            activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="view" stroke="#82ca9d" /> */}
        </LineChart>
        </div>
    </div>
  );
}
