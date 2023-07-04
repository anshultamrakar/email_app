import { createContext } from "react";
import {mails} from "../api/fakeFetch"
import { useReducer } from "react";
import { mailReducer } from "../Reducer/MailReducer";
export const  MailContext = createContext()


const MailProvider = ({children}) => {
   const [state , dispatch] = useReducer(mailReducer,  {myMails : mails, unread : false , trashEmail : [] , spamEmails : []})
  return(
    <MailContext.Provider value = {{state , dispatch}}>
      {children}
    </MailContext.Provider>
  )
}

export default MailProvider