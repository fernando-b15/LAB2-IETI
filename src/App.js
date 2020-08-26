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
	}
	render() {
		const  LoginView  =  ( )  =>  ( 
			< Login / > 
		 ) ;

		const  TodoAppView  =  ( )  =>  ( 
			< TodoApp / > 
		 ) ;
		
		if (this.state.isLoggedIn) {
			return(
				< TodoApp / > 
			);	
		}
		else{
			return(
				< Login / >
			);			
		} 
    }
}	

export default App;
