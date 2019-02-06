import React from "react"
import { render } from "react-dom";

import App from "./App";

const root = document.querySelector("[data-root]");

render(<App>This is React!</App>, root);

console.log("Hello world!")
