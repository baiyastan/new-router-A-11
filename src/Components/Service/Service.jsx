import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./Service.css"
import { Link } from 'react-router-dom'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services"
function Service() {
  const [serivce, setService] = useState([])

  async function getService() {
    try{
      const {data} = await axios.get(API)

      setService(data)
      console.log(data)
    } catch(error) {
      console.log(error)
    }
  }

   useEffect(() => {
    getService()
   }, [])

  return (
    <div className='wrapper'>
      <Link to="/create-service" className='create-btn'>Create Service</Link>

      <div className='service'>
        {
          serivce.map((item) => (
            <div key={item.id} className='item-service'>
              <img src={item.image} alt='service' />
              <div className='btns'>
                <Link to={`/update-service/${item.id}`} className='update'>Update</Link>
                <button className='delete'>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Service