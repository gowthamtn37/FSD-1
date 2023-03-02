import "./App.css";

function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}

export default App;

function PhoneList() {
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
    <div className="phone-list-container">
      {mobile.map((mbl, prop) => (
        <Phone mobile={mbl} key={prop} />
      ))}
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <h2>{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}
