import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
