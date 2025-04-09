import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import React from 'react';

const projects = [
  {
    title: 'My Old Space',
    description:
      'A nostalgic web app that mimics the old MySpace experience, and gives some insight into my skills as a developer.',
    link: '/myoldspace',
  },
  {
    title: 'Magic Canvas',
    description:
      'An interactive web app where users can place and arrange virtual stickers on a customizable canvas, showcasing my skills in UI design and JavaScript functionality.',
    link: '/magic',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A simple weather dashboard that allows users to search for real-time weather data for any city, showcasing my skills in working with APIs, asynchronous data fetching, and dynamic UI rendering.',
    link: '/weather-dashboard',
  },
];

export default function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Zachary Melancon
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Welcome to my portfolio! This app showcases my skills and projects as a
        Senior Software Engineer, highlighting my expertise in full-stack
        development, UI/UX design, and technical problem solving. Explore my
        projects and feel free to connect with me for collaboration or
        inquiries.
      </Typography>

      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid key={index}>
            <Card sx={{ width: '500px', p: 2, textAlign: 'left' }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{ my: 1, wordWrap: 'break-word' }}>
                  {project.description}
                </Typography>
                <Button variant="contained" href={project.link}>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
        Connect
      </Typography>
      <Button
        variant="outlined"
        href="https://github.com/melanconz"
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </Button>
      <Button
        variant="outlined"
        href="https://linkedin.com/in/zacharymelancon"
        sx={{ ml: 2 }}
        target="_blank"
        rel="noopener noreferrer">
        LinkedIn
      </Button>
    </Container>
  );
}
