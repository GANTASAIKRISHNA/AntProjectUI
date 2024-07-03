import { Layout, Button, Modal } from 'antd';
import { useState } from 'react';
import TreeView from './TreeView';

const { Content } = Layout;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Button type="primary" onClick={() => {setIsModalOpen(true)}}>Open Modal</Button>
      </Content>
      {
        isModalOpen && 
        <Modal title="Folder structure Treeview" open={isModalOpen} onCancel={handleCancel} footer={null} width={600}>
          <div>
            <TreeView />
          </div>
        </Modal>
      }
    </Layout>
  );
};

export default App;