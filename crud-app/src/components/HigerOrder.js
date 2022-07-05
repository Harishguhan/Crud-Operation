import React, { Component } from 'react'
const EnhancedComponent = (OriginalComponent) =>{
class HigerOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    click = () =>{
        this.setState({
            count:this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <OriginalComponent click={this.click} view={this.state.count} />
      </div>
    )
  }
}
return HigerOrder
}
export default EnhancedComponent