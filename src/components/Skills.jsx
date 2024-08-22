import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'];

function Skills() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Paper style={{ padding: '1rem', textAlign: 'center' }}>
              {skill}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
