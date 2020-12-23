import React, {useState, useEffect} from "react";
import ReactEcharts from 'echarts-for-react';
import { useParams } from "react-router-dom";
import {useQuery} from '@apollo/react-hooks';
import {GET_DEVICE_DATA} from '../../graphql/device.query';
import Title from 'antd/lib/typography/Title';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';




export const DeviceData = ({ id: device_id }) => {
    const {loading, error, data} =useQuery(GET_DEVICE_DATA,  {
        variables: { params: {device_id} }  
    });
    
    const [finalData, setFinalData] = useState({stm:[], smo:[]});
    const [smo1,setSmo1] = useState ([])
    const [smo2,setSmo2] = useState ([])
    const [smo3,setSmo3] = useState ([])
    const [xAxis, setXaxis] = useState ([])
    const [stm1,setStm1] = useState ([])
    const [stm2,setStm2] = useState ([])
    const [stm3,setStm3] = useState ([])
    const [xAxis2, setXaxis2] = useState ([])

    useEffect(() => {
        if(data && !loading && !error){
            const stm = [...data.data.nodes.stm1, ...data.data.nodes.stm2, ...data.data.nodes.stm3];
            setXaxis(data.data.nodes.smo1.map (v => v[0]))
            setSmo1(data.data.nodes.smo1.map (v => v[1]))
            setSmo2(data.data.nodes.smo2.map (v => v[1]))
            setSmo3(data.data.nodes.smo3.map (v => v[1]))
            setXaxis2(data.data.nodes.stm1.map (v => v[0]))
            setStm1(data.data.nodes.stm1.map (v => v[1]))
            setStm2(data.data.nodes.stm2.map (v => v[1]))
            setStm3(data.data.nodes.stm3.map (v => v[1]))
            const smo = [...data.data.nodes.smo1, ...data.data.nodes.smo2, ...data.data.nodes.smo3];
            setFinalData({stm, smo});
        }
    }, [data, loading, error]);
    const smo_graph = {
        xAxis: {
            type: 'category',
            data: xAxis
        },
        yAxis: {
            type: 'value',
            min:40
        },
        series: [{
            name:"smo1",
            data: smo1,
            type: 'line'
        },
        {   name: "smo2",
            data: smo2,
            type: 'line'},
        {   name: "smo3",
            data: smo3,
            type: 'line'}]
    }
    const stm_graph = {
        xAxis: {
            type: 'category',
            data: xAxis2
        },
        yAxis: {
            type: 'value',
            min:17
        },
        series: [{
            name:"stm1",
            data: stm1,
            type: 'line'
        },
        {   name: "stm2",
            data: stm2,
            type: 'line'},
        {   name: "stm3",
            data: stm3,
            type: 'line'}]
    }
    return (
        <React.Fragment style={{height: '100vh'}}>
             <a href="/list">
                <ArrowLeftOutlined /> Go to Device List
            </a>
                    <Title style={{ 
                                    color: 'black',
                                    margin:'10px 50px',
                                    textAlign: 'Left'
                                    }} 
                                    level={1}>
                        Device Detail
                    </Title>
                    <Title style={{ 
                                    color: 'black',
                                    margin:'10px 50px',
                                    textAlign: 'Left'
                                    }} 
                                    level={3}>
                        Soil moisture
                    </Title>
                    <ReactEcharts option={smo_graph} style={{margin:'10px'}} />
                    <Title style={{ 
                                    color: 'black',
                                    margin:'10px 50px',
                                    textAlign: 'Left'
                                    }} 
                                    level={1}>
                        Soil temperature
                    </Title>
                    <ReactEcharts option={stm_graph} />
        </React.Fragment>
    )
};
export const DeviceView = () => {
    const { id: device_id } = useParams();
    return (
        <React.Fragment>
            <DeviceData id={device_id} />
        </React.Fragment>
    )
}