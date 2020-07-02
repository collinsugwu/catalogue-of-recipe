import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const header = () => (
    <Layout className="layout">
        <Header>
        <Link to="/">
            <h1 className="logo">Recipias</h1>
        </Link>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
        </Header>
    </Layout>

);

export default header;