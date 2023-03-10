import '../styles/globals.css'
import "../styles/nav.css"
import Link from 'next/link'
import Sawo from "sawo"
import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import { useRouter} from 'next/router'
import Chatbot from '../components/Chatbot'
 


function Marketplace({ Component, pageProps,props }) {

  const activeStyles = {
    color: "white"
  }

  let active = 'digital_asset';
  const handleClick = (str) => {
    active = str;
  }
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  return (
    <div className="bg-white">
      {/* <nav className="border-b p-6" style = {{backgroundColor:"#082850"}}>
        <p className="text-4xl font-bold" style = {{color:"white"}}>AgroConnect Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-gray-500" style = {(active == 'home') ? activeStyles : {}} onClick={handleClick('home')}>
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-gray-500" style = {(active == 'digital_asset') ? activeStyles : {}} onClick={handleClick('digital_asset')}>
              Add To Marketplace
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-gray-500" style = {(active == 'my') ? activeStyles : {}} onClick={handleClick('my')}>
              My Digital Assets
            </a>
          </Link>
          <Link href="/creatordashboard" style = {{cursor:"pointer"}}
           >
            <a className="mr-6 text-gray-500">
              Creator Dashboard
            </a>
          </Link>
          <Link href="/newss">
            <a className="mr-6 text-gray-500" style = {{cursor:"pointer"}}>
              Agro News
            </a>
          </Link>
          <Link href="/login">
            <a className="mr-6 text-gray-500" style = {{cursor:"pointer"}}>
              Login
            </a>
          </Link>
          <Link href="https://radiant-mesa-29894.herokuapp.com/" target = "_blank">
            <a className="mr-6 text-gray-500" style = {(active == 'predict') ? activeStyles : {}} onClick={handleClick('predict')}>
              Predict Quality of Crops
            </a>
          </Link>
          <Link href="https://rice-disease.herokuapp.com/" target = "_blank">
            <a className="mr-6 text-gray-500">
              Disease Prediction
            </a>
          </Link>
        </div>
      </nav> */}

      {showHeader && <Navbar />}

      <Chatbot/>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace
