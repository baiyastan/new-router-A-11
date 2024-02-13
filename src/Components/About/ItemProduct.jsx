import React from 'react'
import { Link } from 'react-router-dom'

function ItemProduct({data}) {
  return (
    <Link to={`/product/${data.id}`} className='item-pro'>
        <img src={data.image} alt={data.title} />
        <div className='item-info'>
            <p>{data.title}</p>
            <div className='price'>{data.price} {data.currency}</div>
        </div>
    </Link>
  )
}

export default ItemProduct