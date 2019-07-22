import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = {
    heroContent: {
      display:'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      margin: '1rem',
    },
    heroButtons: {
      marginTop: '1rem',
    },
  };
export default class MainArea extends Component {
    render() {
        return (
              <Container maxWidth="lg"  style={useStyles.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Material UI Blog
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                  Something short and leading about the collection below—its contents, the creator, etc.
                  Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                  entirely.
                </Typography>
                <div style={useStyles.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Main call to action
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            
        )
    }
}
