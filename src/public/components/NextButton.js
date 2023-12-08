import { useRouter } from "next/router"
import styles from "./NextButton.module.css"

const NextButton = ({url, style, text}) => {
  const router = useRouter()

  if(text==='close')
  return(
    <div onClick={()=>router.back()} className={styles.button_container}
      style={{...style}}>
      <h1 className={styles.text}>CLOSE</h1>
    </div>
  )
  if(text==='start')
  return(
    <div onClick={()=>router.push("/")} className={styles.button_container}
      style={{...style}}>
      <h1 className={styles.text}>처음으로</h1>
    </div>
  )
  return(
    <div onClick={()=>router.push(url)} className={styles.button_container}
      style={{...style}}>
      <h1 className={styles.text}>NEXT</h1>
    </div>
  )
}

export default NextButton