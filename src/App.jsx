import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Root from "../src/router/Root";

function App() {
  return (
    <>
      <div className="flex bg-slate-300 justify-between">
        {/* <Header /> */}
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
