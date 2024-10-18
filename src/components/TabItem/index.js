import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const TabBtnClassName = isActive ? 'tab_btn active' : 'tab_btn'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-list-item">
      <button type="button" onClick={onClickTab} className={TabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
