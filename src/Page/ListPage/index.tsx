import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Slider,
  Space,
  Tag
} from 'antd'
import { SliderMarks } from 'antd/es/slider'
import React, { FC, useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Icon, { SearchOutlined } from '@ant-design/icons'
import { ItemCard } from '../../components/ItemCard'
const { Search } = Input

function ListPage () {
  const marks: SliderMarks = {
    0: 0,
    25: '100',
    50: '10000',
    100: 'MAX'
  }

  const plainOptions = [
    'Logitech羅技',
    'Razer雷蛇',
    'CHERRY櫻桃',
    'SteelSeries賽睿',
    'ZOWIE',
    'CORSAIR美商海盜船',
    'HyperX極度未知'
  ]

  const tagList = [
    '白色',
    '黑色',
    '粉紅色',
    '辦公用',
    '靜音鍵盤',
    '電競键盘',
    '熱門',
    '無線鍵盤',
    '雙模鍵盤',
    '108鍵位',
    '靜電容鍵盤',
    '茶軸'
  ]

  const dataList = []

  return (
    <div className='mt-5'>
      <Breadcrumb
        items={[
          {
            title: '首頁'
          },
          {
            title: '電競/電腦設備'
          },
          {
            title: '鍵盤'
          }
        ]}
        className='bg-slate-100 p-2 rounded-md'
      />
      <Row gutter={[24, 8]} className='py-5'>
        <Col span={3} className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>價錢</div>
          <HiOutlineMenuAlt2 className='text-xl' />
        </Col>
        <Col span={21} className='flex items-center'>
          <Input placeholder='0' style={{ width: '15%' }} />
          <Slider
            min={0}
            max={100}
            range
            marks={marks}
            defaultValue={[0, 50]}
            style={{ width: '30%' }}
            className='ml-10'
            handleStyle={[
              {
                backgroundColor: '#E32A57'
              }
            ]}
            trackStyle={[
              {
                backgroundColor: '#E32A57',
                borderColor: '#E32A57'
              }
            ]}
            // activeDotStyle={{ borderColor: '#E32A57' }}
            // railStyle={{ borderColor: '#E32A57' }}
          />
          <Input placeholder='0' style={{ width: '15%' }} className='ml-5' />
        </Col>
        <Divider className='my-1 py-1'></Divider>
        <Col span={3} className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>品牌</div>
          <HiOutlineMenuAlt2 className='text-xl' />
        </Col>
        <Col span={21}>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['CHERRY櫻桃']}
            onChange={() => {}}
          />
        </Col>
        <Divider className='my-1 py-1'></Divider>
        <Col span={3} className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>Tags</div>
          <HiOutlineMenuAlt2 className='text-xl' />
        </Col>
        <Col span={21} className=''>
          {tagList.map(e => {
            return <CustomTags text={e} />
          })}
        </Col>
        <Divider className='my-1 py-1'></Divider>
        <Col span={3} className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>搜索</div>
          <HiOutlineMenuAlt2 className='text-xl' />
        </Col>
        <Col span={21} className=''>
          <Space direction='vertical' size={'middle'}>
            <Space.Compact style={{ width: '100%' }} size={'middle'}>
              <Input />
              <Button
                type='primary'
                style={{ background: '#E32A57', padding: '0 10px' }}
              >
                <SearchOutlined style={{ color: 'white' }} />
              </Button>
            </Space.Compact>
          </Space>
        </Col>
        <Divider className='my-1 py-1'></Divider>
        <Col span={3} className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>總數</div>
          <HiOutlineMenuAlt2 className='text-xl' />
        </Col>
        <Col span={21} className='flex justify-between'>
          <div className='text-xl'>99</div>
          <div className='flex justify-center items-center'>
            <div className='pr-5'>排序</div>
            <Select
              defaultValue='預設'
              style={{ width: 120 }}
              onChange={() => {}}
              options={[
                { value: '預設', label: '預設' },
                { value: '價格由低至高', label: '價格由低至高' },
                { value: '价格由高至低', label: '价格由高至低' },
                { value: '只顯示有貨', label: '只顯示有貨' },
                { value: '只顯示沒貨', label: '只顯示沒貨' }
              ]}
            />
          </div>
        </Col>
      </Row>
      <div className='grid gap-4 grid-cols-4 mt-10'>
        {tagList.map(e => {
          return (
            <ItemCard
              imageUrl='keyborad1.jpg'
              topRightOffers
              name='ASUS ROG Azoth NX 無線機械遊戲鍵盤(紅軸)'
              priceRange={'2199.00'}
              bottomCenterEle
              bottomStock
              descriptionCenter={'鍵盤'}
              handleOnclick={() => {
                PubSub.publish('switchPage', 'detail')
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ListPage

const CustomTags: FC<{ text: string }> = ({ text }) => {
  const [isClick, setIsCLick] = useState<boolean>(false)
  return (
    <Tag
      color={!isClick ? '#909090' : '#E32A57'}
      onClick={() => {
        setIsCLick(e => !e)
      }}
    >
      <a>{text}</a>
    </Tag>
  )
}
