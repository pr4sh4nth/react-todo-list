import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
     
        backgroundColor: '#bbdefb',
      margin: '1rem'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function TodoItem (props) {
    const classes = useStyles();
   
    return (
        <div>
            <Card className={classes.root}>
            <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Title
        </Typography>
        <Typography variant="h5" component="h2">
         {props.item.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description
        </Typography>
        <Typography variant="body2" component="p">
         {props.item.desc}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.delete(props.index)} variant="contained" size="small">Delete</Button>
      </CardActions>
            </Card>
       
    </div>
    )
} 


export default TodoItem;