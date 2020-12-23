import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { List, View } from "../screens"
import { Layout } from 'antd';
import history from "./history";
import './styles.css';

const { Content, Footer } = Layout;

export const AppContent = (props) => {
    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ margin: '16px 0' }}>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/">
                                <List {...props} />
                            </Route>
                            <Route exact path={`/:id/`} >
                                <View {...props} />
                            </Route>
                        </Switch>

                    </Router>
                </div>
            </Content>
            <Footer style={{ position: "sticky", bottom: "0", textAlign: 'center' }}></Footer>

        </Layout>
    )
};

export default AppContent;
