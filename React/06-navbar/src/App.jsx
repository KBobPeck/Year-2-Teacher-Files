import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home } from "./Pages";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* you need to have this outside of the map
        because there is no way to add the exact property 
        without defining it seperate. make sure you that 
        if you are doing this you need to filter out Home 
        from the map method */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route path="/about">
          <About />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/products">
          <Products />
        </Route> */}

        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}

        {/* ERROR ALWAYS NEED TO BE LAST */}
        {/* <Route exact path="*">
          <Error />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
