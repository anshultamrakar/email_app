import React from 'react'
import { useContext } from 'react'
import { MailContext } from '../Context/MailContext'

const Home = () => {
    const {state , dispatch} = useContext(MailContext)
  return (
    <div className='Home'>
          <form>
          <fieldset className='filters'>
          <legend>Filters</legend>
          <input id = "unread" type = "checkbox"   checked = {state.unread} onChange={(e) => dispatch({type : "CHANGE_HANDLER", payload : e.target.checked})} />
          <label htmlFor='unread'>Show unread emails</label>
          </fieldset>
          </form>
      <h4>Unread : {state.myMails.filter(email => email.unread).length}</h4>
        <br/>
        <ul className='inboxlist'>
        {state.myMails.map(mail => (
         <li className='listEmail' key = {mail.mId}>
            <div className='starBtn'>
            <h3>Subject : {mail.subject}</h3>
            <button onClick={() => dispatch({type : "STARED_EMAIL" , payload : mail})}>{!mail.isStarred ? "Star" : "Unstar"}</button>
            </div> 
            <br/>
            <p>{mail.content}</p>
            <div className = "mailButtons">
                <button onClick = {() => dispatch({type : "DELETE_EMAIL" , payload : mail})} style = {{color : "red" , padding : "5px"}}>Delete</button>
                <button onClick={() => dispatch({type : "MARK_AS_READ" , payload : mail})} >Mark as unread</button>
                <button onClick={() => dispatch({type : "REPORT_SPAM" , payload : mail})} >Report as spam</button>
            </div>
         </li>
        ))}
        </ul>
    </div>
  )
}

export default Home
