import styles from "src/Seven.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"

const Seven = () => {


  return(
    <div style={{width:"100%", height:"100%", display:"flex", position:"relative"}}>
      <div className={styles.left_container}>
        <div className={styles.border}>
        </div>

      </div>
      

      <div style={{position:"absolute", top:"0", left:"0", height:"100%", width:"100%", display:"flex", flexWrap:"wrap"}}>
        <motion.div className={styles.one_container}
          initial={{x: -10, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay:0.5}}
        >
          <div>
            <h1 className={styles.name}>Hon Andrew Giles MP</h1>
            <h1 className={styles.job}>Minister for Immigration, Citizenship and Multicultural Affairs</h1>
            <div className={styles.one_content_container}>
              <img src="/images/hon.png" alt="hon andrew giles MP" className={styles.one_img}/>
              <h1 className={styles.one_content}>
                <strong>유학생과 숙련된 이민자</strong>를 끌어들이고
                빠른 비자 처리 과정을 통하여 호주로
                <strong>이민 오는 것에 매력을 더하는 것 </strong>중요
              </h1>
            </div>
          </div>
        </motion.div>


        <motion.div className={styles.two_container}
          initial={{x: 10, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay:1}}
        >
          <div>
            <h1 className={styles.name} style={{textAlign:"end"}}>장성호</h1>
            <h1 className={styles.job} style={{textAlign:"end"}}>전 호주이민이주공사 팀장</h1>
            <div className={styles.two_content_container}>
              <img className={styles.two_img} src="/images/jang.png" alt="장성호" />
              <h1 className={styles.two_content}>
                한국 사회도 <strong>부족ㆍ필요한 직업군 선정</strong> 후
                해당 직군 취업 위한 방법 선택을 용의하게..
                <strong>유학생 및 숙련기술자에 영주권 취득 기회</strong>를 줄 수 있는 <strong>전반적 시스템 구축</strong>이 중요해 보여
              </h1>
              
            </div>
          </div>
        </motion.div>
        <motion.div style={{display:"flex", justifyContent:"flex-end", width:"100%"}}
          initial={{x: 0, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay:1.5}}
        >
          <NextButton url="/page/8" />
        </motion.div>
      </div>
    </div>
  )
}

export default Seven