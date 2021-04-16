import {Button, TextField} from "@material-ui/core";
import './css/Form.css';
import useStyles from './muiStyles';

function Form () {
    const classes = useStyles();
    
    return (
      <form className={classes.root}>
         <div>
         <TextField   required
          id="title-required"
          label="Title"
          variant="outlined"
          placeholder="Title.."
         />  
        </div>
       <div>
         <TextField
          id="desc-required"
          label="Description"
          variant="outlined" 
          placeholder="Description.."
          />  
          <Button id="addBtn" variant="contained" >Add to List</Button>
          </div>
          
      </form>
    )
    }

    export default Form;