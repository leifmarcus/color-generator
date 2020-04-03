import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: FunctionComponent<{}> = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="App-header">Color Generator</div>
            </Header>
            <Content style={{ padding: '50px' }}>
                <div className="App-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© 2020</Footer>
        </Layout>
    );
};

export default App;
