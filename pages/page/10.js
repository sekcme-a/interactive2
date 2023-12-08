import styles from "src/Ten.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"

const Ten = () => {


  return(
    <div style={{width:"100%", height:"100%", display:"flex", position:"relative"}}>
      <div className={styles.left_container}>
        <div className={styles.border}>
          <h1>#<strong>1</strong></h1>
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
            <p>{`늘어나는 외국인 주민, 다양한 정책\n대상자도 정책 안으로 들어와야`}</p>
          </div>
        </motion.div>


        <motion.div className={styles.two_container}
        
          initial={{ x:0, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay:1}}
        >
          
          <div className={styles.top}>
            <h1>상생</h1>
            <img src="/images/10_chart.png" alt="그래프"  />
          </div>
          <div className={styles.text}>
            <h1>둘 이상 서로 복 돋우며 다 같이 잘 살아간다</h1>
            <p>외국인 인구 지원, <strong>정부와 지방자치 단체</strong>가 나서
<strong> 대상자들</strong>도 정책 안으로 <strong>적극적인 참여</strong>가 필요</p>

            <h6>* 출처 = 표준국어대사전 </h6>
          </div>
  
        </motion.div>

        <motion.div style={{display:"flex", width:'100%', justifyContent:"flex-end"}}
        
        initial={{ x:0, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{ duration: 1, delay:2}}
        >
           <NextButton url="/page/11" />
        </motion.div>
      </div>
    </div>
  )
}

export default Ten