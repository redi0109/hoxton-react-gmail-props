import { HidenReadLeftMenu } from "./HidenReadLeftMenu"
import { ListItem } from "./ListItem"

export function LeftMenu ({
        hideRead,
        currentTab,
        setCurrentTab,
        setHideRead,
        unreadEmails,
        starredEmails
}){
    return(
        <nav className="left-menu">
        <ul className="inbox-list">
          
          < ListItem
           currentTab = { currentTab }
           setCurrentTab = { setCurrentTab }
           tabName = "Inbox"
           count = { unreadEmails.length }
           /> 


         <ListItem
         currentTab = { currentTab }
         setCurrentTab = { setCurrentTab }
         tabName = "Starred"
         count = { starredEmails.length } 
         />

         <HidenReadLeftMenu
         hideRead = { hideRead }
         setHideRead = { setHideRead }
         /> 
         
        </ul>
      </nav>
    )
}
