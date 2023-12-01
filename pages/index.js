"use client"
import { useState } from 'react'
import Image from 'next/image'
import Wrapper from 'src/public/components/Wrapper'
import { useRouter } from 'next/router'


const Home = () => {
  const router = useRouter()
  const [isHover, setIsHover] = useState(false)
  const onHover = () => {
    setIsHover(true)
  }

  return (
    <Wrapper>
      <img src="/images/main_bg.png" style={{width: "100%", height:"100%",  objectFit:"contain", cursor:"pointer"}} onClick={()=>router.push("/page/1")}/>
    </Wrapper>
      
  )
}

export default Home