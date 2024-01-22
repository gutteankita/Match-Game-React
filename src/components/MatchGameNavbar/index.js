import {Component} from 'react'
import './index.css'

class MatchGameNavbar extends Component {
  render() {
    const {score, time} = this.props
    return (
      <nav className="nav-header">
        <ul className="nav-content">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
          </li>
          <div className="nav-menu">
            <li>
              <p className="score">
                Score: <span className="count">{score}</span>
              </p>
            </li>
            <div className="timer">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                  className="timer-img"
                />
                <p className="count">{time} sec</p>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}

export default MatchGameNavbar
