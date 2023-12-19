import styles from "src/Two.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"

const Two = () => {


  return(
    <div style={{width:"100%", height:"100%", display:"flex"}}>
      <div className={styles.left_container}>
        <div className={styles.border}>
          <motion.div className={styles.img_container}
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity:1}}
            transition={{ duration: 1}}
          >
            <img src="/images/moon.png" alt="비자" />
          </motion.div>
        </div>

      </div>
      

      <div className={styles.right_container}>



        <motion.div className={styles.one} style={{marginTop: "70px"}}
          initial={{x: 20, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay: .6}}
        >
          <h1>해외 이민 정책</h1>
          <div className={styles.one_content_container}>
            <h2 style={{lineHeight: 1.3, textAlign:"center"}}>대부분의 정책 기조는 각국의 경제 회복과
노동력 부족 문제 해결을 위한 방향</h2>
          </div>
        </motion.div>



        <motion.div className={styles.two}
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay: 1.2}}
        >
          <h1 className={styles.content} style={{textAlign:"end"}}>{`호주 인력부족 문제 해결을 위한 워킹홀리데이 쿼터 증가

일본의 저출산⋅고령화로 인한 노동력 부족 문제 해결을 위한 체류자격(특정기능 1호, 2호) 신설 등`}</h1>
        </motion.div>


        <motion.div style={{display:"flex", justifyContent:"flex-end", flexWrap:"wrap", marginBottom:"20px"}}
          initial={{ opacity: 0}}
          animate={{ opacity:1}}
          transition={{ duration: 1, delay: 1.8}}
        >
          <h1 style={{color:"white", fontSize:"35px", width:"100%", textAlign:"end", marginBottom:"20px"}}>호주는 어떨까요?</h1>
          <NextButton url="/page/7"/>

        </motion.div>
      </div>
    </div>
  )
}

export default Two