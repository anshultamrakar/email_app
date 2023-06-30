import React from 'react'
import { useContext } from 'react'
import { MailContext } from '../Context/MailContext'

const Home = () => {
    const {state , dispatch} = useContext(MailContext)
    console.log(state.myMails)
  return (
    <div className='Home'>
          <h4>Unread : {state.myMails.filter(mail => mail.unread === true).length}</h4> 
        <br/>
        <ul className='inboxlist'>
        {state.myMails.map(mail => (
         <li className='listEmail' key = {mail.mId}>
            <div className='starBtn'>
            <h3>Subject : {mail.subject}</h3>
            <button></button>
            </div>
            <br/>
            <p>{mail.content}</p>
            <div className = "mailButtons">
                <button onClick = {() => dispatch({type : "DELETE_EMAIL" , payload : mail})} style = {{color : "red" , padding : "5px"}}>Delete</button>
                <button onClick={() => dispatch({type : "MARK_AS_READ" , payload : mail})} >Mark as unread</button>
                <button >Report as spam</button>
            </div>
         </li>
        ))}
        </ul>
       
    </div>
  )
}

export default Home
