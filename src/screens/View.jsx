import React from "react";
import { Row, Col } from 'antd';
import { DeviceView } from "../components/device"


export const View = () => {
    return (
        <React.Fragment>
            <Row justify="center">
                <Col span={24}>
                    <DeviceView />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default View;