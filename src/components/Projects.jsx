import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import myImg from "../assets/avatar.svg"; // Updated path
import dashnoard from "../assets/dashboard.jpg"; // Updated path"
import coffee from "../assets/coffee.jpg"; // Updated path"
import stock from "../assets/stock.jpg"; // Updated path


function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.imgPath}
        alt="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={props.ghLink}
          target="_blank"
          startIcon={<BsGithub />}
        >
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            size="small"
            href={props.demoLink}
            target="_blank"
            startIcon={<CgWebsite />}
            sx={{ ml: 1 }}
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

function Projects() {
  return (
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            imgPath={dashnoard}
            isBlog={false}
            title="Design UI Dashboard Performance Games"
            description="This project focuses on designing a UI dashboard for visualizing game data statistics, including player ratings, game installations by country, and revenue trends. The dashboard will feature interactive charts and filters, providing a clear and accessible overview of game performance."
            ghLink="https://github.com/kimngan295/portfolio.git"
            demoLink="https://www.figma.com/proto/7zFbWUGfJhe1pc3AkDeBc1/Dashboard-Design-(Design-Guide)-(Community)?node-id=0-1&t=kaXLjMpde94h2AAg-1"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            imgPath={coffee}
            isBlog={false}
            title="Website Coffee"
            description="This project is a web application for a coffee shop, developed using Node.js, Supabase, and ReactJS. It features a user-friendly interface for browsing coffee products, managing orders, and handling customer interactions. The backend leverages Supabase for efficient data management, while ReactJS powers a dynamic and responsive user experience."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://github.com/kimngan295/be_coffee"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            imgPath={stock}
            isBlog={false}
            title="Stock Predict CNN "
            description="This project involves predicting stock prices using a Convolutional Neural Network (CNN) model implemented in Python. It leverages CNNs to analyze historical stock data and forecast future trends, providing insights for informed investment decisions."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://github.com/doankhoa126/LSTM_SCNN"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
