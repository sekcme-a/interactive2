import { useState } from "react"
import { useEffect } from "react"

import styles from "src/Question.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"

const { useRouter } = require("next/router")



const Question = () => {

  const router = useRouter()
  const {index} = router.query

  const [title, setTitle] = useState("")
  const [img, setImg] = useState("")
  const [text, setText] = useState("")

  useEffect(()=> {
    console.log(index)
    setImg("")
    if(index==="1"){
      setTitle("대한민국 거주를 위해 취득하고자 하는 비자는 무엇인가요?")
      setImg("/images/q1_graph.png")
      setText("* 기타 응답자의 경우 귀화(2명)")
    }
    else if (index==="2") {
      setTitle("대한민국 이민 정책과 비자에 대한 정보는 어디서 얻고 계신가요?")
      setImg("/images/q2_graph.png")
      setText("* 기타 응답자의 경우 커뮤니티(1명)")
    }
    else if (index==="3") {
      setTitle("대한민국 이민 및 비자 정책에 대해 느끼는 인식을 모두 골라주세요.")
      setImg("/images/q3_graph.png")
      setText("* 긍정 응답 없음")
    }
    else if (index==="4") {
      setTitle("대한민국 외 해외 국가의 이민 및 비자정책에 대해 들어보신 적 있나요?")
      setImg("/images/q4_graph.png")
      setText("")
    }
    else if (index==="5") {
      setTitle("대한민국 이민 및 비자 정책의 변화가 필요하다고 생각하십니까?")
      setImg("/images/q5_graph.png")
      setText("A. 90%")
    }
  },[index])

  return(
    <>
      <motion.div className={styles.top}
        initial={{x: -20, opacity: 0}}
        animate={{x: 0, opacity:1}}
        transition={{ duration: 1, delay: 0}}
      >
        <h1 className={styles.q}>{`Q${index}`}</h1>
        <h1 className={styles.title}>{title}</h1>
      </motion.div>
      <div style={{display:"flex", justifyContent:'center', width:"100%"}}>
        <motion.img src={img} alt="그래프" className={index==="2"||index==="4" ? styles.verticalImg : styles.img}
          initial={{ opacity: 0}}
          animate={{opacity:1}}
          transition={{ duration: 1, delay: .6}}
        />
      </div>
      {index!=="5" ?
        <motion.div className={styles.bottom}
          initial={{opacity: 0}}
          animate={{ opacity:1}}
          transition={{ duration: 1, delay: 1}}
        >
          <p>{text}</p>
          <NextButton text="close" />
        </motion.div>
        :
        <motion.div

        >
          <motion.div style={{display:"flex", alignItems:"flex-end",}}
            initial={{x: -10, opacity: 0}}
            animate={{ x:0,opacity:1}}
            transition={{ duration: 2, delay: 1.5}}
          >
            <h1 style={{color:"white", fontSize:"30px", marginRight:"10px", marginBottom:"8px"}}>A.</h1>
            <h1 style={{color:'white', fontSize:"60px" }}>90%</h1>
          </motion.div>
          <motion.div className={styles.bottom}
            initial={{opacity: 0}}
            animate={{ opacity:1}}
            transition={{ duration: 1, delay: 2.5}}
          >

            <h1 style={{color:"white", fontSize:"30px", marginRight:"10px"}}>변화 필요에 대한 긍정 응답
  어떤 의견이 있을까요?</h1>
            <NextButton url="/page/4" />
          </motion.div>
        </motion.div>
      }
    </>
  )
}

export default Question