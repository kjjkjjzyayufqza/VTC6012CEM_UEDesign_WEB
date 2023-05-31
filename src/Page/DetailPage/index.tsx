import {
  Breadcrumb,
  Button,
  Card,
  Col,
  InputNumber,
  Row,
  Tabs,
  TabsProps,
  Tag,
  message
} from 'antd'
import React, { useState } from 'react'
import { Image } from 'antd'
import { BsSquare } from 'react-icons/bs'
import { MdAirplanemodeActive } from 'react-icons/md'
import { SelectItemCard } from '../../components/SelectItemCard'
import { AiOutlineRightCircle } from 'react-icons/ai'

import { RightCircleOutlined } from '@ant-design/icons'
export default () => {
  const [selectId, setSelectId] = useState<string>('')
  const [messageApi, contextHolder] = message.useMessage()

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `商品內容`,
      children: `商品內容`
    },
    {
      key: '2',
      label: `購買條款`,
      children: `購買條款`
    },
    {
      key: '3',
      label: `送貨服務`,
      children: `送貨服務`
    }
  ]

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
          },
          {
            title: 'ASUS ROG Azoth NX 無線機械遊戲鍵盤(紅軸)'
          }
        ]}
        className='bg-slate-100 p-2 rounded-md'
      />
      <div className='mt-5'>
        {contextHolder}
        <Card className='border-1 border-solid md:max-w-72 rounded-sm'>
          <Row gutter={[24, 0]}>
            <Col span={9}>
              <div className='' style={{ border: 'solid 1px #EEEEEE' }}>
                <Image width={'100%'} src='keyborad1.jpg' />
              </div>
              <div className='flex py-3'>
                <div style={{ border: 'solid 1px #EEEEEE' }}>
                  <Image width={100} src='keyborad1.jpg' />
                </div>
                <div style={{ border: 'solid 1px #EEEEEE' }} className='ml-5'>
                  <Image width={100} src='keyborad1.jpg' />
                </div>
              </div>
              <div>
                <div>
                  <BsSquare style={{ color: '#009BFF' }} /> 實體商品 - 2 ~
                  3天寄出
                </div>
                <div>
                  <MdAirplanemodeActive style={{ color: '#37CE28' }} /> 免費配送
                  ~ 住宅及工商地區免費送貨
                </div>
              </div>
            </Col>
            <Col span={15}>
              <div>
                <h1>ASUS ROG Azoth NX 無線機械遊戲鍵盤(紅軸)</h1>
                <div className='mt-5 flex'>
                  <Tag color='#000000'>ASUS</Tag>
                  <Tag color='#000000'>ROG</Tag>
                </div>
                <div className='mt-10'>
                  <div className='text-2xl'>請選擇型號</div>
                  <div className='grid grid-cols-2 gap-4 mt-5'>
                    <SelectItemCard
                      id='1'
                      isSelect={selectId == '1'}
                      imageUrl='keyborad1.jpg'
                      topRightOffers
                      name='ASUS ROG Azoth NX 無線機械遊戲鍵盤(紅軸)'
                      priceRange={'2199.00'}
                      bottomCenterEle
                      bottomStock
                      descriptionCenter={'鍵盤'}
                      handleOnclick={e => {
                        setSelectId(e!)
                      }}
                    />
                    <SelectItemCard
                      id='2'
                      isSelect={selectId == '2'}
                      imageUrl='keyborad1.jpg'
                      topRightOffers
                      name='ASUS ROG Azoth NX 無線機械遊戲鍵盤(紅軸)'
                      priceRange={'2199.00'}
                      bottomCenterEle
                      bottomStock={false}
                      descriptionCenter={'鍵盤'}
                      handleOnclick={e => {
                        setSelectId(e!)
                      }}
                    />
                  </div>
                </div>
                <div className='mt-5 flex gap-4 justify-end'>
                  <InputNumber
                    addonBefore='+'
                    defaultValue={1}
                    size={'large'}
                    disabled={selectId == '2'}
                  />
                  <Button
                    type={'primary'}
                    icon={<RightCircleOutlined />}
                    size={'large'}
                    style={{
                      background: selectId == '2' ? '#DBDBDB' : '#4894F6'
                    }}
                    onClick={() => {
                      if (selectId == '2') {
                        messageApi.warning('沒有相關庫存，請稍後查詢')
                      }
                    }}
                  >
                    加入購物車
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <div className='mt-10'>
          <Tabs defaultActiveKey='1' items={items} onChange={() => {}} />
        </div>
      </div>
    </div>
  )
}
