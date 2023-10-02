import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  changeBackground = () => {
    const {isDark} = this.state
    if (isDark === true) {
      this.setState({isDark: false})
    } else {
      this.setState({isDark: true})
    }
  }

  render() {
    const {isDark} = this.state
    const container = isDark ? 'bg-container-dark' : 'bg-container-light'
    const heading = isDark ? 'main-heading-dark' : 'main-heading-light'
    const button = isDark ? 'button-dark' : 'button-light'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={container}>
        <h1 className={heading}>Click To Change Mode</h1>
        <button
          type="button"
          onClick={this.changeBackground}
          className={button}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
