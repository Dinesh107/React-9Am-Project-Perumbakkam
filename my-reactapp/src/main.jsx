import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shape from "./components/Shape.jsx";
import Triangle from "./components/Triangle.jsx";
import Header from "./components/Header.jsx";
import FavoriteColor from "./components/FavoriteColor.jsx";
import Bike from "./components/Bike.jsx";
import List from "./components/List.jsx";
import Timer from "./components/Timer.jsx";
import MyForm from "./components/MyForm.jsx";


createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Header/> */}
    {/* <FavoriteColor /> */}
    {/* <Bike/> */}
    {/* <List/> */}
    {/* <Timer/> */}
    <MyForm/>
  </>
);
