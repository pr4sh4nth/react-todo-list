import {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div>
            <h1> {item.title}</h1>
            <span>{item.desc}</span>
        </div>
        )
    }
}

export default TodoItem;