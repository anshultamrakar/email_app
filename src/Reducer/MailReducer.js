export const reducer = (state , action) => {
  switch(action.type){
    case "MY_MAILS":
        return {...state , myMails :  state.myMails };
  }
}