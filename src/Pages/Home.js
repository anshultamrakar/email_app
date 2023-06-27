import React from 'react'
import { useContext } from 'react'
import { MailContext } from '../Context/MailContext'

const Home = () => {
    const { myMails , handleDelete ,unreads , starred , setUnreads ,  setStarred  , handleSpam  , handleStarred , handleMarkRead} = useContext(MailContext)
  return (
    <div className='Home'>
        <fieldset className='filter'>
        <legend>Filters:</legend>
             <input id ="unread"  type="checkbox" value = {unreads} onChange={() => setUnreads(!unreads)} />
             <label htmlFor='unread'>Show unread email</label>
             <input id = "starred"  type="checkbox" value = {starred} onChange={() => setStarred(!starred)}/>
             <label htmlFor='starred'>Show starred email</label>
        </fieldset>
        <h4>Unread : {myMails.filter(mail => mail.unread === true).length}</h4>
        <br/>
        <ul className='inboxlist'>
        { myMails.map(mail => (
         <li className='listEmail' key = {mail.mId}>
            <div className='starBtn'>
            <h3>Subject : {mail.subject}</h3>
            <button onClick = {() => handleStarred(mail.mId)}>{mail.isStarred ? "Unstar" : "Star"}</button>
            </div>
          
            <br/>
            <p>{mail.content}</p>
            <div className = "mailButtons">
                <button onClick = {() => handleDelete(mail.mId , mail)} style = {{color : "red" , padding : "5px"}}>Delete</button>
                <button onClick={() => handleMarkRead(mail.mId)} style = {{color : "orange" , padding : "5px"}}>Mark as unread</button>
                <button  onClick={() => handleSpam(mail)}  style = {{color : "green" , padding : "5px"}}>Report as spam</button>
            </div>
         </li>
        ))}
        </ul>
       
    </div>
  )
}

export default Home
