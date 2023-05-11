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
import React, { ReactNode } from 'react'
import { QuickSearch } from '../../components/QuickSearch'
import { ItemCard } from '../../components/ItemCard'
const { Search } = Input
const { Text, Link } = Typography

export const MainPage = () => {
  const contentStyle: React.CSSProperties = {
    height: '500px',
    width: '1000px'
  }

  return (
    <div>
      <div className='mt-5 flex justify-between'>
        <div className='w-4/6'>
          <Carousel autoplay>
            <div>
              <Image
                src='https://img.openshop.com.hk/s2/202304/642e5f28369aa.jpg'
                style={contentStyle}
              />
            </div>
            <div>
              <Image
                src='https://img.openshop.com.hk/s2/202303/63fef6039ea28.jpg'
                style={contentStyle}
              />
            </div>
            <div>
              <Image
                src='https://img.openshop.com.hk/s2/202303/641d4c74e7026.jpg'
                style={contentStyle}
              />
            </div>
            <div>
              <Image
                src='https://img.openshop.com.hk/s2/202304/644a44f81a39c.jpg'
                style={contentStyle}
              />
            </div>
          </Carousel>
        </div>
        <div
          className='border border-solid p-1 rounded-md flex flex-col w-full ml-6'
          style={{ borderColor: '#EBEBEB' }}
        >
          <div style={{ color: 'red', fontWeight: 600, textAlign: 'left' }}>
            最新活動
          </div>
          <Link
            className='border border-solid px-5 py-4 mt-1 rounded-md text-center '
            style={{ borderColor: '#FFC195', color: 'black' }}
          >
            Jabra 消費獎賞享不停
          </Link>
          <Link
            className='border border-solid px-5 py-4 mt-1 rounded-md text-center'
            style={{ borderColor: '#FFC195', color: 'black' }}
          >
            Altech電競椅
          </Link>
          <Link
            className='border border-solid px-5 py-4 mt-1 rounded-md text-center'
            style={{ borderColor: '#FFC195', color: 'black' }}
          >
            MSI 限時購買MON
          </Link>
          <Link
            className='border border-solid  px-5 py-4 mt-1 rounded-md text-center'
            style={{ borderColor: '#FFC195', color: 'black' }}
          >
            Jabra 消費獎賞享不停
          </Link>
        </div>
      </div>
      <QuickSearch />
      <Tabs
        className='mt-10'
        defaultActiveKey='2'
        items={['TOP商品', 'TOP滑鼠', 'TOP鍵盤'].map((e, i) => {
          const id = String(i + 1)

          let childrens: ReactNode = (
            <div className='py-2'>
              <ItemCard></ItemCard>
            </div>
          )
          if (i == 0) {
            childrens = [
              'top1.jpg',
              'top2.jpg',
              'top3.jpg',
              'top4.jpg',
              'top5.jpg'
            ].map((e, i) => {
              let topLeftisStock = true
              if (i > 2) {
                topLeftisStock = false
              }
              return (
                <ItemCard
                  topLeftStock
                  topLeftisStock={topLeftisStock}
                  imageUrl={e}
                ></ItemCard>
              )
            })
          } else if (i == 1) {
            childrens = [
              'mouse1.jpg',
              'mouse2.jpg',
              'mouse3.jpg',
              'mouse4.jpg',
              'mouse5.jpg'
            ].map((e, i) => {
              let topLeftisStock = true
              if (i > 2) {
                topLeftisStock = false
              }
              return (
                <ItemCard
                  topLeftStock
                  topLeftisStock={topLeftisStock}
                  imageUrl={e}
                ></ItemCard>
              )
            })
          }

          return {
            label: <span>{e}</span>,
            key: id,
            children: (
              <div className='py-2 grid grid-cols-4 gap-4'>{childrens}</div>
            )
          }
        })}
      />
    </div>
  )
}
