import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { RenderMaps } from "./components/renderMaps";
import Map from "./components/renderNewMap";
import FirstMap from "./components/MapContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(<FirstMap />, rootElement);
