import { Grid } from "@mui/material"
import { useRouter } from "next/router"
import styles from "src/Three.module.css"
import NextButton from "src/public/components/NextButton"


const Three = () => {
  const router = useRouter()

  return(
    <div style={{width:"100%", height:"100%", backgroundImage: `url("/images/main_bg.png")`, objectFit:"cover",
    display:"flex",flexDirection:"column", justifyContent:"space-between", flexWrap:"wrap",}}>
      <h1  className={styles.title}>
        클릭을 통해 통계를 확인해보세요.
      </h1>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className={styles.item} onClick={()=>router.push("/question/1")}>
            <h1 className={styles.number}>01</h1>
            <h1 className={styles.item_title}>취득 희망 비자</h1>
            <p>대한민국 거주를 위하여
취득하고자 하는 비자는?</p>
          </div>
        </Grid>
        <Grid item xs={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className={styles.item} onClick={()=>router.push("/question/2")}>
            <h1 className={styles.number}>02</h1>
            <h1 className={styles.item_title}>비자 정보 출처</h1>
            <p>대한민국 비자 및 이만에 대한
정보는 어디서 얻고 계신가요?</p>
          </div>
        </Grid>
        <Grid item xs={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className={styles.item} onClick={()=>router.push("/question/3")}>
            <h1 className={styles.number}>03</h1>
            <h1 className={styles.item_title}>비자 정책 인식</h1>
            <p>대한민국 이민 비자 정책에
대한 인식은 어떠신가요?</p>
          </div>
        </Grid>
        <Grid item xs={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className={styles.item} onClick={()=>router.push("/question/4")}>
            <h1 className={styles.number}>04</h1>
            <h1 className={styles.item_title}>해외 이민 정책</h1>
            <p>대한민국 외 해외 이민 및 비자
정책에 대해 들어보신적 있나요?</p>
          </div>
        </Grid>

      </Grid>



      <div className={styles.bottom_container}>
        <p>{`
조사의뢰자 : (주)몽드 한국다문화뉴스. 조사기관 : (주)사람과사회
조사방법 : 온라인 설문조사. 조사기간 : 2023년 11월 1일~30일
조사대상 : 국내 거주 베트남 성인 30명. 응답률 : 100%`}</p>
        <NextButton url="/question/5" />
      </div>
    </div>
  )
}

export default Three