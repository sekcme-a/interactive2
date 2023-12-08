"use client"
import { useState } from 'react'
import Image from 'next/image'
import Wrapper from 'src/public/components/Wrapper'
import { useRouter } from 'next/router'
import NextButton from 'src/public/components/NextButton'


import styles from "src/index.module.css"

const Home = () => {
  const router = useRouter()
  const [isHover, setIsHover] = useState(false)
  const onHover = () => {
    setIsHover(true)
  }

  return (
    <Wrapper>
      <div style={{position:"relative", width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{width: "100%", height:"100%",  objectFit:"cover", backgroundImage: `url("/images/main_bg.png")`, display:"flex", justifyContent:"center", alignItems:"center" }}>
        {/* <NextButton url="/page/1" /> */}
          <div style={{width:"90%", height:"90%", border:"3px solid #C8FD06", borderRadius:"30px", width:"95%", height:"95%",position: "relative  "}}>
            <h1 className={styles.title}>
              {`KOREA
              IMMIGRATION
              COMPARISON
              DIRECTION`}
            </h1>
            <div className={styles.bottom_container}>
              <div className={styles.button_container}>
                <NextButton url="/page/1"/>
              </div>
              
              <div className={styles.text1}>국내 해외 인구 유입경로와 선진국 정책 비교</div>
              <div className={styles.text2}>베트남 및 호주를 중심으로</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
      
  )
}

export default Home