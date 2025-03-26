import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function SingleProduct() {
const [product, setProduct] = useState({})

    const paramObj = useParams()

    console.log(paramObj)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${paramObj.id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])

  return (
    <div>SingleProduct: 
    <h1> {product.title} </h1>

    <img src={product.image} alt={product.title}/>

    <h2> Price:  {product.price}€ </h2>
    <h3> Description:  </h3>
    <p> {product.description} </p>
    </div>
  )
}
