import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';

export default class Sample extends React.Component {
	constructor () {
		super();
		this.state = {
			name:'arul',
			id:'',
			allvalues: []
		}
	}

	handleNameState (event) {
		this.setState({ name: event.target.value });
	}
	handleIdState (event) {
		this.setState({ id: event.target.value });
	}
	add () {
	var name=this.state.name;
	var id=this.state.id;
	Axios.post("http://localhost:8081/database/add",{
              name:name,
              id:id

           }).then((response) => {
                   console.log("added success")
                      }
           ).catch((error) => {
                console.log(error);
            });
	}

	delete () {
	var name=this.state.name;
	Axios.post("http://localhost:8081/database/delete" ,{
              name:name

           }).then((response) => {
                   console.log("delete success")
                      }).catch((error) => {
                console.log(error);
            });
	}
	read () {
		var name=this.state.name;
	Axios.post("http://localhost:8081/database/read",{
	name:name
	}).then((response) => {
	console.log(response);
	//this.setState({allvalues:response.data._fields[0]});
                   console.log("read success")
                      }
           ).catch((error) => {
                console.log(error);
            });
	}
	readall () {
	Axios.get("http://localhost:8081/database/readall").then((response) => {
	console.log(response);
	//this.setState({allvalues:response.data._fields[0]});
                   console.log("read success")
                      }
           ).catch((error) => {
                console.log(error);
            });
	}
	update () {
	var name=this.state.name;
	var id=this.state.id;
	Axios.post("http://localhost:8081/database/update" ,{
              name:name,
              id:id

           }).then((response) => {
                   console.log("update success")
                      
           }).catch((error) => {
                console.log(error);
            });
	}

	render () {
		return (
			<div>
				<h1>Hello {this.props.message}</h1>

				<TextField floatingLabelText="Name" onChange={this.handleNameState.bind(this)} value={this.state.add}/>
				<br/>
				<TextField floatingLabelText="Id" onChange={this.handleIdState.bind(this)} value={this.state.add}/>
				<br/>
				<RaisedButton label="add" primary={true} onClick={this.add.bind(this)}/>
				<RaisedButton onClick={this.delete.bind(this)} label="delete" primary={true}/>
 				<RaisedButton onClick={this.read.bind(this)} label="read" primary={true} />
 				<RaisedButton onClick={this.update.bind(this)} label="update" primary={true} />
 				<RaisedButton onClick={this.readall.bind(this)} label="readall" primary={true} />
				{this.state.allvalues}

			</div>
		);
	}
}//end of class
