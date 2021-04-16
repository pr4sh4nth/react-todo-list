import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

        '& #addBtn': {
            margin: '1.65rem 0 1.65rem 0.5rem',
            backgroundColor: '#4fc3f7',
            color: 'white'
        },
        '& label': {
            color: 'white',
          },
        '& label.Mui-focused': {
            color: 'white',
          },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
  
  }
  )
  );

  export default useStyles;