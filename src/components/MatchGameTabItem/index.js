import {Component} from 'react'

import './index.css'

class MatchGameTabItem extends Component {
  onClickTabItem = () => {
    const {tabDetails, updateActiveTabId} = this.props
    const {tabId} = tabDetails
    updateActiveTabId(tabId)
  }

  render() {
    const {tabDetails, isActive} = this.props
    const {tabId, displayText} = tabDetails

    const activeClass = isActive ? 'active-tab-btn' : ''

    return (
      <li key={tabId} className="tab-item-container">
        <button
          type="button"
          className={`tabs-btn ${activeClass}`}
          onClick={this.onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default MatchGameTabItem
