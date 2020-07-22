import React from 'react';
import axios from 'axios';

class ShowDistance extends React.Component{

    constructor(){
        super();
        this.state = {
            uid : '',
            startTime : '',
            endTime :'',
            distcnce : '',
        }

        this.onSubmit = this.onSubmit.bind(this);
    }




     onSubmit = async () =>{
        const uid = this.state.uid
        const distcnce = axios.get(`http://localhost:5000/api/v1/user/${uid}`,{
              startTime : this.state.startTime,
              endTime : this.state.endTime,
         }).then((result) =>{
             return result;
         })
    }

   render(){
    return(
        <div>
           <div>
           <input type= "text" value = {this.state.uid} onChange = {(e) =>{ this.setState({uid : e.target.value})}} ></input>
            <input type= "text" value = {this.state.uid} onChange = {(e) =>{ this.setState({uid : e.target.value})}}></input>
            <input type= "text" value = {this.state.uid} onChange = {(e) =>{ this.setState({uid : e.target.value})}}></input>
            <button type = "submit">Get Distance</button>
           </div>
           <div>
               Distance : {this.distnace}
           </div>
        </div>
    )
   }
}

export default ShowDistance;