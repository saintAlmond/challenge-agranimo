import React from "react";
import { get } from "lodash";
import {  } from "react-router-dom";
import {GET_DEVICES} from "../../graphql/device.query";
import { useQuery } from '@apollo/react-hooks';
import { Table, Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";


//Create table
const columns = [
    {
        title: 'Name',
        dataIndex: 'deviceType',
        sorter: (a, b) => a.deviceType.length - b.deviceType.length,
        sortDirections: ['descend'],
        filters: [
          {
            text: '5',
            value: '5',
          },
          {
            text: '1',
            value: '1',
          }
        ],
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.deviceType.indexOf(value) === 0
      },
      {
        title: 'ID',
        dataIndex: '_id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a._id - b._id,
        render: (text, record) => (
          <Link
            to={`/device/${text}/`}
            state={{ id: text }}
            >
            {text}
          </Link>
        ),
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.createdAt - b.createdAt,
      },
      {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.updatedAt - b.updatedAt,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render:(text, record) => (
          <Radio type="boolean" checked={true}>
          </Radio>
        ),
      },
      {
          title: 'Actions',
          key: 'actions',
          render: (text, record) => (
            <Button size="middle" type="primary" onClick={() => deleteDevices()}>
                Delete
            </Button>
          ),      
      }
];

//get all information from DB
export const Devices = () => {
  const {loading, error, data} =useQuery(GET_DEVICES);
  if (loading) return 'Loading...'
  if (error) return `Error: ${error.message}`
  console.log(data)
  return (
    <div>
        <Table columns={columns} dataSource={data.devices.nodes} onChange={onChange}  />
    </div>
  )
}

export const deleteDevices = (id) => {
}

export const DeviceListOption = ({ device }) => {
    const deviceType = get(device, "deviceType", null)

    return (
        <Table.Item >
            {deviceType}
        </Table.Item>
    )
}

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
}


export const DeviceList = () => {

    return (
        <Devices />
    )
}

  
