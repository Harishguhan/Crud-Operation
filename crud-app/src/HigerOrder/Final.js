import React, { Component } from 'react'
import Welcome from './HocCounter'
class Final extends Component {
  render() {

    const { handleClick,show } = this.props
    return (
      <div>
        <h1>Count:{show}</h1>
        <button onClick={handleClick}>Click</button>
      </div>
    )
  }
}


export default Welcome(Final);