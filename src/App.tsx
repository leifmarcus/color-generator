import { Divider, Layout } from 'antd';
import React, { FC, useState } from 'react';
import './App.css';
import ColorInput from './components/colorInput';
import ColorOutput from './components/colorOutput/ColorOutput';

const { Header, Content, Footer } = Layout;

const defaultColors = ['000099', '009BD2', '9DCCE6', '87BC49', '8FC087', 'F5C500'];

const App: FC = () => {
    const [colors, setColors] = useState<Array<string>>(defaultColors);

    return (
        <Layout className="layout">
            <Header>
                <div className="App-header">Color Generator</div>
            </Header>
            <Content style={{ padding: '50px' }}>
                <div className="App-layout-content">
                    <ColorInput colors={colors} onChange={setColors} />
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        Colors
                    </Divider>
                    <ColorOutput colors={colors} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© 2020</Footer>
        </Layout>
    );
};

export default App;
