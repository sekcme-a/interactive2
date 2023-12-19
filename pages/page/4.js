import styles from "src/Four.module.css"
import { motion } from "framer-motion"
import NextButton from "src/public/components/NextButton"

const Four = () => {


  return(
    <div style={{
      width:"100%", height:"100%", backgroundImage: `url("/images/main_bg.png")`, position:"relative",
      alignContent:"flex-start",
       objectFit:"cover", 
      display:"flex",flexWrap:"wrap"}}
    >
      <h1  className={styles.title}>
      대한민국 비자 정책 변화에 대한 의견
      </h1>
      <div className={styles.chat_container}>


        <motion.div className={styles.right_container}
          initial={{ x:10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: .5}}
        >
          <div className={styles.right_chat}>
            <p>영주 귀화 조건을 완화하면 좋겠어요.</p>
            <div className={styles.triangle} />
          </div>
        </motion.div>

        <motion.div className={styles.left_container}
          initial={{ x:-10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: 1}}
        >
          <div className={styles.left_chat}>
            <p>한국에서 10년 이상 일하며 한국의 질서를 잘 지킨 외국인들을 대상으로 한국어 능력 테스트 등을 통한 숙련 외국인 영주권 및 이민정책이 필요합니다</p>
            <div className={styles.triangle} />
          </div>
        </motion.div>

        <motion.div className={styles.right_container}
          initial={{ x:10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: 1.5}}
        >
          <div className={styles.right_chat}>
            <p>취업 비자 등 기간 연장이 필요해요.</p>
            <div className={styles.triangle} />
          </div>
        </motion.div>

        <motion.div className={styles.left_container}
          initial={{ x:-10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: 2}}
        >
          <div className={styles.left_chat}>
            <p>한국에서 10년 이상 일하며 한국의 질서를 잘 지킨 외국인들을 대상으로 한국어 능력 테스트 등을 통한 숙련 외국인 영주권 및 이민정책이 필요합니다한국에서 거주 중인 결혼이민자들의 가족을 초청해 한구에서 일할 수 있는 기회를 확대하면 좋겠습니다.</p>
            <div className={styles.triangle} />
          </div>
        </motion.div>

        <motion.div className={styles.right_container}
          initial={{ x:10, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: 2.5}}
        >
          <div className={styles.right_chat}>
            <p>오랜 기간 유학한 유학생들을 위한 비자 발급 조건이 완화되면 좋겠어요.</p>
            <div className={styles.triangle} />
          </div>
        </motion.div>


        <motion.div style={{display:"flex", justifyContent:"flex-end", marginTop:"30px", position:"absolute", bottom:"20px", right:'20px'}}
          initial={{ x:0, opacity: 0}}
          animate={{x:0, opacity:1}}
          transition={{ duration: 1, delay: 3}}
        >
          <NextButton url="/page/5"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Four