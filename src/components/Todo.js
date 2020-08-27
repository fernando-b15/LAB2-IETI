import React from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
		this.state = {text: this.props.text,priority: this.props.priority,dueDate: this.props.dueDate.format('DD-MM-YYYY')}
    }

    render() {
        return (
            <tr>
				<td><TextField id="standard-basic" value={this.state.text} onChange={(e)=>this.setText(e)}/></td>
				<td><TextField id="standard-basic" value={this.state.priority} onChange={(e)=>this.setPriority(e)}/></td>
				<td><DatePicker value={this.state.dueDate} onChange={(e)=>this.setDueDate(e)}/></td>
            </tr>
        );
    }
	setText(e){
		this.setState({'text': e.target.value})
	}
	setPriority(e){
		this.setState({'priority': e.target.value})
	}
	setDueDate(e){
		this.setState({'dueDate': e.format('DD-MM-YYYY')});
	}

}