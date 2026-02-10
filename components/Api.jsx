import { useState, useEffect } from 'react'
import  axios from 'axios'
import './Api.css'
import { useNavigate } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function Api() {
    const [data, setData] = useState([])

    const Navigate = useNavigate() 

    useEffect(()=>{
        async function fetching(){
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
    }
    fetching();
    },[])


    const viewdetails = (id) => {
        Navigate(`/ProductDetails/${id}`)
    }

    return (
        <>
            <div className="product">
                {data.map((item)=>(
                    <div key={item.id} className='prod'>
                        <div className='imgdiv'>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className='pp'><p>{item.title}</p></div> 
                        <div className="price"><p>Price:${item.price}</p></div>
                        <div className="divbtn">
                            <button className='buybtn'>Buy</button>
                            <button className='cartbtn' onClick={() => viewdetails(item.id)}>View Details</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        </> 
  )
}

export default Api