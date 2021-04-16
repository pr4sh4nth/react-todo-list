import {Button, TextField} from "@material-ui/core";
import useStyles from './styles/formStyles';
import React, {useState} from 'react';

function Form (props) {
    const classes = useStyles();
    const [todoItem, setTodoItem] = useState({title: '', desc: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name==='title')
            setTodoItem({title: value, desc: todoItem.desc !== null ? todoItem.desc : null})
        else
            setTodoItem({title: todoItem.title !== null ? todoItem.title : null, desc: value})
    }

   const submitForm = () => {
        props.handleSubmit(todoItem)
        setTodoItem({title: '', desc: ''})
    }
    const {title, desc} = todoItem
    return (
      <form className={classes.root}>
         <div>
         <TextField   required
          name="title"
          label="Title"
          variant="outlined"
          placeholder="Title.."
          value={title}
            onChange={handleChange}
         />  
        </div>
       <div>
         <TextField
          name="desc"
          label="Description"
          variant="outlined" 
          placeholder="Description.."
          value={desc}
          onChange={handleChange}
          />  
          <Button id="addBtn" variant="contained" onClick={submitForm}>Add to List</Button>
          </div>
          
      </form>
    )
    }

    export default Form;