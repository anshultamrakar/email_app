 export const mailReducer = (state , action) => {
  switch(action.type){
    case  "DELETE_EMAIL":
      return {...state , myMails : state.myMails.filter(email => email.mId !== action.payload.mId)}
      case "MARK_AS_READ" :
        return {...state , myMails : state.myMails.map(email => email.mId === action.payload.mId ? {...email ,unread : !email.unread } : email )}
 
      }
} 
