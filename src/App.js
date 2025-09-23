import React from "react";
import { ThemeProvider } from "@emotion/react";
import Routers from "./Routers/Routers";

// mock theme
const darkTheme = {
  colors: {
    primary: "#333",
    background: "#000",
    text: "#fff",
  },
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
