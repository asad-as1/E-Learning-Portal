import React from 'react'

const Product = ({products}) => {
  // console.log(products[0].attributes.img.data.attributes.url)
  return (
    <>
    <h1>Product</h1>
    {
      products.map((prod) => {
        console.log(prod.attributes.title)
        return (
          <div key={prod.id}>
            <h1 >Title: {prod.attributes.title}</h1>
            {/* <img src={`http://localhost:1337${prod.attributes.img.data.attributes.url}`} alt="" /> */}
          </div>
          )
        })
    }

    </>
  )
}

export default Product