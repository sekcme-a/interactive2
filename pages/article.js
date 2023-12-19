import { Grid } from "@mui/material"
import { useRouter } from "next/router"
import styles from "src/Article.module.css"
import NextButton from "src/public/components/NextButton"


const Article = () => {
  const router = useRouter()

  const list = [
    {
      img: "/images/article/1.png",
      text:`[인터뷰] 8년차 베트남 결혼이민자 박수지씨, "의사소통으로 행복한 가정"`,
      link: "https://www.kmcn.kr/news/article.html?no=5147"
    },
    {
      img:"/images/article/2.png",
      text:`외국인 지원과 상생, 정부 기관의 노력만큼 대상자도 함께해야`,
      link:"https://www.kmcn.kr/news/article.html?no=5137"
    },
    {
      img: "/images/article/3.png",
      text:`외국인 유학생, 졸업 후 한국 정착도 고려해야`,
      link:"https://www.kmcn.kr/news/article.html?no=5145"
    },
    {
      img:"/images/article/4.png",
      text: `베트남 국제결혼, 통계와 인식의 차이`,
      link:"https://www.kmcn.kr/news/article.html?no=5088"
    },
    {
      img:'/images/article/5.png',
      text: `근로자 비자 체제와 유학생, 그리고 대한민국 비자의 발전 방안`,
      link:"https://www.kmcn.kr/news/article.html?no=5148"
    },
    {
      img:`/images/article/6.png`,
      text: `호주의 이민 정책, 숙련된 이민자를 통해 발전하는 사회`,
      link:"https://www.kmcn.kr/news/article.html?no=5153"
    }
  ]

  return(
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>{`Related Article`}</h1>


      <div className={styles.article_container}>
        <Grid container rowSpacing={5} columnSpacing={2}>
          {list.map((item, index) => (

            <Grid item xs={6} sm={4} key={index}>
              <div className={styles.item_container} >
                <a target="_blank" href={item.link} rel="noreferrer">
                  <img src={item.img} alt="article" />
                  <p>{item.text}</p>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>

      </div>    
        <div style={{display:"flex", width:"100%", justifyContent:"flex-end", marginTop: "20px"}}>
          <NextButton url="/creator"/>
        </div>
      </div>
      
      <div className={styles.border} />

    
    </div>
  )
}

export default Article