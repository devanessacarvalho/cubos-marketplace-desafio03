import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content:{
    padding: '2rem',
  },
  toolbar:{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputs:{
    display: 'grid',
    gap: '1rem',
  },
  ladoalado: {
    display: 'flex',
    gap: '0.75rem',
  },
}));

export default useStyles;