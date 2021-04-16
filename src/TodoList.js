import {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    
    render() {
        const {list, removeItem} = this.props;
        const todoList = list.map((todoItem, index) => { return <TodoItem key={index} index={index} item={todoItem} delete={removeItem}/>})

        return todoList
    }
}

export default TodoList;