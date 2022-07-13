import React, { Component } from 'react'

const Welcome = (Counter) =>{
class HocCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleClick = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return <Counter handleClick={this.handleClick} show={this.state.count} />
  }
}
return HocCounter
}


export default Welcome