import React from "react";
import { Layout, Menu,  Avatar, Image } from 'antd';
import Title from 'antd/lib/typography/Title';
import { DeviceList } from "../components/device";
import {
    VideoCameraOutlined,
    UserOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
    

const { Header, Sider, Content } = Layout;

export const List = () => {

    
    return (
          <Layout>
          <Sider>
            <a href="/">
            <Image  width={120} src="http://www.agranimo.com/wp-content/uploads/2018/10/l4-1.png"/>
            </a>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item className="site-layout-background" style={{ margin: '64px 0px'}} key="1" icon={<VideoCameraOutlined />}>
                Devices
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Avatar size="large" icon={<UserOutlined />} style={{float: 'right', margin:'10px 10px'}} /> 
                <Title style={{ 
                      color: 'white',
                      margin:'10px',
                      textAlign: 'center'
                      }} 
                      level={3}>
                          Challenge -  Test
                  </Title> 
              </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
            <a href="/" style={{ margin: '20px'}}>
              <ArrowLeftOutlined /> Go to Devices Data 
            </a>
              <DeviceList />
            </Content>
          </Layout>
        </Layout>
    )
}

export default List;