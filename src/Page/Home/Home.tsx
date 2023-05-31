import React, { ReactNode, useEffect, useState } from 'react'
import { AudioOutlined } from '@ant-design/icons'
import {
  Button,
  Carousel,
  Image,
  Input,
  Menu,
  MenuProps,
  Space,
  Tabs,
  Typography
} from 'antd'
import Icon, { SearchOutlined } from '@ant-design/icons'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import { LeftBar } from '../../components/LeftBar'
import { QuickSearch } from '../../components/QuickSearch'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import { ItemCard } from '../../components/ItemCard'
import { MainPage } from '../MainPage'
import ListPage from '../ListPage'
import PubSub from 'pubsub-js'
import DetailPage from '../DetailPage'
function Home () {
  const [currentPage, setCurrentPage] = useState<string>('main')

  useEffect(() => {}, [])

  const [bodyEle, setBodyEle] = useState<ReactNode>(<MainPage />)

  useEffect(() => {
    switch (currentPage) {
      case 'main':
        setBodyEle(<MainPage />)
        break
      case 'detail':
        setBodyEle(<DetailPage />)
        break
      default:
        setBodyEle(<ListPage />)
    }
  }, [currentPage])

  useEffect(() => {
    let mySubscriber = (msg: any, data: any) => {
      setCurrentPage(data)
    }

    let token = PubSub.subscribe('switchPage', mySubscriber)

    return () => {
      PubSub.unsubscribe(token)
    }
  }, [])

  return (
    <div style={{ minHeight: '80vh' }}>
      <div className='h-20 md:container md:mx-auto flex items-center justify-between py-2'>
        <div>
          <img src='2000fun-logo-2020-v2.png' className='object-cover w-64' />
        </div>
        <div className='flex mx-2'>
          <Space direction='vertical' size={'large'}>
            <Space.Compact style={{ width: '100%' }} size={'large'}>
              <Input />
              <Button
                type='primary'
                style={{ background: '#FFCE70', padding: '0 10px' }}
              >
                <SearchOutlined style={{ color: 'black' }} />
              </Button>
            </Space.Compact>
          </Space>
          <Button size='large' type={'primary'} className='ml-3'>
            購物籃
          </Button>
          <Button
            size='large'
            className='ml-1'
            style={{ borderColor: '#1677FF', color: '#1677FF' }}
          >
            登入/註冊
          </Button>
        </div>
      </div>
      <div className='h-14' style={{ backgroundColor: '#303031' }}>
        <div className='md:container md:mx-auto h-full'>
          <HeaderBar />
        </div>
      </div>
      <div className='md:container md:mx-auto flex justify-between items-start'>
        <div
          className='border mt-5 border-solid'
          style={{ borderColor: '#EBEBEB', width: '15%' }}
        >
          <LeftBar
            onReplyChange={e => {
              console.log(e)
              setCurrentPage(e)
            }}
          />
        </div>
        <div style={{ width: '80%' }}>{bodyEle}</div>
      </div>
    </div>
  )
}

export default Home
