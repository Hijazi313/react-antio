import './App.css';
import { Layout } from 'antd';

import AppHeader from "./components/common/Header";
import Home from './components/Home';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home />
    </Content>
  </Layout>
  );
}

export default App;
