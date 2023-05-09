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
            defaultValue='lucy'
            style={{ width: 140 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true }
            ]}
          />
        </Form.Item>
        <Form.Item label='品牌' name='b' className='pl-4'>
          <Select
            defaultValue='lucy'
            style={{ width: 140 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true }
            ]}
          />
        </Form.Item>
        <Form.Item label='型號' name='b' className='pl-4'>
          <Select
            defaultValue='lucy'
            style={{ width: 140 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true }
            ]}
          />
        </Form.Item>
        <Form.Item label='價錢' name='b' className='pl-4'>
          <Input placeholder='input placeholder' />
        </Form.Item>
        <div className='border border-b-1 border-black border-solid w-5 ml-1'></div>
        <Form.Item label='⁣⁣⁣⁣' name='b' className='pl-1'>
          <Input placeholder='input placeholder' />
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
