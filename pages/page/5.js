import { useRouter } from "next/router"
import Wrapper from "src/public/components/Wrapper"

import { motion } from "framer-motion"

const Six = () => {
  const router = useRouter()

  return(
    <Wrapper>
      <div onClick={()=>router.push("/page/6")}
       style={{display:"flex", width:"100%", cursor:"pointer",
       height :"100%", justifyContent:"center", alignItems:"center",
       flexWrap:"wrap"}}>

        <h1 style={{color:"white", fontSize:"40px", whiteSpace:"pre-line", textAlign:"center", lineHeight: 1.3}}>{`다른 국가는
        어떤 이민 정책을
        펴고 있을까요?`}</h1>

      <motion.p
        initial={{ x:0, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{ duration: 1, delay: 3}}
        style={{width:"100%", textAlign:"center", color:"white", position:"absolute", bottom: "20px"}}
      >
        화면 클릭 시 다음 화면으로 이동
      </motion.p>
      </div>

    </Wrapper>
  )
}

export default Six