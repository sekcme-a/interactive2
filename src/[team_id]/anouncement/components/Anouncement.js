import styles from "../styles/anouncement.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { firestore as db } from "firebase/firebase"
import useData from "context/data"
import LoaderGif from "src/public/components/LoaderGif"
import { Button } from "@mui/material"
import { Dialog } from "@mui/material"
import { TextField } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import { CircularProgress } from "@mui/material"
import { Checkbox } from "@mui/material"
import Image from "next/image"
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const Anouncement = () => {
  const router = useRouter()
  const {teamId, setSubContent} = useData()
  const [folders, setFolders] = useState([])
  const [files, setFiles] = useState([])
  const [path, setPath] = useState([{
    title:"ANOUNCEMENT",
    id: "anouncement"
  }])
  const [backdropMode, setBackdropMode] = useState("hide")
  const [input, setInput] = useState("")

  const [selectedFolders, setSelectedFolders] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])

  const [triggerReload, setTriggerReload] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isContentLoading, setIsContentLoading] = useState(true)


  useEffect(()=>{
    const fetchData = async () => {
      // sessionStorage.setItem("prevAnouncementLoc","ANOUNCEMENT")
      // sessionStorage.setItem("prevAnouncementLocId", "anouncement")

      setIsContentLoading(true)
      //ANOUNCEMENT/folderName/folderName2
      let prevAnouncementLoc = sessionStorage.getItem("prevAnouncementLoc")
      //anouncement/folderId/folderId2
      let prevAnouncementLocId = sessionStorage.getItem("prevAnouncementLocId")

      if(prevAnouncementLocId===null){
        sessionStorage.setItem("prevAnouncementLoc","ANOUNCEMENT")
        prevAnouncementLoc = "ANOUNCEMENT"
        sessionStorage.setItem("prevAnouncementLocId", "anouncement")
        prevAnouncementLocId = "anouncement"
      }

      let pathData = []
      const pathList = prevAnouncementLoc.split("/")
      const pathIdList = prevAnouncementLocId.split("/")
      console.log(prevAnouncementLoc, prevAnouncementLocId)
      for(let i = 0 ; i<pathList.length; i++){
        pathData.push({title: pathList[i], id: pathIdList[i]})
      }
      setPath(pathData)

      let folderData = []
      let foldersCheckedData = []
      const folderQuery = await db.collection("team_admin").doc(teamId).collection("folders").where("parent_node", "==", pathIdList[pathIdList.length-1]).get()
      folderQuery.docs?.map((doc) => {
        folderData.push({title: doc.data().title, id: doc.id, checked: false})
        foldersCheckedData.push({id: doc.id, checked: false})
      })
      setFolders(folderData)
      console.log(foldersCheckedData)


      let fileData = []
      const fileQuery = await db.collection("team").doc(teamId).collection("anouncements").where("location","==",pathIdList[pathIdList.length-1]).get()
      fileQuery.docs?.map((doc) => {
        fileData.push({checked: false, id: doc.id, data: doc.data()})
      })
      setFiles(fileData)

      setIsLoading(false)
      setIsContentLoading(false)
    }
    fetchData()
  },[triggerReload])


  const onNewAnouncementClick = async() => {
    // db.collection("team").doc(teamId).collection("anouncements").doc().set({
    //   title: "asdf",
    //   location: path[path.length-1].id
    // })
    // setTriggerReload(!triggerReload)
    const doc = await db.collection("team").doc(teamId).collection("anouncements").doc()
    router.push(`/${teamId}/editAnouncement/${doc.id}`)
  }

  const onNewFolderClick = async () => {

    setBackdropMode("newFolder")
  }
  const onSubmitClick = () => {
    if(input.includes("/"))
      alert("폴더명에 / 는 포함될 수 없습니다.")
    else{
      setBackdropMode("hide")
      db.collection("team_admin").doc(teamId).collection("folders").doc().set({
        title: input,
        parent_node: path[path.length-1].id
      }).then(()=>{setTriggerReload(!triggerReload)})
      setInput("")
    }
  }

  const onFolderClick = (id,title, checked) => {
    if(backdropMode==="changeLocation" && selectedFolders.includes(id) )
      alert("이동할 폴더로 선택된 폴더안으로 진입할 수 없습니다.")
    else{
      sessionStorage.setItem("prevAnouncementLocId", `${sessionStorage.getItem("prevAnouncementLocId")}/${id}`)
      sessionStorage.setItem("prevAnouncementLoc",  `${sessionStorage.getItem("prevAnouncementLoc")}/${title}`)
      setTriggerReload(!triggerReload)
    }
  }

  const onPathClick = (floor)=>{
    let locId = ""
    let loc = ""
    path.map((item, index) => {
      if(index===0){
        locId = item.id
        loc = item.title
      }else if(index<=floor){
        locId = `${locId}/${item.id}`
        loc = `${loc}/${item.title}`
      }
    })
    sessionStorage.setItem("prevAnouncementLocId", locId)
    sessionStorage.setItem("prevAnouncementLoc", loc)
    setTriggerReload(!triggerReload)
  }


  const onFoldersCheckedChange = (index) => {
    if(backdropMode==="changeLocation"){
      alert("파일 이동 모드일떄는 선택을 바꿀 수 없습니다.")
      return
    }
    let temp = folders
    temp[index]={...folders[index], checked: !folders[index].checked}
    setFolders([...temp])
    console.log(temp)
  }
  const onFilesCheckedChange = (index) => {
    if(backdropMode==="changeLocation"){
      alert("파일 이동 모드일떄는 선택을 바꿀 수 없습니다.")
      return
    }
    let temp = files
    temp[index] = {...files[index], checked: !files[index].checked}
    setFiles([...temp])

  }

  const onChangeNameClick = () => {
    //선택된 폴더, 파일 id 확인
    let foldersChecked = []
    for(let i =0 ; i<folders.length; i++){
      if(folders[i].checked)
        foldersChecked.push(folders[i].id)
    }
    let filesChecked = []
    for(let i = 0 ; i<files.length; i++){
      if(files[i].checked)
        filesChecked.push(files[i].id)
    }

    if(filesChecked.length!==0)
      alert("공지사항명 공지사항안에서 변경해주세요.")
    else if (foldersChecked.length===0)
      alert("이름변경할 폴더를 선택해주세요.")
    else if( foldersChecked.length>1)
      alert("이름변경할 폴더를 하나만 선택해주세요.")
    else{
      setBackdropMode("titleChange")
    }
  }
  const onTitleChangeSubmitClick = () => {
    //선택된 폴더, 파일 id 확인
    let foldersChecked = []
    for(let i =0 ; i<folders.length; i++){
      if(folders[i].checked)
        foldersChecked.push(folders[i].id)
    }
    setBackdropMode("hide")
    if(input.includes("/"))
      alert("폴더명에 / 는 포함될 수 없습니다.")
    else{
      db.collection("team_admin").doc(teamId).collection("folders").doc(foldersChecked[0]).update({
        title: input
      }).then(()=>{setTriggerReload(!triggerReload)})
      setInput("")
    }
  }

  const onChangeLocationClick = () => {
    //선택된 폴더, 파일 id 확인
    let foldersChecked = []
    for(let i =0 ; i<folders.length; i++){
      if(folders[i].checked){
        foldersChecked.push(folders[i].id)
      }
    }
    setSelectedFolders([...foldersChecked])
    let filesChecked = []
    for(let i = 0 ; i<files.length; i++){
      if(files[i].checked)
        filesChecked.push(files[i].id)
    }
    console.log(files)
    console.log(filesChecked)
    setSelectedFiles([...filesChecked])
    if(foldersChecked.length===0 && filesChecked.length===0)
      alert("폴더나 파일을 하나 이상 선택해주세요.")
    else
      setBackdropMode("changeLocation")
  }

  const onChangeLocationButtonClick = async() => {
    const locationId = path[path.length-1].id
    const batch = db.batch()
    for(let i = 0; i < selectedFolders.length; i++) {
      batch.update(db.collection("team_admin").doc(teamId).collection("folders").doc(selectedFolders[i]),{
        parent_node: locationId
      })
    }
    for (let i = 0; i<selectedFiles.length; i++){
      batch.update(db.collection("team").doc(teamId).collection("anouncements").doc(selectedFiles[i]),{
        location: locationId
      })
    }
    try{
      await batch.commit()
      setTriggerReload(!triggerReload)
      onCancelPositionClick()
    } catch(e){
      console.log(e)
      alert(e.message)
      onCancelPositionClick()
    }
  }
  const onCancelPositionClick = () => {
    setBackdropMode("hide")
    setSelectedFiles([])
    setSelectedFolders([])
  }

  const onDeleteClick = async() => {
    if(!confirm("선택한 항목들을 삭제하시겠습니까?"))
      return
    setIsContentLoading(true)
    let foldersChecked = []
    for(let i =0 ; i<folders.length; i++){
      if(folders[i].checked)
        foldersChecked.push(folders[i].id)
    }
    let filesChecked = []
    for(let i = 0 ; i<files.length; i++){
      if(files[i].checked)
        filesChecked.push(files[i].id)
    }

    //모든 하위 폴더들 탐색
    let childFolders = [...foldersChecked]
    // for (let i = 0; i<50; i++){
    //   let foundChild = false
      for( let j = 0; j<childFolders.length; j++){
        const query = await db.collection("team_admin").doc(teamId).collection("folders").where("parent_node","==",childFolders[j]).get()
        query.docs.forEach((doc)=> {
          if(!childFolders.includes(doc.id)){
            childFolders.push(doc.id)
            // foundChild = true
            console.log(childFolders)
          }
        })
      }

    console.log(childFolders)
    const batch = db.batch()
    for(let i = 0; i < childFolders.length ; i ++ ){
      batch.delete(db.collection("team_admin").doc(teamId).collection("folders").doc(childFolders[i]))
      const query = await db.collection("team").doc(teamId).collection("anouncements").where("location","==",childFolders[i]).get()
      query.docs.forEach((doc) => {
        // filesToDelete.push(doc.id)
        batch.delete(db.collection("team").doc(teamId).collection("anouncements").doc(doc.id))
      })
    }
    for(const checkedFile of filesChecked){
      batch.delete(db.collection("team").doc(teamId).collection("anouncements").doc(checkedFile))
    }
    try{
      await batch.commit()
      alert("성공적으로 삭제되었습니다.")
      setTriggerReload(!triggerReload)
    } catch(e) {
      console.log(e)
      alert(e.message)
    }
  }

  const onFileClick = (id) => {
    // router.push(`/${teamId}/editAnouncement/${id}`)
    setSubContent({type:"anouncements", id: id})
  }

  if(isLoading)
    return <LoaderGif />
  return(
    <>
      <div className={styles.path_container}>
        <h1 onClick={()=>onPathClick(0)}>ANOUNCEMENT</h1>
        {path.map((item, index) => {
          if(index!==0)
          return(
            <div key={index} className={styles.path_item}>
              <p>{`>`}</p>
              <h2 onClick={()=>onPathClick(index)}>{item.title}</h2>
            </div>
          )
        })}

      </div>
      
      <div className={styles.button_container}>
        <div className={styles.main_button} onClick={onNewAnouncementClick}>
          새 공지사항
        </div>
        <div className={styles.button} onClick={onNewFolderClick}>
          새 폴더
        </div>
        <div className={styles.button} onClick={onChangeNameClick}>
          이름 변경
        </div>
        <div className={styles.button} onClick={onChangeLocationClick}>
          이동
        </div>
        <div className={styles.button} onClick={onDeleteClick}>
          삭제
        </div> 
        {backdropMode==="changeLocation" && 
        <div className={styles.change_location_container}>
          <Button onClick={onChangeLocationButtonClick}>여기로 이동</Button>
          <Button onClick={onCancelPositionClick}><p style={{color:"red"}}>취소</p></Button>
        </div>
      }
      </div>

      <div className={styles.content_container}>
        {isContentLoading ?
           <div className={styles.item}>
            <div className={styles.item_loading}>
              <CircularProgress />
            </div>
            <p></p>
          </div>
         :
          <>
          {folders.map((item, index)=>{
            return(
              <div className={styles.item} key={index} >
                <div className={styles.checkbox_container}>
                  <Checkbox checked={folders[index].checked || (backdropMode==="changeLocation" && selectedFolders.includes(item.id))} onChange={()=>onFoldersCheckedChange(index)} size="small"/>
                </div>
                <div className={styles.item_img_container} onClick={()=>onFolderClick(item.id, item.title, folders[index].checked)}>
                  <FolderIcon style={{fontSize: "70px"}}/>
                </div>
                <p>{item.title}</p>
              </div>
            )
          })}
          {files.map((item, index)=>{
            return(
              <div className={styles.item} key={index}>
                <div className={styles.checkbox_container}>
                  <Checkbox checked={files[index].checked || (backdropMode==="changeLocation" && selectedFiles.includes(item.id))} onChange={()=>onFilesCheckedChange(index)} size="small"/>
                </div>
                <div className={styles.condition} style={item.data.condition==="confirm" ? {color: "blue"} : item.data.condition==="decline" ? {color:"red"} : {color:"black"}}>
                  {/* {item.data.condition==="unconfirm" ? "미승인" : item.data.condition==="confirm" ? "승인" : item.data.condition==="decline" ? "반려" : "승인대기"} */}
                  {item.data.condition==="unconfirm" && "미승인"}
                  {item.data.condition==="confirm" && item.data.publishStartDate > new Date() && "예약게재"}
                  {item.data.condition==="confirm" && item.data.publishStartDate <= new Date() && "게재중"}
                  {item.data.condition==="decline" && "반려"}
                  {item.data.condition==="waitingForConfirm" && "승인대기"}
                </div>
                <div className={styles.item_img_container} onClick={()=>onFileClick(item.id)}>
                  <InsertDriveFileOutlinedIcon style={{fontSize:"70px"}} />
                </div>
                <p>{item.data.title}</p>
              </div>
            )
          })}
          </>
        }
      </div>


      {backdropMode==="newFolder" &&
      <Dialog open={true} onClose={()=>{setBackdropMode("hide")}} maxWidth="lg">
        <div className={styles.dialog_container}>
          <h1>폴더를 추가합니다.</h1>
          <TextField id="tf" label="폴더 명" variant="standard" className={styles.textField}
            value={input} onChange={(e)=>setInput(e.target.value)} 
          />
          <Button variant="text" onClick={onSubmitClick}>추가</Button>
        </div>
      </Dialog>
      }
      {backdropMode==="titleChange" &&
      <Dialog open={true} onClose={()=>{setBackdropMode("hide")}} maxWidth="lg">
        <div className={styles.dialog_container}>
          <h1>이름을 변경합니다.</h1>
          <TextField id="tf" label="폴더 명" variant="standard" className={styles.textField}
            value={input} onChange={(e)=>setInput(e.target.value)} 
          />
          <Button variant="text" onClick={onTitleChangeSubmitClick}>변경</Button>
        </div>
      </Dialog>
      }

    </>
  )
}

export default Anouncement