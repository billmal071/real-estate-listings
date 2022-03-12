import Loader from "@components/fallback/Loader";
import { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "@helpers/scrollToTop";
const Home = lazy(() => import("@pages/Home"));

function App() {
  return (
    <Fragment>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
