import React, { FC, useState } from 'react'
import Icon, { SearchOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

interface LeftBarModel {
  onReplyChange: (value: string) => void
}

export const LeftBar:FC<LeftBarModel> = ({onReplyChange}) => {
  const items: MenuProps['items'] = [
    getItem(
      '商品分類',
      'main',
      <img src='list.png' className='object-cover h-6' />
    ),
    getItem(
      '電玩遊戲',
      'game',
      <img src='game.png' className='object-cover h-6' />,
      [getItem('網絡版', '1'), getItem('數位版', '2')]
    ),
    getItem(
      '家用機及設備',
      'game_c',
      <img src='gampad.png' className='object-cover h-6' />,
      [getItem('掌機', '3'), getItem('XBOX', '4'), getItem('PS4/PS5', '5')]
    ),
    getItem(
      '電競/電腦設備',
      'pc',
      <img src='pc.png' className='object-cover h-6' />,
      [
        getItem('電競套裝', '6'),
        getItem('顯示器', '7'),
        getItem('鍵盤', '8'),
        getItem('滑鼠', '9'),
        getItem('耳機', '10')
      ]
    ),
    getItem(
      '電腦組件',
      'diy_pc',
      <img src='diy_pc.png' className='object-cover h-6' />,
      [
        getItem('處理器', '11'),
        getItem('主機板', '12'),
        getItem('記憶體', '13'),
        getItem('影碟', '14'),
        getItem('顯示卡', '15')
      ]
    ),
    getItem(
      'DIY/自組鍵盤',
      'diy_kb',
      <img src='kb.png' className='object-cover h-6' />,
      [
        getItem('鍵帽 Keycap', '16'),
        getItem('軸體 Switch', '17'),
        getItem('準成品 Barebone', '18'),
        getItem('硬盤配件', '19')
      ]
    ),
    getItem(
      '手機設備',
      'mobile',
      <img src='mobile.png' className='object-cover h-6' />,
      [
        getItem('遊戲控制器', '20'),
        getItem('耳機', '21'),
        getItem('手機殼', '22'),
        getItem('其他配置', '23')
      ]
    )
  ]

  const onClick: MenuProps['onClick'] = e => {
    // console.log('click ', e)
    onReplyChange(e.key)
  }

  return (
    <div className='w-full'>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['main']}
        // defaultOpenKeys={['sub1']}
        mode='inline'
        items={items}
        style={{
          background: '#ffffff',
          alignItems: 'center',
        }}
      />
    </div>
  )
}
