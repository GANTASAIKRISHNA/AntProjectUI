import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Layout, Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';
import './App.css'; 

const { Content } = Layout;

interface FileInfo {
  dateCreated: string;
  size: string;
}

interface CustomTreeDataNode extends TreeDataNode {
  title: string;
  info?: FileInfo;
  children?: CustomTreeDataNode[];
}

const treeData: CustomTreeDataNode[] = [
{
    title: 'src',
    key: '0-0',
    info: {
    dateCreated: "2023-01-01",
    size: "12KB"
    },
    children: [
    {
        title: 'assets',
        key: '0-0-0',
        info: {
        dateCreated: "2023-01-02",
        size: "8MB"
        },
        children: [
        {
            title: 'signup_image.png',
            key: '0-0-0-0',
            info: {
            dateCreated: "2023-01-03",
            size: "2MB"
            },
        },
        {
            title: 'signin_image.png',
            key: '0-0-0-1',
            info: {
            dateCreated: "2023-01-04",
            size: "2MB"
            },
        },
        {
            title: 'home_banner.png',
            key: '0-0-0-2',
            info: {
            dateCreated: "2023-01-05",
            size: "4MB"
            },
        },
        ],
    },
    {
        title: 'api',
        key: '0-0-1',
        info: {
        dateCreated: "2023-01-06",
        size: "5KB"
        },
        children: [
        {
            title: 'index.tsx',
            key: '0-0-1-0',
            info: {
            dateCreated: "2023-01-07",
            size: "1KB"
            },
        },
        ],
    },
    {
        title: 'components',
        key: '0-0-2',
        info: {
        dateCreated: "2023-01-08",
        size: "16KB"
        },
        children: [
        {
            title: 'SignUp',
            key: '0-0-2-0',
            info: {
            dateCreated: "2023-01-09",
            size: "8KB"
            },
            children: [
            {
                title: 'SignUp.tsx',
                key: '0-0-2-0-0',
                info: {
                dateCreated: "2023-01-10",
                size: "4KB"
                },
            }
            ]
        },
        {
            title: 'Signin',
            key: '0-0-2-1',
            info: {
            dateCreated: "2023-01-11",
            size: "8KB"
            },
            children: [
            {
                title: 'SignIn.tsx',
                key: '0-0-2-1-0',
                info: {
                dateCreated: "2023-01-12",
                size: "4KB"
                },
            }
            ]
        }
        ],
    },
    {
        title: 'hooks',
        key: '0-0-3',
        info: {
        dateCreated: "2023-01-13",
        size: "3KB"
        },
        children: [
        {
            title: 'useAuth.tsx',
            key: '0-0-3-0',
            info: {
            dateCreated: "2023-01-14",
            size: "1KB"
            },
        },
        {
            title: 'useSession.tsx',
            key: '0-0-3-1',
            info: {
            dateCreated: "2023-01-15",
            size: "1KB"
            },
        }
        ],
    },
    ],
},
];

const TreeView: React.FC = () => {
    const [fileInfo, setFileInfo] = useState<any>("Select file to see the info here...");

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    setFileInfo(info)
    console.log('selected', selectedKeys, info);
  };

  return (
    <Layout>
      <Content style={{ display: 'flex', padding: '16px' }}>
        <div className="tree-container">
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            onSelect={onSelect}
            treeData={treeData}
          />
        </div>
        <div className="another-component">
          {
            typeof fileInfo !== 'string' && 
            <>
                <p>
                    File name: {fileInfo.node.title}
                </p>
                <p>
                    Date created: {fileInfo.node.info.dateCreated}
                </p>
                <p>
                    File size: {fileInfo.node.info.size}
                </p>
            </>
          }
        </div>
      </Content>
    </Layout>
  );
};

export default TreeView;
