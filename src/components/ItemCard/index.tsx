import { Badge, Card, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { FC, ReactNode } from 'react'
const { Text, Link } = Typography

interface ItemCardModel {
  topLeftStock?: boolean
  topLeftisStock?: boolean
  topRightOffers?: boolean
  name?: string
  descriptionCenter?: boolean
  bottomCenterEle?: ReactNode
  imageUrl?: string
  bottomStock?: boolean
  bottomisStock?: boolean
}

export const ItemCard: FC<ItemCardModel> = ({
  topLeftStock,
  topLeftisStock,
  topRightOffers,
  name,
  descriptionCenter,
  bottomCenterEle,
  imageUrl,
  bottomStock
}) => {
  return (
    <div className='w-full'>
      <Card
        hoverable
        className='border-2 border-solid md:max-w-72'
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
          title={<Text className='text-lg'>Microsoft Xbox 無線控制器</Text>}
          description={<Text className='text-md text-red-400'>$369 ~ 419</Text>}
        />
      </Card>
    </div>
  )
}
