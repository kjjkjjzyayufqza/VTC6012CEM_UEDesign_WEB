import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import './index.css'

export const HeaderBar = () => {
  const itemStyle = {
    height: '3.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    minWidth: '8rem'
  }
  const items: MenuProps['items'] = [
    {
      label: '首頁',
      key: 'Home',
      style: itemStyle
    },
    {
      label: '新品預定',
      key: 'checkItem',
      style: itemStyle
    },
    {
      label: '紅利商城',
      key: 'poinShop',
      style: itemStyle
    },
    {
      label: '免費虛寶',
      key: 'freeCard',
      style: itemStyle
    },
    {
      label: '自選電腦砌機',
      key: 'customPC',
      icon: <img src='image_14.png' className='object-cover h-8' />,
      style: itemStyle
    }
  ]

  const [current, setCurrent] = useState('Home')

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
      style={{
        background: '#303031',
        alignItems: 'center'
      }}
      theme={'dark'}
    />
  )
}

export default HeaderBar
