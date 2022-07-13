import React, { Component } from 'react';

class Users extends Component {

    constructor(){
        super()
        this.state={
          name:"",
          userName:"",
          city:"",
          email:""
        }
      } 

    render() {
        const {name , userName ,city ,deletUser , editUser } = this.props
        return (
          <>
            <div style={{border : "2px grey solid" , margin: "10px" , padding:"10px" }}>
               <h3>name : {name}</h3>
               <h3>userName : {userName}</h3>
               <p>city : {city}</p>
               <button onClick={editUser} style={{marginRight:"5px"}}>Edit</button>
               <button onClick={deletUser}>Delete</button>
            </div>
            </>
        );
    }
}

export default Users;