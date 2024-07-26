import React from 'react'

const page = ({params} : {params: {productId : string}}) => {   // to remove TS error 
  return (
    <h1>Dynamic route inside product {params.productId}</h1>
  )
}

export default page;