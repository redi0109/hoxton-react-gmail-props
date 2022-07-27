import { useState } from 'react'

import initialEmails, { Email } from './data/emails'

import './App.css'
import Header from './header'
import LeftMenu from './LeftMenu'


const getReadEmails = (emails: Email[]) => emails.filter(email => !email.read)

const getStarredEmails = (emails: Email[]) =>
  emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  function getFilteredEmails(): Array<Email> {
    let filteredEmails = emails

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails)
    }

    if (currentTab === 'starred') {
      filteredEmails = getStarredEmails(filteredEmails)
    }

    return filteredEmails
  }

  return (
    <div className="app">
  
      <Header/>
     <LeftMenu/>
      <main className="emails">
        <ul>
          {getFilteredEmails().map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
