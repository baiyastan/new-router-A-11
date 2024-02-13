import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./About.css"

function Product() {
    const {id} = useParams()
    const API = `http://178.128.162.248:8070/api/v1/advertisement/ads/${id}`

    const [item, setItem] = useState({})
    const [image, setImage] = useState('')

    async function getProductById() {
        try{
            const res = await axios.get(API)

            console.log(res)
            setItem(res.data)
            setImage(res.data.image)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductById()
    }, [])
  return (
    <div className='get-product'>
        <div className='product-image'>
            <div className='image-item'>
                 {
                    item.galleries?.map((x) => (
                        <img onClick={() => setImage(x.image)} key={x.id} src={x.image} alt="image" />
                    ))
                 }   
            </div>

            <img className='main-image' src={image} alt="" />
        </div>
    </div>
  )
}

export default Product