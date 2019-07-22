import React, { Component } from 'react'
import BlogPost from './BlogPost';
import BlogPostItem from './BlogPostItem';
import { Grid, Container, Typography } from '@material-ui/core';

const postsAreaStyle = {
        paddingTop: '2rem',
        paddingBottom: '2rem',
};
const posts = [
    new BlogPost("https://via.placeholder.com/300",
    "Post 1","Hi This is post 1."),
    new BlogPost("https://via.placeholder.com/300",
    "Post 2","Hi This is post 2."),
    new BlogPost("https://via.placeholder.com/300",
    "Post 3","Hi This is post 3."),
    new BlogPost("https://via.placeholder.com/300",
    "Post 4","Hi This is post 4."),
];
export default class BlogPosts extends Component {
    render() {
        return (
            <div>
                
                <Container style={postsAreaStyle} maxWidth="md">
                <Typography variant="h4" component="h2">
                Blog Posts
                </Typography>
                <Grid container spacing={1}>
                {
                    posts.map( p => <BlogPostItem key={p} post={p} />)
                    
                    }
                </Grid>
                </Container>
                
                
            </div>
        )
    }
}
