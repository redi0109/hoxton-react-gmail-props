import { EmailItem } from "./EmailItem"

export function EmailList({
  getFilteredEmails,
  toggleStar,
  toggleRead
}){
    return (
        <main className="emails">
        <ul>
          {getFilteredEmails().map((email : any, index : any) => (
            <EmailItem
              key={index}
            index = {index}
            email = {email}
            toggleRead  = {toggleRead}
            toggleStar  = {toggleStar}
            />
          ))}
        </ul>
      </main>
    )
}