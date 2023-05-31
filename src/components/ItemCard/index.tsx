import { Badge, Card, Tag, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { FC, ReactNode } from 'react'
const { Text, Link } = Typography

interface ItemCardModel {
  topLeftStock?: boolean
  topLeftisStock?: boolean
  topRightOffers?: boolean
  name?: string
  descriptionCenter?: string
  bottomCenterEle?: boolean
  imageUrl?: string
  bottomStock?: boolean
  bottomisStock?: boolean
  priceRange?: number | string
  handleOnclick: () => void
}

export const ItemCard: FC<ItemCardModel> = ({
  topLeftStock,
  topLeftisStock,
  topRightOffers,
  name,
  descriptionCenter,
  bottomCenterEle,
  imageUrl,
  bottomStock,
  priceRange,
  handleOnclick
}) => {
  return (
    <div className='w-full'>
      <Card
        hoverable
        className='border-2 border-solid md:max-w-72'
        onClick={() => {
          handleOnclick()
        }}
        style={{ borderColor: '#EBEBEB' }}
        cover={
          <>
            <div className='flex justify-between'>
              {topLeftStock && (
                <Badge
                  count={topLeftisStock ? '現貨' : '無貨'}
                  showZero
                  color={topLeftisStock ? '#2DB2CF' : '#9D9D9D'}
                  className='pt-2 pl-2'
                  style={{
                    borderRadius: '3px'
                  }}
                ></Badge>
              )}
              {topRightOffers && (
                <Badge.Ribbon
                  style={{
                    marginTop: '-2em'
                  }}
                  text={
                    <Text className='text-white'>
                      13% <br />
                      OFF
                    </Text>
                  }
                  color='#E32A57'
                ></Badge.Ribbon>
              )}
            </div>
            <img
              alt='example'
              src={imageUrl}
              className='object-contain  h-48 w-96'
            />
          </>
        }
      >
        <Meta
          title={<Text className='text-lg'>{name}</Text>}
          description={
            <div className='grid justify-center items-center'>
              {descriptionCenter && (
                <Text style={{ color: '#a0a0a0' }} className='text-center'>
                  {descriptionCenter}
                </Text>
              )}
              <Text
                className={`text-md text-red-400 ${
                  bottomCenterEle ?? 'text-center'
                }`}
              >
                ${`${priceRange} `}
              </Text>
              {bottomCenterEle && (
                <Badge
                  count={bottomStock ? '現貨' : '無貨'}
                  showZero
                  color={bottomStock ? '#2DB2CF' : '#9D9D9D'}
                  className='pt-2 pl-2'
                  style={{
                    borderRadius: '3px'
                  }}
                ></Badge>
              )}
            </div>
          }
        />
      </Card>
    </div>
  )
}
