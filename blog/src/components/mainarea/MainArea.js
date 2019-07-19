import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper } from '@material-ui/core';

export default class MainArea extends Component {
    render() {
        return (
            
                <Grid
                container

                xs="8"
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Paper >
                    <h1>Blog</h1>
                    </Paper>
                

                </Grid>
            
        )
    }
}
