import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const projects = [
  {
    title: 'AI Code Reviewer',
    description:
      'Analyzes and suggests improvements for JavaScript/TypeScript code.',
    link: '#',
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'Provides AI-driven feedback on resumes based on job descriptions.',
    link: '#',
  },
  {
    title: 'AI UI/UX Checker',
    description:
      'Scans websites for accessibility issues and suggests improvements.',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Zachary Melancon
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Building AI-Powered Web Experiences
      </Typography>

      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid key={index}>
            <Card sx={{ p: 2, textAlign: 'left' }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
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
