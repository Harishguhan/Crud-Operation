import React, { Component } from 'react'
import EnhancedComponent from './HigerOrder'
class NewOne extends Component {
  render() {
    const { view,click } = this.props
    return (
      <div>
      <button onClick={click}>Click {view} Times</button>
      </div>
    )
  }
}

export default EnhancedComponent(NewOne);