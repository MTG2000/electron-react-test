import React, { lazy, Suspense } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Navbar, Footer } from "./components/layouts";
import ScrollToTop from "./utils/ScrollToTopController";
import "./utils/App.scss";
import "./utils/aos";
import Loading from "./components/layouts/Loading";
import ScrollTopBtn from "./components/ScrollTopBtn";

const Home = lazy(() => import("./components/layouts/Home"));
const About = lazy(() => import("./components/layouts/About"));
const Contact = lazy(() => import("./components/layouts/Contact"));
const ProductPage = lazy(() => import("./components/layouts/ProductPage"));
const NewsPage = lazy(() => import("./components/layouts/NewsPage"));

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="App ">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/news" component={NewsPage} />
              <Route path="/products/:id" component={ProductPage} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
          <ScrollTopBtn />
          <Footer />
        </div>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
