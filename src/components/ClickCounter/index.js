// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(prevState => {
      count: prevState + 1
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="click-counter-container">
        <h1> The Button has been clicked {count} times</h1>
        <p> Click the button to increase the count!</p>
        <div>
          <button type="button" className="click-me" onClick={this.increment}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
