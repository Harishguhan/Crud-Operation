import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

var details ={
    Name:'harish',
    Age:21,
    MailId:'harishguhan2122@gmail.com'
}

const HigerOrder = (Original) => class NewComponent extends React.Component{
    componentDidMount(){
        this.setState({
            name:details.Name,
            age:details.Age,
            email:details.MailId
        })
    }
    render(){ 
        return <Original {...this.state} {...this.props} />
    }
}
class Hoc extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome To Higer Order Components</h1>
                <h4>Username:{this.props.name}</h4>
                <h4>Age:{this.props.age}</h4>
                <h4>Email:{this.props.email}</h4>

                <Link to="/hello"><Button className="btn-info">Counter</Button></Link>
                
            </div>
            
        )
    }
}


export default HigerOrder(Hoc);