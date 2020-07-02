import React, { Component } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { name: 'mês 01', pv: 2400, amt: 2400 },
    { name: 'mês 02', pv: 1398, amt: 2210 },
    { name: 'mês 03', pv: 9800, amt: 2290 },
    { name: 'mês 04', pv: 3908, amt: 2000 },
    { name: 'mês 05', pv: 4800, amt: 2181 },
    { name: 'mês 06', pv: 3800, amt: 2500 },

];

class SimpleLineChart extends Component {

    render() {
        return (
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <Line
                    type='monotone'
                    dataKey='pv'
                    stroke='#8884d8'
                    activeDot={{ r: 8 }}
                />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <YAxis />
                <XAxis dataKey='name' />
                <Legend />
            </LineChart>
        );
    }
}

export default SimpleLineChart;