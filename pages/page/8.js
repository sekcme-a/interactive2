
import styles from "src/Eight.module.css"
import NextButton from "src/public/components/NextButton"

import { motion } from "framer-motion"
import Wrapper from "src/public/components/Wrapper"
import { useState } from "react"
import { useEffect } from "react"
import { Grid } from "@mui/material"

const Eight = () => {

  const [count, setCount] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount % 3) + 1);
    }, 1700);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return(
    <Wrapper>
    <div className={styles.main_container}>
      <img src="/images/8_chart.png" alt="차트" />

          {/* <h1 className={styles.asdf}>대한민국
            <strong className={styles.strong_container}>
              <p className={count===1? styles.show : styles.hide}>출산율</p>
              <p className={count===2? styles.show : styles.hide}>입학생</p>
              <p className={count===3? styles.show : styles.hide}>시험생</p>
            </strong>
          </h1> */}
          {/* <div className={styles.text}>
            <h1>대한민국</h1>
            <div className={styles.ani_text}>
              <p className={count===1? styles.show : styles.hide}>출산율</p>
              <p className={count===2? styles.show : styles.hide}>입학생</p>
              <p className={count===3? styles.show : styles.hide}>시험생</p>
            </div>
            <div className={styles.margin_container}>출산율</div>
          </div>
          <div className={styles.text}>줄어들고 있습니다.</div> */}
        <div style={{marginLeft:'20px'}}>
        <Grid container style={{width:"100%"}} rowSpacing={3}>
          <Grid item xs={6}>
            <div className={styles.text}>
              대한민국
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.ani_container}>
              {/* <div className={styles.ani}> */}
                <div><p className={count===1? styles.show : styles.hide}>출산율</p></div>
                <div><p className={count===2? styles.show : styles.hide}>입학생</p></div>
                <div><p className={count===3? styles.show : styles.hide}>시험생</p></div>
              {/* </div> */}
            </div>
          </Grid>
          <Grid item xs={6} >
            <div className={styles.text}>
              줄어들고
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.text2} >
              있습니다.
            </div>
          </Grid>
        </Grid>

        <motion.h1 className={styles.and}
        >
          &
        </motion.h1>

        <Grid container style={{width:"100%", marginTop:"10px"}} rowSpacing={3}>
          <Grid item xs={6}>
            <div className={styles.text}>
              대한민국
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.ani_container}>
              {/* <div className={styles.ani}> */}
                <div><p className={count===1? styles.show : styles.hide}>외국인</p></div>
                <div><p className={count===2? styles.show : styles.hide}>외국인력</p></div>
                <div><p className={count===3? styles.show : styles.hide}>유학생</p></div>
              {/* </div> */}
            </div>
          </Grid>
          <Grid item xs={6} >
            <div className={styles.text}>
              늘어나고  
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.text2} >
              있습니다.
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", width:"100%", marginBottom:"40px"}}>
        <NextButton url="/page/9"/>
      </div>
    </div>
    </Wrapper>
  )
}

export default Eight