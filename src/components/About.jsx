import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Styled components with enhanced design
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#fff',
  background: 'linear-gradient(135deg, #6e45e2, #88d3ce)', // Gradient background
  boxShadow: theme.shadows[5],
  borderRadius: '12px',
}));

const Section = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '2.5rem',
}));

const Subheading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: '#f0f0f0',
  fontSize: '1.5rem',
}));

const ContentText = styled(Typography)(({ theme }) => ({
  color: '#e0e0e0',
  fontSize: '1.125rem',
  lineHeight: 1.6,
}));

function About() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <StyledPaper>
        <Heading variant="h4" component="h2" gutterBottom>
          About Me
        </Heading>
        <Subheading variant="h6" component="h3">
          Hello, I'm Le Thi Kim Ngan
        </Subheading>
        <ContentText variant="body1">
          I am a Data Engineering specialist currently studying at the University of Technical Education Ho Chi Minh City. I have a solid foundation in various programming languages, including JavaScript, Python, and Java, as well as experience with frameworks such as React.js, Node.js, and Flutter. I also possess knowledge in basic UI design and data visualization techniques.
        </ContentText>
        <Section sx={{pt:"30px"}}>
          <Subheading variant="h6" component="h3">
            Skills & Experience
          </Subheading>
          <ContentText variant="body1">
            - Data Engineering and Visualization
            <br />
            - Web Development (React.js, Node.js, Springboot, Express.js)
            <br />
            - Mobile Development (Flutter)
            <br />
            - Programming Languages (JavaScript, Python, Java)
            <br />
            - Database (SQL Server, MySQL, MongoDB, Supabase)
          </ContentText>
        </Section>
        <Section>
          <Subheading variant="h6" component="h3">
            Interests
          </Subheading>
          <ContentText variant="body1">
            I am passionate about web development and enjoy building intuitive and user-friendly applications. Exploring the latest web technologies and frameworks excites me, and I am always eager to take on new challenges. I find great satisfaction in creating solutions that enhance user experiences and drive innovation.
          </ContentText>
        </Section>
        <Section>
          <Subheading variant="h6" component="h3">
            Career Goals
          </Subheading>
          <ContentText variant="body1">
            My goal is to advance my career as a web developer by leveraging my skills in creating robust and scalable web applications. I aim to work on cutting-edge projects that push the boundaries of technology and contribute to meaningful digital solutions. Ultimately, I aspire to become a lead developer and play a pivotal role in shaping the future of web development.
          </ContentText>
        </Section>
      </StyledPaper>
    </Container>
  );
}

export default About;
