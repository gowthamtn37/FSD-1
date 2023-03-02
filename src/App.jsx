import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
  const mobile = [
    {
      model: "OnePlus 9 5G",
      img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      company: "Oneplus",
    },
    {
      model: "Iphone 13 mini",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      company: "Apple",
    },
    {
      model: "Samsung s21 ultra",
      img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      company: "Samsung",
    },
    {
      model: "Xiomi mi 11",
      img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      company: "Xiomi",
    },
  ];
  return (
    <div>
      {mobile.map((eve) => (
        <PhoneList model={eve.model} img={eve.img} company={eve.img} />
      ))}
    </div>
  );
}

function PhoneList({ model, img, company }) {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia sx={{ height: 500 }} image={img} alt={model} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {company}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
