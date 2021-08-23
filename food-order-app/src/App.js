import { Fragment } from "react";
import Header from "./componens/layout/Header";
import Meals from "./componens/meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
