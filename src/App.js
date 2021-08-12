import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
