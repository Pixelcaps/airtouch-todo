import React, { Component } from 'react';
import { addTodo } from '../actions/action_creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = { name: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ name: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        }
        this.props.addTodo(this.state);
        this.setState({ name: "" });
    }

    render() {
        return (
            <form noValidate onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">Submit</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

export default connect (null, mapDispatchToProps)(AddTodoForm);