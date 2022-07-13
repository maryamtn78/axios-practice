import React, { Component } from 'react';
import axios from 'axios'

import Users from './Users';

class App extends Component {

 constructor(){
  super()
  this.state={
    data:[],
    errorOcured : false,
    message:"",
    name:"",
    username:"",
    address:{}
  }
 }






componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => this.setState({
    data:response.data
  }))
  .catch(response => this.setState({
    errorOcured:true,
    message:response.message
  }))
}

changeHandlerInput=(event)=>{
  this.setState({
    [event.target.name] : event.target.value
  })
}

changeHandlerInputAddress=(event)=>{
  this.setState({
    address:{
      city:event.target.value
    }
  })
}

submitHandler=(event)=>{
event.preventDefault();
const userData ={
  name:this.state.name,
  username:this.state.username,
  address:this.state.address
}
axios.post("https://jsonplaceholder.typicode.com/users" , userData)
.then(response=>
   this.setState({
  data : [...this.state.data , response.data]
}))

}

deletHandler=(num)=>{
 let newData = this.state.data.filter(user => user.id!==num)
  axios.delete(`https://jsonplaceholder.typicode.com/users/${num}`)
  .then(response=>
    this.setState({
      data : newData
    })
  )
}

editHandler=(num)=>{
  let newData = this.state.data.filter(user => user.id!==num)
axios.patch(`https://jsonplaceholder.typicode.com/users/${num}` , {
  name : "new Name" 
})
.then(response => 
 
  this.setState({
    data : [...newData , response.data]
  })
  )
}



  render() {
    const{name , userName , city }=this.state
    return (
      <div>

        <form onSubmit={this.submitHandler} style={{ margin: "10px" , padding:"10px" }}>
        <label>name:</label>
        <input type="text" value={name} name="name" onChange={this.changeHandlerInput}/><br/><br/>
        <label>userName:</label>
        <input type="text" value={userName} name="username" onChange={this.changeHandlerInput}/><br/><br/>
        <label>city:</label>
        <input type="text" value={city} onChange={this.changeHandlerInputAddress}/><br/><br/>
        <button type="submit">submit</button>
        </form>
        {this.state.errorOcured 
        ?<h1>{this.state.message}</h1>
        :this.state.data.map(user => 
        <Users key={user.id} name={user.name} userName={user.username} city={user.address.city} deletUser={()=>this.deletHandler(user.id)}  editUser={()=>this.editHandler(user.id)}/>)
      }
      
      </div>
    )
  }
}


export default App;

