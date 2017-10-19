import React from 'react'
import { Card, CardImg, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import Api from 'api'

export default function ProductMiniature ({item}) {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src={Api.images.productImage(item.id, item.id_default_image)}
        alt={item.name[0].value} />
      <CardBody>
        <CardSubtitle className='text-center'>
          <Link to={`/product/${item.id}-${item.link_rewrite[0].value}`}>
          {item.name[0].value}
          </Link>
        </CardSubtitle>
        <Badge>
          $
          {parseFloat(item.price).toFixed(2)}
        </Badge>
      </CardBody>
    </Card>
  )
}
