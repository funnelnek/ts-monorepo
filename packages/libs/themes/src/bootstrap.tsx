import React from "react";
import { createRoot } from "react-dom/client";
import { Themes } from "./App";
import "./styles.scss";


const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<Themes />);