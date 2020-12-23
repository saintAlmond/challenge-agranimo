import React from "react";
import { Row, Col, Layout, Button, Image  } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header, Content} = Layout;


export const Home = () => {
    return (
        <React.Fragment>
            <Row justify="center">
                <Col span={24}>
                <Content style={{height: '100vh' }}>
                    <Header>
                    <Image  width={120} src="http://www.agranimo.com/wp-content/uploads/2018/10/l4-1.png"/>
                    </Header>
                    <Title style={{ 
                            color: 'black',
                            margin:'97px 95px',
                            textAlign: 'center'
                            }} 
                            level={1}>
                                Welcome to Challenge Agranimo
                        </Title>
                        <a href="/list">
                            <Button type="primary" block style={{ width: '250px', margin: '6px 550px'} }>
                                Go to Devices Data
                            </Button>
                        </a>
                    </Content>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;