import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const ViewContact = () => {
    const contact = useSelector(state =>state);
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    {contact.map((contact,id)=>{
                        return(
                        <div>
                        <h1>{contact.name}</h1>
                        <h1>{contact.email}</h1>
                        <h1>{contact.number}</h1>
                        </div>)
                    })}
                </div>
            </div>
        </div>




{/* 
        {contact.map((contact,id) =>(
            <div>
            <h1>{contact.number}</h1>
            <h1>{contact.email}</h1>
            </div>
        )) }*/}
        <Link to="/addcontact">add</Link> 
    </div>
  )
}

export default ViewContact