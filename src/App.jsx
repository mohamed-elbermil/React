import React from "react";
import Card from "./card";
import "../src/App.css";
import "../src/assets/css/variables.css";

const App = () => {
  const apartments = [
    {
      category: "Entire apartment rental in Collingwood",
      image: "images/appart-1.png",
      title: "A Stylish Apt, 5 min walk to Queen Victoria Market",
      view: "82 reviews",
      location: "Collingwood VIC",
      price: 540,
      details: ["Collingwood VIC ", "1 bed ", "Wi-Fi"],
    },
    {
      view: "82 reviews",
      details: ["Collingwood VIC ", "1 bed ", "Wi-Fi"],
      image: "images/appart-2.png",
      title: "Designer NY style loft",
      location: "Test VIC",
      price: 350,
    },
    {
      view: "82 reviews",
      details: ["Collingwood VIC ", "1 bed ", "Wi-Fi"],
      image: "images/appart-3.png",
      title: "5 minute walk from University of Melbourne",
      location: "Test VIC",
      price: 350,
    },
    {
      view: "82 reviews",
      details: ["Collingwood VIC ", "1 bed ", "Wi-Fi"],
      image: "images/appart-4.png",
      title: "Magnificent apartment next to public transport",
      location: "Test VIC",
      price: 350,
    },
  ];
  return (
    <div className="all-card">
      {apartments.map((apt, index) => (
        <Card key={index} {...apt} />
      ))}
    </div>
  );
};
export default App;
