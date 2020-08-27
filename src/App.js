import React, {Component} from 'react';
import {TodoApp} from './components/TodoApp'
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		this.handleState = this.handleState.bind(this);
		if (localStorage.getItem("isLoggedIn") === null) {
			localStorage.setItem("isLoggedIn", false);
		}
		else{
			this.handleState();
		}
		
		
	}
	render() {
		console.log('entro a render');
		console.log(this.state.isLoggedIn);
		if (this.state.isLoggedIn) {
			return(
				< TodoApp / > 
			);	
		}
		else{
			return(
				< Login logged={this.handleState} />
			);			
		} 
    }
	handleState(){
		const res = this.state.isLoggedIn;
		console.log(res);
		setTimeout(() => {
		  this.setState({isLoggedIn: true});
		}, 100);
		
	}
	
}
export default App;	

