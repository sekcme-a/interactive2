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
            <img src="/images/2_visa.png" alt="비자" />
          </motion.div>
        </div>

      </div>
      

      <div className={styles.right_container}>



        <motion.div className={styles.one}
          initial={{x: 20, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay: .6}}
        >
          <h1>비자*</h1>
          <div className={styles.one_content_container}>
            <h2>외국인에 대한 출입국 허가의 증명</h2>

            <p>외국을 여행하려는 사람은 현재 자기 나라 또는 체재국의 대사, 공사, 영사로부터 여권에 그 나라의 출입국 허락 서명을 받아야한다</p>
          </div>
        </motion.div>



        <motion.div className={styles.two}
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{ duration: 1, delay: 1.2}}
        >
          <h1 className={styles.title}>비자 인식</h1>
          <h1 className={styles.subtitle}>Awareness of visa</h1>
          <h1 className={styles.content}>{`국내 베트남 사람들은** 우리나라 비자 정책에 대해 어떻게 인식하고 있을까요?`}</h1>
        </motion.div>


        <motion.div className={styles.three}
          initial={{ opacity: 0}}
          animate={{ opacity:1}}
          transition={{ duration: 1, delay: 1.8}}
        >
          <NextButton url="/page/3"/>
          <h3>* 출처 = 표준국어대사전  ** 국내 거주 베트남 성인 30명 대상</h3>
          <div className={styles.three_border} />
          <p style={{marginBottom:"20px"}}>{`
조사의뢰자 : (주)몽드 한국다문화뉴스  조사기관 : (주)사람과사회
조사방법 : 온라인 설문조사  조사기간 : 2023년 11월 1일~30일
조사대상 : 국내 거주 베트남 성인 30명  응답률 : 100%`}</p>
        </motion.div>


      </div>
    </div>
  )
}

export default Two