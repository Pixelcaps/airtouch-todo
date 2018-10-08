import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/action_creators';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    return { todos: state.todoList };
  };

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getTodos, deleteTodo }, dispatch);
}

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    componentDidUpdate() {
        this.props.getTodos();
    }
    onDelete(el) {
        this.props.deleteTodo(el);
    }

    render() {
        const { todos } = this.props;
        return (
            <ul className="list-group list-group-flush">
                {todos.map(el => (
                <li className="list-group-item" key={el.id}>
                {el.name}
                <button type="button" className="btn btn-danger float-right" onClick={() => this.onDelete(el)}>Delete</button>
                </li>
            ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

