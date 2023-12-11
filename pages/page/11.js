import styles from "src/Eleven.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"

const Eleven = () => {


  return(
    <div style={{width:"100%", height:"100%", display:"flex", position:"relative"}}>
      <div className={styles.left_container}>
        <div className={styles.border}>
          <h1>#<strong>2</strong></h1>
        </div>

      </div>
      

      <div style={{position:"absolute", top:"0", left:"0", height:"100%", width:"100%", display:"flex", flexWrap:"wrap"}}>

        <motion.div className={styles.one_container}
          initial={{ x:10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay:.5}}
        >
          <div style={{display:'flex', flexWrap:"wrap", justifyContent:"flex-end"}}>
            <h1>{`대한민국\n이민정책`}</h1>
            <p>{`상호주의 + 사회적 비용 최소화

유학생 등 대한민국에 기여한 외국인,
전문인력 비자 도입으로 한국사회 발전기여`}</p>
          </div>
        </motion.div>


        <motion.div className={styles.two_container}
        
          initial={{ x:0, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay:1}}
        >
          
          <div className={styles.top}>
            <h1>권순길<strong style={{marginLeft:"10px"}}>안산시외국인주민상담지원센터장</strong></h1>
          </div>
          <div className={styles.text}>
            <div className={styles.img_container}>
              <img src="/images/11.png" alt="권순길" />
            </div>
            <div>
              <p>전문인력 비자 등 <strong>새로운 비자</strong> 도입
                  한국사회 기여자, 기존 비자제도 일부 
                  변경을 통한 외국인 전문인력 양성
                  <strong> 늘어나는 외국인을 한국사회 구성원으로</strong>
              </p>
            </div>
          </div>
  
        </motion.div>

        <motion.div style={{display:"flex", width:'100%', justifyContent:"flex-end"}}
        
        initial={{ x:0, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{ duration: 1, delay:2}}
        >
           <NextButton url="/article" />
        </motion.div>
      </div>
    </div>
  )
}

export default Eleven