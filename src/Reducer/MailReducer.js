 export const mailReducer = (state , action) => {
  switch(action.type){
    case  "DELETE_EMAIL":
      return {...state , myMails : state.myMails.filter(email => email.mId !== action.payload.mId) , trashEmail : [...state.trashEmail , action.payload ]}
      case "MARK_AS_READ" :
        return {...state , myMails : state.myMails.map(email => email.mId === action.payload.mId ? {...email ,unread : !email.unread } : email )}
      case  "REPORT_SPAM" : 
     return  {...state , spamEmails : [...state.spamEmails , action.payload]}
      }
} 
