import React, {useState, useEffect} from 'react'
import axios from "axios"
import ItemProduct from './ItemProduct'
import "./About.css"

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads/"

const CATEGORY_API = "http://178.128.162.248:8070/api/v1/category/categories/"

function About() {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])

    async function getProduct() {
        try{
            const res = await axios.get(API)
            setProduct(res.data.results)
            console.log(res)
        }catch(error) {
            console.log(error)
        }
    }

    async function getCategory() {
        try{
            const res = await axios.get(CATEGORY_API)
            setCategory(res.data)
            console.log(res)
        }catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getProduct()
        getCategory()
    }, [])

    async function getProductByCategory(id) {
        try{
            const res = await axios.get(`${API}?category=${id}`)
            console.log(res)
            setProduct(res.data.results)
        }catch(error) {
            console.log(error)
        }
    }

    
  return (
    <div>
        <div className='category'>
            {
                category.map((item) => (
                    <div 
                    onClick={() => getProductByCategory(item.id)} className='item-category' key={item.id}>
                        <img src={item.image} alt='category' />
                        <p>{item.title_kg}</p>
                    </div>
                ))
            }
        </div>
        <div className='about-product'>
            {
                product.map((item, index) => (
                    <ItemProduct key={index} data={item}  />
                ))
            }
        </div>
    </div>
  )
}

export default About