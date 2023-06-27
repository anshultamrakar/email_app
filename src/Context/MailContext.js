import { createContext } from "react";
import { useState  } from "react";
import {mails} from "../api/fakeFetch"
import {reducer} from "../Reducer/MailReducer"
export const  MailContext = createContext()

const MailProvider = ({children}) => {
 
   const [myMails , setMyMails] = useState(mails)
   const [unreads , setUnreads] = useState(false)
   const [starred , setStarred] = useState(false)
   const [trashEmail , setTrashEmail] = useState([])
   const [spamEmails , setSpamEmails] = useState([])
  
 

    const handleDelete = (id , mail) => {
      const deletedEmails = myMails.filter(email => email.mId !== id)
      setMyMails(deletedEmails)
      setTrashEmail([...trashEmail , mail])
    }

   const handleStarred = (id) => {
    const starredList = myMails.map(email => email.mId === id ? {...email , isStarred : !email.isStarred } : email)
    setMyMails(starredList)

   }

   const handleMarkRead = (id) => {
    const markReadEmail = myMails.map(email => email.mId === id ? {...email , unread : false} :email)
    setMyMails(markReadEmail)
   }

    const handleSpam = (mail) => {
     setSpamEmails([...spamEmails , mail])
     
    }

    
  return(
    <MailContext.Provider value = {{myMails , handleDelete , unreads , starred , setUnreads ,  setStarred ,trashEmail 
     , handleSpam , spamEmails , handleStarred , handleMarkRead}}>
      {children}
    </MailContext.Provider>
  )
}

export default MailProvider