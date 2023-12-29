import React, { Component } from "react";
import Shop from "./components/main/ShopForYou/Shop.jsx";
import New from "./components/main/New/New";
import Kupit from "./components/main/UspeyKupit/Kupit";
import Reacomend from "./components/main/RecomendForYou/Reacomend";
import Slide from "./components/main/Slide/Slide";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer/Footer";
import "./index.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Kupit />
      <New />
      <Shop />
      <Reacomend />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
