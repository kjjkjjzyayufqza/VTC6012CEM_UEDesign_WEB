import React, { useState } from 'react'
import { AudioOutlined } from '@ant-design/icons'
import { Button, Carousel, Input, Menu, MenuProps, Space } from 'antd'
import Icon, { SearchOutlined } from '@ant-design/icons'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import { LeftBar } from '../../components/LeftBar'
import { QuickSearch } from '../../components/QuickSearch'

const { Search } = Input

function Home () {
  const contentStyle: React.CSSProperties = {
    height: '500px',
    width: '760px'
  }

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
          <LeftBar />
        </div>
        <div style={{ width: '80%' }}>
          <div className='mt-5 flex justify-between'>
            <Carousel autoplay style={{ width: '760px' }}>
              <div>
                <img
                  src='https://img.openshop.com.hk/s2/202304/642e5f28369aa.jpg'
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src='https://img.openshop.com.hk/s2/202303/63fef6039ea28.jpg'
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src='https://img.openshop.com.hk/s2/202303/641d4c74e7026.jpg'
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src='https://img.openshop.com.hk/s2/202304/644a44f81a39c.jpg'
                  style={contentStyle}
                />
              </div>
            </Carousel>
            <div
              className='border border-solid p-1 rounded-md'
              style={{ borderColor: '#EBEBEB', width: '30%' }}
            >
              <div style={{ color: 'red', fontWeight: 600, textAlign: 'left' }}>
                最新活動
              </div>
              <div
                className='border border-solid px-5 py-4 mt-1 rounded-md'
                style={{ borderColor: '#FFC195', width: '88%' }}
              >
                Jabra 消費獎賞享不停
              </div>
              <div
                className='border border-solid px-5 py-4 mt-1 rounded-md'
                style={{ borderColor: '#FFC195', width: '88%' }}
              >
                Altech電競椅
              </div>
              <div
                className='border border-solid px-5 py-4 mt-1 rounded-md'
                style={{ borderColor: '#FFC195', width: '88%' }}
              >
                MSI 限時購買MON
              </div>
              <div
                className='border border-solid  px-5 py-4 mt-1 rounded-md'
                style={{ borderColor: '#FFC195', width: '88%' }}
              >
                Jabra 消費獎賞享不停
              </div>
            </div>
          </div>
          <QuickSearch />
        </div>
      </div>
    </div>
  )
}

export default Home
