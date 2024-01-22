import {Component} from 'react'
import './index.css'

class MatchGameItem extends Component {
  onClickThumbnail = () => {
    const {imgDetails, onMatch} = this.props
    onMatch(imgDetails.id)
  }

  render() {
    const {imgDetails} = this.props
    const {id, thumbnailUrl} = imgDetails

    return (
      <li key={id} className="item-container">
        <button onClick={this.onClickThumbnail} className="thumbnail-btn">
          <img src={thumbnailUrl} alt="thumbnail" className="img" />
        </button>
      </li>
    )
  }
}

export default MatchGameItem
