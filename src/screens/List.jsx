import React from "react";
import { Row, Col } from 'antd';
import { DeviceList } from "../components/device";

export const List = () => {
    return (
        <React.Fragment>
            <Row justify="center">
                <Col span={24}>
                    <DeviceList />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default List;