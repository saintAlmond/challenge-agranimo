import React from "react";
import ReactEcharts from 'echarts-for-react';
import { useParams } from "react-router-dom";

export const DeviceData = ({ id: zone_id }) => {
    const dummy_options = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    }
    return (
        <ReactEcharts option={dummy_options} />
    )
}

export const DeviceView = () => {
    const { id: zone_id } = useParams();
    return (
        <React.Fragment>
            <DeviceData id={zone_id} />
        </React.Fragment>
    )
}