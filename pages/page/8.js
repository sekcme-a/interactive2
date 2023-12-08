
import styles from "src/Eight.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"
import Wrapper from "src/public/components/Wrapper"

const Eight = () => {

  return(
    <Wrapper>
    <div className={styles.main_container}>
      <img src="/images/8_chart.png" alt="차트" />

      <div>
        <motion.div className={styles.text_container}
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{ duration: 1, delay:1.2}}
        >
          <h1>대한민국 <strong>시험생</strong></h1>
          <h1>줄어들고 있습니다.</h1>
        </motion.div>

        <motion.h1 className={styles.and}
          initial={{y: 0, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{ duration: 1, delay:2}}
        >
          &
        </motion.h1>

        <motion.div className={styles.text_container}
          initial={{y: 20, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{ duration: 1, delay:3}}
        >
          <h1>대한민국 <strong>유학생</strong></h1>
          <h1>늘어나고 있습니다.</h1>
        </motion.div>
      </div>
      
      <div style={{display:"flex", justifyContent:"flex-end", width:"100%", marginBottom:"40px"}}>
        <NextButton url="/page/9"/>
      </div>
    </div>
    </Wrapper>
  )
}

export default Eight