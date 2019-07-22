import React, { Component } from 'react';
import {Card,CardContent,Typography,Grid,CardMedia,CardActions,Button} from '@material-ui/core';

const itemStyles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
};
export default class BlogPostItem extends Component {
    render() {
        return (
            <Grid item  xs={12} sm={12} style={{margin:'1rem 0'}}>
                <Card style={itemStyles.card}>
                  <CardMedia style={itemStyles.cardMedia}
                    image={this.props.post.image}
                    title={this.props.post.title}
                  />
                  <CardContent style={itemStyles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {this.props.post.title}
                    </Typography>
                    <Typography>
                    {this.props.post.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      continue reading.
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
        )
    }
}
