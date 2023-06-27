import React from 'react'
import { useContext } from 'react'
import { MailContext } from '../Context/MailContext'

const Trash = () => {
  const {trashEmail} = useContext(MailContext)
  return (
    <div>
      <ul className='inboxlist'>
      {trashEmail.map(mail => (
        <li className='listEmail' key = {mail.mId}>
          <h3>Subject : {mail.subject}</h3>
            <br/>
            <p>{mail.content}</p>
        </li>
      ))}
      </ul>
     

    </div>
  )
}

export default Trash
