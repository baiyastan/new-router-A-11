import React, {useState} from 'react'
import "./Service.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services"


function CreateService() {
  const initialState = {
    name: "",
    category: "",
    image: "",
  }
  const [serivce, setService] = useState(initialState)

  const navigate = useNavigate()

  const handleChange = (event) => {
    const {name, value} = event.target;

    setService(prevService => ({
      ...prevService,
      [name]: value
    }))
  }

  async function createService() {
    try{
      const res = await axios.post(API, serivce)

      if(res.status === 201) {
        setService(initialState)
        navigate("/service")
      }

      console.log(res)
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input  
        type='text' 
        name="name" 
        placeholder='Name' 
        value={serivce.name} 
        onChange={handleChange} 
      />
      <input 
        type='text' 
        name="category" 
        placeholder='Category'
        value={serivce.category}
        onChange={handleChange}
         />
      <input 
        type='url' 
        name="image" 
        placeholder='Image Link' 
        value={serivce.image}
        onChange={handleChange}
        />

      <button onClick={() => createService()} className='create-btn'>
        Create Service
        </button>


        <img src={serivce.image} alt="" />
    </div>
  )
}

export default CreateService