import React ,{useState,useEffect} from 'react'
import './featured.css'
import BTC from '../assets/BTC-logo.png'
import {FiArrowUpright,FiArrowDown} from 'react-icons/fi'
import axios from 'axios'
import { useEffect, useState } from 'react'


const featured = () => {

    const [data,setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect (()=> {
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }) ,[]

    console.log(data)

    if (!data) return null

  return (
    <div className='featured'>
        <div className='container'>

            {/*Left*/}
            <div className='left'>
                <h2>explore top Crypto's Like Bitcoin,Dogecoin</h2>
                <p>See all Available Assets:Cryptocurrency and NFT's</p>
                <button className='btn'>See More Coins</button>
            </div>

            {/*Right*/}
            <div className='right'>
                <div className='card'>
                <div className='top'>
                    {/*<img src={BTC} alt='/'>*/}
                    <img src={data[0].image} alt=''/>
                </div>
            </div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
        </div>

        {data[0].price_change_percentage24h < 0 ? (
            <span className='red'>
                <FiArrowDown className='icon'/>
                {data[0].price_change_percentage24h.toFixed(2)}%
            </span>
        ):(
            <span className='green'>
                <FiArrowUpright className='icon'/>
                {data[0].price_change_percentage24h.toFixed(2)}%
            </span>
        )}
    </div>
          <div className='card'>
                <div className='top'>
                    {/*<img src={BTC} alt='/'>*/}
                    <img src={data[0].image} alt=''/>
                </div>
            </div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
        </div>
  )
        {data[0].price_change_percentage24h < 0 ? (
            <span className='red'>
                <FiArrowDown className='icon'/>
                {data[0].price_change_percentage24h.toFixed(2)}%
            </span>
        ):(
            <span className='green'>
                <FiArrowUpright className='icon'/>
                {data[0].price_change_percentage24h.toFixed(2)}%
            </span>
        )}
    
    
        }
  
    

export default featured
