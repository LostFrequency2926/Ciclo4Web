import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Movement from './Movement'
import MovementsData from '../dataMovements/MovementsData';
import { makeStyles } from "@material-ui/core/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const useStyles = makeStyles(({ theme }) => ({
  boxcustom: {

  }
}))

export default function Movements() {

  const classes = useStyles();

  return (
    <Box className={classes.boxcustom} sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        {
          MovementsData.map(movement => (
            <Grid justifyContent="center" item xs={12} md={4} sm={6} lg={3}>
              <Movement key={movement.id} movement={movement}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}