import React from "react";
import { get } from "lodash"
import { List } from 'antd';
import { Link } from "react-router-dom";


export const dummy_devices = [
    {
        _id: 1,
        name: "Device 1",
        code: "d01"
    },
    {
        _id: 2,
        name: "Device 2",
        code: "z02"
    },
]

export const DeviceListOption = ({ device }) => {
    const id = get(device, "_id", null)
    const name = get(device, "name", null)

    return (
        <List.Item >
            {name}
            <br />
            <Link
                to={`/${id}/`}
                state={{ id: id }}
            >
                view data
            </Link>

        </List.Item>
    )
}
export const DeviceList = () => {

    return (
        <List
            bordered
            dataSource={dummy_devices}
            renderItem={device => <DeviceListOption device={device} />}
        />
    )
}