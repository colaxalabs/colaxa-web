import {
  Avatar,
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Button,
  Card,
  Space,
} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import './App.less'

const { Header, Content, Footer } = Layout
const { Link, Title, Paragraph, Text } = Typography
const { SubMenu } = Menu

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#fff', position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu mode='horizontal'>
          <Menu.Item
            style={{ fontWeight: 'bold' }}
          >
            Colaxalabs
          </Menu.Item>
          <Menu.Item key='whitepaper'>
            <a href='https://hackmd.io/@qPtRW4tNR2KxOuqBVUBp5A/Bk9FPW2jw' rel='noreferrer' target='_blank'>
              Whitepaper
            </a>
          </Menu.Item>
          <SubMenu key='products' title='Products'>
            <Menu.Item key='reap' style={{ height: '100px' }}>
              <a href='https://reap.colaxa.org' rel='noreferrer' target='_blank'>
                <Space align='start' direction='vertical'>
                  <Text>Reap</Text>
                  <Text type='secondary'>Buy, Sell, & Trace farm harvest</Text>
                </Space>
              </a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='guides'>
            <a href='https://hackmd.io/@qPtRW4tNR2KxOuqBVUBp5A/S1y1dnIgu' rel='noreferrer' target='_blank'>
              Guides
            </a>
          </Menu.Item>
          <Button
            type='primary'
            href='https://reap.colaxa.org'
            target='_blank'
            style={{
              float: 'right',
              marginTop: 15,
            }}
          >
            Launch App
          </Button>
        </Menu>
      </Header>
      <Layout style={{ width: '100%' }}>
        <Content className='site-layout' style={{ marginTop: 64, width: '100%' }}>
          <Row style={{ minHeight: 530, width: '100%', padding: 20 }}>
            <Col xs={24} xl={24} className='align_jumbotron' style={{ padding: '70px 0' }}>
              <Title style={{ fontSize: '62px' }}>We are tackling the hardest and a sensitive problem in the food industry</Title>
              <Title level={1} type='secondary'>Creating a safe & trustworthy food supply chain on the blockchain.</Title>
              <Button
                style={{ width: '120px', margin: '30px 0' }}
                size='large'
                href='https://reap.colaxa.org'
                target='_blank'
                type='primary'
              >
                Launch App
              </Button>
            </Col>
          </Row>
          <Row style={{ padding: 20, backgroundColor: '#fff'}}>
            <Col xs={24} xl={24} className='align_jumbotron'>
              <Title style={{ fontSize: '40px', fontWeight: 100 }}>All-in-one solution</Title>
            </Col>
          </Row>
          <Row style={{ padding: 20, backgroundColor: '#fff' }}>
            <Col xs={24} xl={8} className='align_jumbotron' style={{ justifyContent: 'center', minHeight: 300 }}>
              <Paragraph style={{ fontSize: '30px', marginRight: '15px' }}>
                <ArrowRightOutlined style={{ marginRight: '5px' }}/>
                Buy, Sell, and Trace farm vegetable produce
              </Paragraph>
            </Col>
            <Col xs={24} xl={16}>
              <Card
                style={{ padding: 20 }}
                hoverable
                cover={<img alt='sample' src='https://gateway.pinata.cloud/ipfs/QmSzsy6opKSrnKYfZpdgA5jqPnDQu3v9PzEU1xArAd2Jj6' />}
              />
            </Col>
          </Row>
          <Row style={{ padding: 20, backgroundColor: '#7546C9', width: '100%', minHeight: 480 }}>
            <Col className='align_jumbotron' xs={24} xl={24} style={{ padding: '70px 0', fontSize: '38px', justifyContent: 'center' }}>
              <Card
                style={{ padding: 20, alignSelf: 'center' }}
              >
                <Paragraph style={{ fontSize: '38px' }}>
                "Information flow in the conventional agriculture supply chain is asymmetric. We are changing that using blockchain technology."
                </Paragraph>
              </Card>
           </Col>
          </Row>
          <Row style={{ padding: 20, minHeight: 480 }}>
            <Col className='align_jumbotron' xs={24} xl={12} style={{ padding: '70px 0' }}>
              <Card
                style={{ padding: 20, width: 400, alignSelf: 'center' }}
                cover={<img alt='sample' src='https://gateway.pinata.cloud/ipfs/QmdUE8Kfzv8hQ912oWai2mVFGquggX5fpzsfGTiG4GwYZQ' />}
              />
            </Col>
            <Col className='align_jumbotron' xs={24} xl={12} style={{ padding: '70px 0', fontSize: '38px', justifyContent: 'center' }}>
              <Title style={{ paddingBottom: 25 }}>Land Registry is a mess.</Title>
              <Paragraph>
                We are creating a new ownership economy in agriculture. Register your farm-land(s) on the blockchain.
              </Paragraph>
            </Col>
          </Row>
          <Row style={{ padding: 20, minHeight: 480 }}>
            <Col className='align_jumbotron' xs={24} xl={12} style={{ padding: '70px 0', fontSize: '38px', alignSelf: 'center' }}>
              <Title style={{ paddingBottom: 25 }}>Digital and Decentralized food marketplace.</Title>
              <Paragraph>
                Borderless, Traceable, Decentralized, and Unstoppable food marketplace without middlemen or intermediaries.
              </Paragraph>
            </Col>
            <Col className='align_jumbotron' xs={24} xl={12} style={{ padding: '70px 0', justifyContent: 'center' }}>
              <Card
                style={{ padding: 20, width: 400, alignSelf: 'center' }}
                cover={<img alt='sample' src='https://gateway.pinata.cloud/ipfs/QmPzUV59eDy9ZsSUkjbSKagfXDyUEiXiSffGZ648tkieQH' />}
              />
            </Col>
          </Row>
          <Row style={{ padding: 20, minHeight: 480, width: '100%', backgroundColor: '#fff' }}>
            <Col className='align_jumbotron' xs={24} xl={24} style={{ padding: '70px 0', alignSelf: 'center' }}>
              <Title style={{ alignSelf: 'center' }}>Scan and Trace</Title>
              <Paragraph style={{ fontSize: '28px', textAlign: 'center' }}>
                Download or Scan a QR code and get crop origin and ingredients. Traceablity information is stored in the blockchain.
              </Paragraph>
              <Button
                style={{ width: '120px', margin: '30px 0', alignSelf: 'center' }}
                type='primary'
                size='large'
                href='https://reap.colaxa.org'
                target='_blank'
              >
                Get Started
              </Button>
            </Col>
          </Row>
          <Row style={{ padding: '0 20px' }}>
            <Col className='align_jumbotron' xs={24} xl={24} style={{ padding: '70px 0', justifyContent: 'center' }}>
              <Title>Join our communities</Title>
            </Col>
          </Row>
          <Row style={{ padding: '0 20px', minHeight: 250 }}>
            <Col className='align_jumbotron' style={{ padding: '10px', justifyContent: 'center' }} xs={24} xl={6}>
              <Space direction='vertical' style={{ alignSelf: 'center' }}>
                <Avatar src='https://gateway.pinata.cloud/ipfs/QmQzwuMR1YoS8m94L2bAfmYvA1rGkqS7ZTDXQUYPfKT6e7' size={40} shape='square' />
                <Link style={{ alignSelf: 'center' }} href='https://discord.gg/gdRktec' rel='noreferrer' target='_blank'>
                  Discord
                </Link>
              </Space>
            </Col>
            <Col className='align_jumbotron' style={{ padding: '10px', justifyContent: 'center' }}xs={24} xl={6}>
              <Space direction='vertical' style={{ alignSelf: 'center' }}>
                <Avatar src='https://gateway.pinata.cloud/ipfs/QmNh2ouqELdAWjJx6BCDs3TW3uWnoBDRzzj3YEC6xNgv6K' size={40} shape='square' />
                <Link style={{ alignSelf: 'center' }} href='https://twitter.com/colaxalabs' rel='noreferrer' target='_blank'>
                  Twitter
                </Link>
              </Space>
            </Col>
            <Col xs={24} xl={6} className='align_jumbotron' style={{ justifyContent: 'center', padding: '10px' }}>
              <Space direction='vertical' style={{ alignSelf: 'center' }}>
                <Avatar src='https://gateway.pinata.cloud/ipfs/QmebfDWrKoe4nJrZaoWA3XB5oMcqP7R6LyzjqZyaWRHwWt' size={40} shape='square' />
                <Link href='https://t.me/colaxa' rel='noreferrer' target='_blank' style={{ alignSelf: 'center' }}>
                  Telegram
                </Link>
              </Space>
            </Col>
            <Col xs={24} xl={6} className='align_jumbotron' style={{ justifyContent: 'center', padding: '10px' }}>
              <Space direction='vertical' style={{ alignSelf: 'center' }}>
                <Avatar src='https://gateway.pinata.cloud/ipfs/QmW7BHZpPMHWjcqpFr5saN1GVSDMrrMvu2inuY4wn7ktAg' size={40} shape='square' />
                <Link href='https://github.com/colaxalabs' rel='noreferrer' target='_blank' style={{ alignSelf: 'center' }}>
                  GitHub
                </Link>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer className='align_jumbotron' style={{ backgroundColor: '#7546C9', width: '100%' }}>
        <Space>
          <Avatar src='https://gateway.pinata.cloud/ipfs/QmRscHXWxeV9gYix9GuY5adTETzJxjsusazMq5UQSJBgAJ' />
          <Link style={{ color: '#fff', fontSize: 18, paddingLeft: 20 }}href='mailto:taxaprotocols@gmail.com' target='_blank'>
            Contact
          </Link>
        </Space>
        <Text style={{ alignSelf: 'center', color: '#fff' }}>&copy; 2021</Text>
      </Footer>
    </Layout>
  );
}

export default App;
