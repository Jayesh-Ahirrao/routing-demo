import React from 'react'

const page = ({params}) => {
  return (
    <h1>Dynamic route inside product {params.productId}</h1>
  )
}

export default page;