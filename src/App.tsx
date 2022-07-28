import { useState } from 'react'

import initialEmails, { Email } from './data/emails'

import './App.css'

import { Header } from './components/Header'
import {LeftMenu} from './components/LeftMenu'
import {EmailList}  from './components/EmailsList'


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

     <LeftMenu
     currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      hideRead={hideRead}
      setHideRead={setHideRead}
      unreadEmails={unreadEmails}
      starredEmails={starredEmails}
      />
      
      <EmailList
      getFilteredEmails={getFilteredEmails}
      toggleStar={toggleStar}
      toggleRead={toggleRead}
      />
      
    </div>
  )
}

export default App
