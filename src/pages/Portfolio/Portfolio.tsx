import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 1,
            color: 'primary.main',
          }}>
          Zachary Melancon
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 6, maxWidth: 800, mx: 'auto' }}>
          Welcome to my portfolio! This app showcases my skills and projects as
          a Senior Software Engineer, highlighting my expertise in full-stack
          development, UI/UX design, and technical problem solving. Explore my
          projects and feel free to connect with me for collaboration or
          inquiries.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
            color: 'text.primary',
          }}>
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid key={index}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  borderRadius: 4,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%', // or set a minHeight like 320
                  boxShadow: 3,
                  maxWidth: 300,
                }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 0 }}>
                    {project.description}
                  </Typography>
                </CardContent>

                <Box mt={2} display="flex" justifyContent="flex-start">
                  <Button
                    variant="contained"
                    href={project.link}
                    sx={{ borderRadius: 2 }}>
                    View Project
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <Typography
          variant="h4"
          sx={{
            mt: 8,
            mb: 3,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Connect
        </Typography>

        <Box textAlign="center" display="flex" justifyContent="center" gap={2}>
          <Button
            variant="outlined"
            href="https://github.com/melanconz"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: 2 }}>
            GitHub
          </Button>
          <Button
            variant="outlined"
            href="https://linkedin.com/in/zacharymelancon"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: 2 }}>
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            href="ZacharyMelanconResumeApril2025.pdf"
            download
            sx={{ borderRadius: 2 }}>
            Download Resume
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
