
import { Grid } from "@mui/material"
import styles from "src/Creator.module.css"
import NextButton from "src/public/components/NextButton"


const Creator = () => {


  return(
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>The <strong>people</strong></h1>
        <div className={styles.text_container}>
          <h1 className={styles.text1}>{`Who\nMade`}</h1>
          <h1 className={styles.text2}>it</h1>
        </div>

        <div style={{marginLeft:"20px"}}>
          <h2>만든 사람들</h2>  
          <Grid container rowSpacing={4} columnSpacing={2} style={{marginTop: "10px"}}>
            <Grid item xs={6}>
              <div className={styles.item_container}>
                <img src="/images/creator/1.png" alt="만든사람" />
                <div>
                  <h3>강성혁 기자</h3>
                  <p>dealyness@naver.com</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.item_container}>
                <img src="/images/creator/2.png" alt="만든사람" />
                <div>
                  <h3>소해련 기자</h3>
                  <p>shryun210@naver.com</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.item_container}>
                <img src="/images/creator/3.png" alt="만든사람" />
                <div>
                  <h3>한예설 기자</h3>
                  <p>sdjebo@naver.com</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.button_container}>
                <NextButton text="start" />
              </div>
            </Grid>
          </Grid>
          </div>
      </div>

      <div className={styles.footer}>
        <p>본 기획물은 한국언론진흥재단의 지원을 받아 제작되었습니다.</p>
        <img src="/images/foundation.png" alt="한국언론진흥재단" />
      </div>
    
    </div>
  )
}

export default Creator