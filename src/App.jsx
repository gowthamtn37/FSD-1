import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Phone />
    </div>
  );
}

export default App;

function Phone() {
  const mobile = {
    model: "OnePlus 9 5G",
    img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    company: "Oneplus",
  };
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={mobile.img}
          title={mobile.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mobile.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mobile.company}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
