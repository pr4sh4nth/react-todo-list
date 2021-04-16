import {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    
    render() {
        console.log(this.props);
        const {list} = this.props;
        const todoList = list.map((todoItem, index) => { return <TodoItem key={index} item={todoItem}/>})

        return todoList
    }
}

export default TodoList;