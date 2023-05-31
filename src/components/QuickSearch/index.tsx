import { Button, Form, Input, Radio, Select } from 'antd'
import React, { useState } from 'react'

type LayoutType = Parameters<typeof Form>[0]['layout']

export const QuickSearch = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <div
      className='border border-solid p-1 mt-5 rounded-md'
      style={{ borderColor: '#EBEBEB' }}
    >
      <div style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>
        快速搜索商品
      </div>
      <Form
        layout={'vertical'}
        form={form}
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '15px',
          justifyContent: 'space-between'
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item label='類別' name='a'>
          <Select
            defaultValue='鼠標'
            style={{ width: 140 }}
            options={[
              { value: '鼠標', label: '鼠標' },
              { value: '鍵盤', label: '鍵盤' },
              { value: '顯卡', label: '顯卡' }
            ]}
          />
        </Form.Item>
        <Form.Item label='品牌' name='b' className='pl-4'>
          <Select
            defaultValue='Logitech'
            style={{ width: 140 }}
            options={[
              { value: 'Logitech', label: 'Logitech' },
              { value: 'ASUS', label: 'ASUS' },
              { value: 'MSI', label: 'MSI' },
              { value: 'ROG', label: 'ROG' }
            ]}
          />
        </Form.Item>
        <Form.Item label='型號' name='b' className='pl-4'>
          <Select
            defaultValue='lucy'
            style={{ width: 140 }}
            options={[{ value: 'G502', label: 'G502' }]}
          />
        </Form.Item>
        <Form.Item label='價錢' name='b' className='pl-4'>
          <Input placeholder='0' />
        </Form.Item>
        <div className='border border-b-1 border-black border-solid w-5 ml-1'></div>
        <Form.Item label='⁣⁣⁣⁣' name='b' className='pl-1'>
          <Input placeholder='--' />
        </Form.Item>

        <Form.Item className='pl-4'>
          <Button
            type='primary'
            htmlType={'submit'}
            size={'large'}
            style={{
              backgroundColor: '#E74B3C',
              marginTop: '2em'
            }}
          >
            快速搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
