export function ListItem ({
currentTab,
setCurrentTab,
tabName,
count
}){
    return(
        <li
            className={`item ${currentTab === tabName ? 'active' : ''}`}
            onClick={() => setCurrentTab(tabName)}
          >
            <span className={tabName}>Inbox</span>
            <span className="count">{count}</span>
          </li>
          
    )
}