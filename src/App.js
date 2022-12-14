import React from "react"
import Router from "./routes/Router"
import { DataProvider } from "./components/dataProvider/DataProvider"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <><DataProvider>
        <div className="App">
          <Router />
        </div>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
