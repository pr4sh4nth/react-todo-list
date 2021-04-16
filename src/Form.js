import {Button, TextField} from "@material-ui/core";
import './css/Form.css';
import useStyles from './css/formStyles';

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